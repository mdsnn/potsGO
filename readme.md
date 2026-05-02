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

## Core spatial query

The stream assembler runs this on every session start to find what's nearby and open:


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


The agent always quotes prices in the listener's `preferred_currency`, converted at stream assembly time. The original vendor price is always preserved in the database.

---

## Exchange rate cron

Rates are refreshed hourly via a background goroutine started at boot:


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