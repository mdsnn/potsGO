# Pulse FM

**The live local feed for your city.**

Pulse FM is a hyperlocal social audio platform that helps people discover what is happening around them right now: food deals, drink specials, events, ticket drops, friend activity, vendor promos, verified reviews, and community moments.

The app feels like a live local radio show, but every segment is actionable. Users can listen, ask the agent what is going on, buy something, RSVP, join a chat, save a place, claim a deal, or follow where friends are going.

> Hear what is happening around you. Act on it instantly.

---

## What Pulse FM Is

Pulse FM is four things working together:

1. **A live local radio feed** assembled from nearby activity.
2. **A voice agent** that hosts the feed, answers questions, and nudges users.
3. **A social layer** built around friends, events, vendors, and temporary group chats.
4. **A commerce layer** for food, drinks, tickets, subscriptions, deals, and local offers.

The long-term vision is a local operating layer for the physical world: a spoken, social, actionable feed for the city around you.

---

## Core Question

Pulse FM answers:

> What is happening around me, who is going, and what can I do about it?

Users should be able to open the app and immediately understand:

- What is happening nearby
- What is popular right now
- Which friends are interested or attending
- What food, drinks, tickets, or deals are available
- Which groups or chats they can join
- What they can buy, save, RSVP to, or skip

---

## The Radio Experience

Pulse FM should feel like a real radio show, not a robotic assistant.

The host agent speaks over a subtle jazz music bed, introduces local signals, reacts to the moment, and keeps the feed moving with short, natural segments.

### Audio Layers

```text
Layer 1: Continuous jazz bed
Layer 2: AI host voice
Layer 3: Vendor, event, or review audio
Layer 4: Transition stings and bumpers
Layer 5: Ducking, fades, and volume automation
```

When the host speaks, the jazz ducks lower. When the host stops, the jazz rises slightly. Short stings mark deals, ticket drops, social signals, and transitions.

### Show Format

```text
Opening sting
Host intro
Nearby signal
Social proof or verified review
Action prompt
Music interlude
Next signal
```

The host should speak in short bursts, usually 5-15 seconds. The feed should breathe with music, vendor clips, reviews, and local ambience.

Example:

> "You are on Pulse FM, and downtown is starting to wake up. Kofi's Grill has a lunch combo running for the next 38 minutes, just a short walk from you."

---

## The Pulse Agent

The Pulse agent is a local concierge and radio host.

It can:

- Host the live feed
- Answer voice questions
- Explain what is nearby
- Recommend plans
- Surface friend activity
- Compare events or vendors
- Nudge users when something relevant happens
- Turn local signals into actions

Example queries:

- "What is happening tonight?"
- "Where are my friends going?"
- "Any food deals near me?"
- "Find me music and drinks within walking distance."
- "What events are getting popular?"
- "Tell me about this place."
- "Anything free nearby?"
- "What should I do after work?"

Example nudges:

- "Two of your friends are going to the rooftop jazz event tonight."
- "The taco spot you saved has a lunch special for the next 40 minutes."
- "There are discounted tickets for the match watch party 600 meters away."
- "You bought from Kofi's Grill last week. They just dropped a new combo."

The agent should feel present, local, restrained, and socially aware. It should never feel like a generic chatbot or an ad reader.

---

## Core Primitive: LocalSignal

The main object in Pulse FM is a `LocalSignal`.

A local signal is anything nearby that can be heard, joined, bought, saved, shared, discussed, or acted on.

Examples:

- Food special
- Drink promo
- Vendor drop
- Concert ticket drop
- Sports watch party
- Cookout
- Community event
- Wedding or private event invitation
- Corporate event
- Friend RSVP
- Verified buyer review
- Flash sale
- Subscription offer
- Group plan

Suggested shape:

```text
LocalSignal
- id
- type
- title
- description
- location
- starts_at
- ends_at
- source_type
- source_id
- audio_asset_id
- commerce_target_id
- social_context
- visibility
- urgency
- capacity
- price
- currency
- created_at
```

The feed, map, inbox, agent, group chats, ranking engine, and commerce layer all operate on local signals.

---

## Product Surfaces

### 1. The Pulse

The main live audio feed.

The Pulse plays nearby local signals in a produced radio format. Each segment has a visual card with actions, so users can act by voice or tap.

### 2. Agent Screen

A dedicated voice interface where users can ask what is going on, request recommendations, compare options, or get a plan for the day or night.

### 3. Pulse Map

A live map of nearby local signals, including events, vendors, deals, friend activity, and active groups.

### 4. Inbox

A messaging inbox for event chats, vendor chats, plan chats, and temporary groups.

### 5. Commerce

Users can buy food, drinks, tickets, local subscriptions, vendor bundles, and other offers where supported.

### 6. Vendor And Event Dashboards

Vendors and organizers can publish signals, upload audio, manage offers, view conversion, and communicate with groups.

---

## Voice Actions

Users can respond by voice or tap.

```text
"Yes"             -> confirm suggested action
"Buy it"          -> purchase or start checkout
"Add to cart"     -> add item
"RSVP"            -> join event
"Join the chat"   -> enter event/vendor/plan chat
"Tell me more"    -> agent explains
"Save it"         -> save signal
"Skip"            -> next segment
"Share it"        -> send to friend or group
```

Voice input should be mostly reactive and constrained during playback. The agent screen can support broader questions.

---

## Social And Group Chats

Pulse FM creates group chats around real-world context.

### Event Chats

Users who RSVP or buy tickets to an event are added to an event chat.

### Vendor Chats

Users who purchase from a vendor are added to a 7-day vendor group chat.

If they purchase again before expiry, they stay in the group and continue a streak.

### Plan Chats

Users can form temporary chats around plans, such as dinner, a concert, a game watch party, or a group outing.

### Drop Chats

Limited-time offers or ticket drops can create chats for users who claim, save, or buy the drop.

Group chats should expire, renew, or archive based on real activity.

---

## Ranking Signals

The feed should rank local signals by:

- Distance
- Time urgency
- Friend activity
- Event momentum
- Vendor popularity
- Verified review quality
- User preferences
- Past purchases
- Inventory or capacity
- Price sensitivity
- Freshness
- Fatigue avoidance

The feed should avoid repeating the same vendor, event type, category, or offer too often.

Suggested scoring direction:

```text
score =
  proximity
+ urgency
+ social_relevance
+ preference_match
+ conversion_quality
+ review_quality
+ freshness
- fatigue
- low_inventory_risk
- privacy_limitations
```

---

## Trust, Privacy, And Safety

Pulse FM mixes location, social context, audio persuasion, and commerce. Trust is central.

Core rules:

- Reviews must be verified by purchase or attendance.
- Friend visibility must be permission-based.
- Live location should not be exposed casually.
- Social proof can be anonymous when needed.
- Promotional content must be distinguishable from organic activity.
- Users need clear confirmation before purchases.
- Event and vendor chats need reporting and moderation.
- Food, health, allergy, and event claims need moderation.
- Alcohol and age-restricted products should be excluded from v1.

Visibility modes should include:

- Public
- Friends
- Close friends
- Group-only
- Anonymous
- Hidden

The product should reveal intent and attendance carefully, not turn into live people tracking.

---

## MVP Scope

The first version should prove the local loop in one dense market.

Good launch environments:

- Campus
- Downtown lunch district
- Nightlife block
- Festival zone
- Walkable neighborhood
- Sports/event district

### V1 Includes

- iOS app
- Live radio-style local feed
- Jazz bed and audio transitions
- AI host voice
- Agent query screen
- Location-aware local signals
- Food and drink vendor promos
- Local events
- Ticket or RSVP actions
- Friend interest and attendance signals
- Event group chats
- 7-day vendor group chats
- Basic checkout or order flow
- Verified audio reviews
- Vendor/event dashboard

### V1 Excludes

- Full open-ended social posting
- Delivery logistics
- Alcohol sales
- Complex heat maps
- Corporate event management tools
- Wedding planning workflows
- Multi-city launch
- Fully autonomous ad campaign generation
- Advanced creator monetization

The goal is not to launch with everything. The goal is to make one neighborhood feel alive.

---

## Suggested Stack

| Layer | Technology |
|---|---|
| iOS client | Swift / SwiftUI / MapKit / AVAudioEngine |
| Backend | Go / Gin |
| Database | PostgreSQL + PostGIS |
| ORM | GORM |
| Audio hosting | Cloudinary |
| Speech-to-text | OpenAI speech-to-text |
| Agent logic | OpenAI GPT model |
| Agent voice | ElevenLabs or equivalent TTS |
| Realtime | WebSockets or SSE |
| Payments | Apple Pay / payment processor |
| Push | APNs |

---

## Audio Architecture

Pulse FM should treat the host as part of an audio production system.

```text
LocalSignals
    |
    v
ShowBlock[]
    |
    v
Host script generation
    |
    v
TTS host audio
    |
    v
iOS audio engine
    |
    v
Jazz bed + host + vendor audio + reviews + stings
```

Use client-side mixing for the live feel:

```text
Jazz Bed Player  -> Mixer
Host TTS Player  -> Mixer
Signal Audio     -> Mixer
Review Audio     -> Mixer
Stingers         -> Mixer
Mixer            -> Output
```

The app should keep the next few host clips and segments buffered. If generation is slow, the music bed and cached fallback lines should cover the gap naturally.

Use licensed, owned, or commercially cleared jazz loops. Music rights must be solved from the start.

---

## High-Level Flow

```text
User opens app
    |
    v
iOS sends location, preferences, and session context
    |
    v
Backend retrieves nearby LocalSignals
    |
    v
Ranking engine scores and filters signals
    |
    v
Show assembler creates radio-style blocks
    |
    v
Agent generates intros, summaries, and nudges
    |
    v
iOS mixes jazz bed, host voice, signal audio, reviews, and stings
    |
    v
User acts by voice or tap
    |
    v
Commerce, RSVP, chat, save, share, or navigation action is triggered
```

---

## Repository Structure

```text
pulse-fm/
├── cmd/
│   └── api/
│       └── main.go
├── internal/
│   ├── agent/
│   ├── audio/
│   ├── chat/
│   ├── commerce/
│   ├── events/
│   ├── feed/
│   ├── signals/
│   ├── social/
│   ├── spatial/
│   ├── vendor/
│   └── db/
├── api/
│   ├── routes.go
│   ├── feed_handler.go
│   ├── agent_handler.go
│   ├── commerce_handler.go
│   ├── events_handler.go
│   ├── chat_handler.go
│   └── middleware.go
├── migrations/
├── pkg/
│   └── money/
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Design Principles

### Make The City Feel Alive

The app should make users feel like things are happening around them and they are close enough to join.

### Be Audio First, Not Audio Only

Users should be able to listen hands-free, but every important action should also be available visually.

### Make The Host Present

The host should know the time, neighborhood, previous segment, next segment, weather, friend context, and user preferences.

### Keep Segments Short

Radio energy comes from pacing. The host should not monologue.

### Make Every Signal Actionable

If a signal cannot be joined, bought, saved, shared, discussed, or navigated to, it probably does not belong in the feed.

### Protect Social Trust

Friend activity should make the product feel alive, not invasive.

---

## Product Thesis

Local life is fragmented across maps, chats, flyers, social media, vendor pages, event platforms, ticketing tools, and word of mouth.

Pulse FM brings those signals into one live, local, radio-style feed.

The long-term goal is to become the operating system for what is happening nearby:

> a social, spoken, actionable pulse for the city.
