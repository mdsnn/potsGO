# VibeStream

A hyperlocal audio commerce platform for iOS. VibeStream streams a continuous, location-aware radio feed of vendor promotions, AI-hosted introductions, and verified buyer reviews — letting listeners discover and purchase food and beverage products entirely by voice.

---

## What it is

VibeStream is three things working together as one experience:

- **A radio station** assembled in real time from vendors, buyers, and an AI host — all within walking distance of you
- **A voice commerce layer** where saying "yes" or "add to cart" is the entire checkout flow
- **A location heat map** that reflects live purchasing and audio activity nearby

The stream plays automatically when you open the app. You just listen. The AI host introduces vendors, plays their recorded promos, surfaces relevant buyer reviews, and nudges you toward purchase — all without you touching a screen.

---

## Stack

| Layer | Technology |
|---|---|
| iOS client | Swift / SwiftUI / MapKit |
| Backend | Go / Gin |
| Database | PostgreSQL + PostGIS |
| ORM | GORM |
| Audio hosting | Cloudinary |
| Speech-to-text | OpenAI Whisper |
| TTS (agent voice) | ElevenLabs |
| LLM (agent logic) | OpenAI GPT-4o |
| Exchange rates | Open Exchange Rates API |
| Real-time | Socket.io (check-in pulses) |

---

## Repository structure

```
vibestream/
├── cmd/
│   └── api/
│       └── main.go                 # Entry point, wires all services
│
├── internal/
│   ├── spatial/
│   │   ├── service.go              # PostGIS ST_DWithin queries
│   │   └── models.go               # NearbyVibe, LocationPoint types
│   │
│   ├── stream/
│   │   ├── assembler.go            # Core playlist compiler
│   │   ├── ranker.go               # Scoring: urgency, proximity, social
│   │   ├── segment.go              # StreamSegment type and builder
│   │   └── session.go              # Active stream state per user
│   │
│   ├── agent/
│   │   ├── host.go                 # DJ intro / outro generation
│   │   ├── tts.go                  # Text-to-speech bridge
│   │   └── prompts.go              # LLM prompt templates
│   │
│   ├── commerce/
│   │   ├── cart.go                 # Add to cart, voice checkout
│   │   ├── orders.go               # Order creation and status
│   │   └── currency.go             # Money type, conversion logic
│   │
│   ├── vendor/
│   │   ├── service.go              # Vendor CRUD, hours management
│   │   └── dashboard.go            # Sales metrics, conversion data
│   │
│   ├── audio/
│   │   ├── service.go              # Upload, store, retrieve audio assets
│   │   └── transcribe.go           # Whisper transcription, stores transcript
│   │
│   └── db/
│       ├── postgres.go             # Connection, migrations
│       └── queries.go              # Shared query helpers
│
├── pkg/
│   └── money/
│       └── money.go                # Money struct — never use float64 for currency
│
├── api/
│   ├── routes.go                   # Gin router, all endpoints registered here
│   ├── stream_handler.go           # GET /stream, POST /stream/act
│   ├── vendor_handler.go           # Vendor dashboard endpoints
│   ├── commerce_handler.go         # Cart, checkout, orders
│   └── middleware.go               # Auth, location header parsing
│
├── migrations/                     # SQL migration files (numbered)
├── .env.example
├── docker-compose.yml              # Postgres + PostGIS local dev
└── README.md
```

---

## Database schema

### Core tables

**vendors** — shops and food stalls on the platform

```sql
id              uuid PRIMARY KEY
name            text NOT NULL
bio             text
logo_url        text
location        geography(Point, 4326)   -- PostGIS point
verified_at     timestamptz
created_at      timestamptz DEFAULT now()
```

**vendor_hours** — used to gate stream playback; closed vendors never play

```sql
id              uuid PRIMARY KEY
vendor_id       uuid REFERENCES vendors(id)
day_of_week     int  -- 0 = Sunday, 6 = Saturday
opens_at        time NOT NULL
closes_at       time NOT NULL
is_closed       boolean DEFAULT false
```

**products** — food and beverage items only

```sql
id              uuid PRIMARY KEY
vendor_id       uuid REFERENCES vendors(id)
name            text NOT NULL
description     text
price           bigint NOT NULL          -- smallest currency unit (cents, toea, etc.)
currency_code   char(3) NOT NULL         -- ISO 4217
category        text CHECK (category IN ('food', 'beverage', 'combo', 'special'))
dietary_tags    text[]                   -- ['vegan', 'halal', 'gluten_free']
is_available    boolean DEFAULT true
available_from  time                     -- null = always available
available_until time                     -- null = always available
image_urls      text[]
stock_quantity  int
created_at      timestamptz DEFAULT now()
```

**audio_assets** — unified table for all audio regardless of origin

```sql
id              uuid PRIMARY KEY
origin_type     text CHECK (origin_type IN ('vendor', 'reviewer', 'agent'))
origin_id       uuid                     -- vendor_id, user_id, or agent session
source_type     text CHECK (source_type IN ('recorded', 'tts_generated'))
audio_url       text NOT NULL
duration_secs   int NOT NULL
transcript      text                     -- always populated; agent uses this for context
waveform_url    text
created_at      timestamptz DEFAULT now()
```

**vibes** — vendor promotional audio pinned to a location

```sql
id              uuid PRIMARY KEY
vendor_id       uuid REFERENCES vendors(id)
audio_asset_id  uuid REFERENCES audio_assets(id)
title           text
location        geography(Point, 4326)
radius_meters   int DEFAULT 500          -- how far a user can be to receive this vibe
play_count      int DEFAULT 0
created_at      timestamptz DEFAULT now()
```

**vibe_products** — the spine of the system; links audio timestamps to products

```sql
id                uuid PRIMARY KEY
vibe_id           uuid REFERENCES vibes(id)
product_id        uuid REFERENCES products(id)
timestamp_seconds int                    -- at 0:12 this product is being discussed
is_primary        boolean DEFAULT false  -- one hero product per vibe
```

**users**

```sql
id                       uuid PRIMARY KEY
full_name                text NOT NULL
email                    text UNIQUE NOT NULL
avatar_url               text
preferred_currency       char(3)
default_shipping_address jsonb
created_at               timestamptz DEFAULT now()
```

**orders**

```sql
id                  uuid PRIMARY KEY
user_id             uuid REFERENCES users(id)
vendor_id           uuid REFERENCES vendors(id)
vibe_id             uuid REFERENCES vibes(id)      -- which stream segment triggered this
exchange_rate_id    uuid REFERENCES exchange_rates(id)
status              text CHECK (status IN ('pending','confirmed','preparing','ready','delivered'))
subtotal            bigint NOT NULL                -- in vendor's currency
subtotal_currency   char(3) NOT NULL
display_amount      bigint NOT NULL                -- what user saw in their currency
display_currency    char(3) NOT NULL
exchange_rate_used  numeric(18,8) NOT NULL         -- snapshot of rate at transaction time
shipping_address    jsonb
created_at          timestamptz DEFAULT now()
```

**order_items**

```sql
id          uuid PRIMARY KEY
order_id    uuid REFERENCES orders(id)
product_id  uuid REFERENCES products(id)
quantity    int NOT NULL
unit_price  bigint NOT NULL
```

**reviews** — only created after order status = delivered

```sql
id              uuid PRIMARY KEY
user_id         uuid REFERENCES users(id)
product_id      uuid REFERENCES products(id)
order_id        uuid REFERENCES orders(id)    -- enforces purchase gate
audio_asset_id  uuid REFERENCES audio_assets(id)
rating          int CHECK (rating BETWEEN 1 AND 5)
is_approved     boolean DEFAULT false
created_at      timestamptz DEFAULT now()
```

**stream_segments** — the assembled radio queue served to each user

```sql
id              uuid PRIMARY KEY
user_id         uuid REFERENCES users(id)
audio_asset_id  uuid REFERENCES audio_assets(id)
product_id      uuid REFERENCES products(id)    -- always present; commerce anchor
segment_type    text CHECK (segment_type IN ('vendor_vibe','recommendation','social_signal','promotion','review','agent_intro','agent_nudge'))
action_prompt   text                            -- e.g. "Want me to add that to your cart?"
acted_on        boolean DEFAULT false
played_at       timestamptz
```

**currencies**

```sql
code            char(3) PRIMARY KEY    -- ISO 4217
name            text NOT NULL
symbol          text NOT NULL
decimal_places  int DEFAULT 2
is_active       boolean DEFAULT true
```

**exchange_rates**

```sql
id              uuid PRIMARY KEY
from_currency   char(3) NOT NULL
to_currency     char(3) NOT NULL
rate            numeric(18,8) NOT NULL
fetched_at      timestamptz DEFAULT now()
```

---

## Core spatial query

The stream assembler runs this on every session start to find what's nearby and open:

```sql
SELECT
    v.id,
    v.title,
    v.audio_url,
    v.play_count,
    p.id           AS product_id,
    p.name         AS product_name,
    p.price,
    p.currency_code,
    p.available_until,
    vp.timestamp_seconds,
    vp.is_primary,
    ST_Distance(v.location, ST_MakePoint($1, $2)::geography) AS distance_meters
FROM vibes v
JOIN vibe_products vp      ON vp.vibe_id = v.id
JOIN products p            ON p.id = vp.product_id
JOIN vendors vn            ON vn.id = v.vendor_id
JOIN vendor_hours vh       ON vh.vendor_id = vn.id
    AND vh.day_of_week = EXTRACT(DOW FROM now())
    AND vh.is_closed = false
    AND now()::time BETWEEN vh.opens_at AND vh.closes_at
WHERE ST_DWithin(
    v.location,
    ST_MakePoint($1, $2)::geography,
    $3                -- radius in metres
)
AND p.is_available = true
AND (p.available_until IS NULL OR now()::time < p.available_until)
ORDER BY distance_meters ASC;
```

---

## Stream assembly flow

```
User opens app → SwiftUI sends location to GET /stream
                          │
                    stream_handler.go
                          │
              ┌───────────┼───────────────┐
              │                           │
        spatial.Service            stream.Assembler
        (PostGIS query)            (playlist compiler)
              │                           │
        nearby vibes             for each vibe:
        ranked by score          [agent intro segment]
                                 [vendor audio segment]
                                 [review segment if exists]
                                 [agent nudge if in stock]
                                          │
                                    agent.Host
                                 (LLM → TTS → audio_url)
                                          │
                              []StreamSegment returned to SwiftUI

SwiftUI plays segments sequentially.
User says "yes" → POST /stream/act { segment_id, action: "buy" }
Backend resolves product from segment → creates order → confirms.
```

---

## Segment ranking

Segments are scored before playlist assembly. Higher score = plays sooner.

| Signal | Max score contribution |
|---|---|
| Proximity (closer = higher) | 40 points |
| Urgency (available_until within 60 min) | 30 points |
| Popularity (log of play_count) | variable |

---

## Money handling

**Never use `float64` for currency.** All prices and amounts are stored as integers in the smallest currency unit (e.g. 1250 = NAD 12.50).

```go
// pkg/money/money.go
type Money struct {
    Amount   int64  `json:"amount"`
    Currency string `json:"currency"`
}

func Convert(m Money, toCurrency string, rate float64) Money {
    return Money{
        Amount:   int64(float64(m.Amount) * rate),
        Currency: toCurrency,
    }
}
```

The agent always quotes prices in the listener's `preferred_currency`, converted at stream assembly time. The original vendor price is always preserved in the database.

---

## Exchange rate cron

Rates are refreshed hourly via a background goroutine started at boot:

```go
func StartExchangeRateCron(db *gorm.DB) {
    ticker := time.NewTicker(1 * time.Hour)
    go func() {
        for range ticker.C {
            rates := fetchFromOpenExchangeRates()
            for _, r := range rates {
                db.Save(&ExchangeRate{
                    FromCurrency: r.From,
                    ToCurrency:   r.To,
                    Rate:         r.Rate,
                    FetchedAt:    time.Now(),
                })
            }
        }
    }()
}
```

At order creation, the rate used is snapshotted into the order row as `exchange_rate_used` and `exchange_rate_id` for full auditability.

---

## Voice interaction model

The user's voice input is reactive, not open-ended. While a segment is playing, the app listens for a constrained set of intents:

| User says | Action |
|---|---|
| "Yes" / "Buy it" | Triggers checkout for current product |
| "Add to cart" | Adds to cart, stream continues |
| "Tell me more" | Agent reads product description aloud |
| "Save it" | Adds to wishlist |
| "Skip" | Next segment |

The AI host does most of the talking. The user mostly responds.

---

## Vendor content rules

- Vendors record their own promotional audio (their real voice)
- Vendors manage product availability windows via their dashboard
- Community reviews are audio-only, recorded post-purchase, gated by `order.status = delivered`
- The AI agent voice is a single consistent branded voice across all users

---

## Local development

```bash
# Start Postgres with PostGIS
docker-compose up -d

# Run migrations
go run cmd/migrate/main.go

# Start the API server
go run cmd/api/main.go

# Required environment variables (see .env.example)
DATABASE_URL=postgres://...
OPENAI_API_KEY=...
ELEVENLABS_API_KEY=...
CLOUDINARY_URL=...
OPEN_EXCHANGE_RATES_APP_ID=...
```

---

## Environment variables

```bash
# Database
DATABASE_URL=

# Audio and transcription
OPENAI_API_KEY=          # Whisper + GPT-4o
ELEVENLABS_API_KEY=      # Agent TTS voice
ELEVENLABS_VOICE_ID=     # Branded VibeStream host voice ID

# Storage
CLOUDINARY_URL=

# Currency
OPEN_EXCHANGE_RATES_APP_ID=

# Auth
JWT_SECRET=

# Server
PORT=8080
ENV=development
```

---

## Design decisions

**Why food and beverage only (v1):** The review cycle is fast, urgency is built in (lunch specials, closing time), and hyperlocal proximity makes obvious sense. Expanding verticals is a later decision.

**Why reviews require purchase confirmation:** Trust is the product. An unverified review in an audio stream that leads directly to a purchase is a significant liability. The gate is non-negotiable.

**Why integer money storage:** Float arithmetic silently corrupts financial records. Every amount in the system is stored as the smallest currency unit and converted only at the display layer.

**Why transcripts are always stored:** The agent needs to know what was said in a vendor clip to introduce it without repeating information. Transcripts are generated on upload via Whisper and stored immediately.

**Why `vibe_id` is on the orders table:** Attribution. The vendor dashboard's most valuable metric is which audio content is actually converting to sales. Without this foreign key, that analysis is impossible.