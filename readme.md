# Pulse FM

**The live local feed for your city.**

Pulse FM is a hyperlocal social audio platform that helps people discover what is happening around them right now: food deals, drink specials, events, ticket drops, friend activity, vendor promos, verified reviews, and community moments.

The app feels like a live local radio show, but every segment is actionable. Users can listen, ask the agent what is going on, buy something, RSVP, join a chat, save a place, claim a deal, or follow where friends are going.

> Hear what is happening around you. Act on it instantly.

---

## What Pulse FM Is

Pulse FM is four things working together:

1. **A live local radio feed** assembled from nearby activity.
2. **A cast of AI MCs** who host the feed, answer questions, and nudge users.
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

## Product Decisions

Pulse FM should begin with one dense scene, not an entire city.

### First Narrow User

The first user should be students and young city people in a dense campus, nightlife, food, or downtown corridor. They have flexible plans, repeat behavior, social discovery needs, and enough willingness to try a new audio-social habit.

### First Location

The first neighborhood should be dense, walkable, and socially concentrated. A university district, downtown creative strip, nightlife block, festival zone, sports district, or campus corridor is better than a broad city launch.

The question is not "how big is the city?" The question is:

> Can 20-40 active local signals make this place feel alive?

### First Repeated Habit

The strongest first habit is:

> What is happening after class or work, and where should we go?

Lunch is useful, but evening plans are more emotional and more social.

### Alone Use Case

When alone, the user opens Pulse FM to find something nearby that feels possible and not awkward:

- Food nearby
- Music nearby
- A calm place to go
- A public event
- A plan they can join
- Something friends are considering

### Group Use Case

With friends, the user opens Pulse FM to decide where to go next.

Pulse FM should make group decision-making easier by surfacing nearby options, social proof, price, urgency, distance, and chat activity.

### First 60-Second Aha Moment

The host should say something nearby, socially relevant, and actionable.

Example:

> "Maya and two others are looking at rooftop jazz tonight. Tickets are still discounted, and Kofi's has food nearby if you want to start there."

The user should feel:

> This app knows the local scene better than my feed does.

### What Must Work First

Without friend data, Pulse FM is still a local radio discovery app.

Without commerce, Pulse FM is still useful but leaks value.

Without events and local signals, Pulse FM becomes too vendor-heavy and feels like ads.

The first thing that must work is **local relevance**: good nearby signals that feel alive.

---

## The Radio Experience

Pulse FM should feel like a real radio show, not a robotic assistant.

The host speaks over a subtle jazz music bed, introduces local signals, reacts to the moment, and keeps the feed moving with short, natural segments.

### Audio Layers

```text
Layer 1: Continuous jazz bed
Layer 2: MC or host voice
Layer 3: Real vendor, organizer, buyer, or attendee voices
Layer 4: Transition stings and bumpers
Layer 5: Ducking, fades, and volume automation
```

When the host speaks, the jazz ducks lower. When the host stops, the jazz rises slightly. Short stings mark deals, ticket drops, social signals, and transitions.

### Show Format

```text
Opening sting
MC scene-setter
Nearby signal
Real vendor, organizer, reviewer, or attendee clip
Social proof
Action prompt
Music interlude
Next signal
```

The host should speak in short bursts, usually 5-15 seconds. The feed should breathe with music, real local voices, reviews, and local ambience.

Example:

> "You are on Pulse FM, and downtown is starting to wake up. Kofi's Grill has a lunch combo running for the next 38 minutes, just a short walk from you."

### Talk Ratio

The MC should talk around 20-35 seconds per minute at most. The rest should be music, vendor clips, buyer clips, attendee clips, ambience, silence, and action time.

### Silence

The app should be quiet when the user is deciding, reading, paying, joining a chat, or when there is not enough quality inventory. Silence is better than filler.

### Latency

Normal transitions should feel near-instant. Agent answers should ideally start within 2-3 seconds. If generation is slow, the jazz bed and cached fallback lines should cover the gap naturally.

---

## MC System

Pulse FM should have a small cast of MCs instead of one generic assistant.

Each MC has a voice, tempo, taste, and role. The app can choose the MC based on time of day, user preference, city, scene, or show type.

### MC Principles

- MCs are hosts, not chatbots.
- MCs should sound present, local, and socially aware.
- MCs should reference live context so the feed feels like it is happening now.
- MCs should not pretend to be real humans.
- MCs should not over-talk or over-sell.
- MCs should introduce real local voices whenever possible.
- MCs should be useful first, stylish second.

### Example MCs

#### Nia

Warm, observant, calm, and conversational. Best for daily feed, after-work plans, food, neighborhood context, and general discovery.

Style:

```text
Energy: medium-low
Tone: warm local radio host
Pacing: relaxed, clear, short
Best for: daily Pulse, evening plans, food, social nudges
Avoid: hype, slang overload, robotic summaries
```

#### Sol

Late-night, music-forward, smooth, and atmospheric. Best for nightlife, jazz, concerts, lounges, and city-after-dark listening.

Style:

```text
Energy: low-medium
Tone: late-night radio
Pacing: slow, stylish, minimal
Best for: nightlife, music events, date-night plans
Avoid: long monologues, forced coolness
```

#### Kairo

High-energy, sharp, and event-driven. Best for sports, ticket drops, campus movement, watch parties, and fast-moving group plans.

Style:

```text
Energy: high
Tone: energetic but controlled
Pacing: quick, direct
Best for: sports, campus events, ticket urgency, group momentum
Avoid: shouting, fake scarcity, pressure tactics
```

#### Luma

Community-minded, gentle, and practical. Best for markets, community events, cookouts, family-friendly signals, local causes, and daytime plans.

Style:

```text
Energy: medium
Tone: thoughtful and welcoming
Pacing: clear, steady
Best for: community events, markets, local announcements
Avoid: sounding official, preachy, or too formal
```

### MC Handoff

MCs can hand off between show blocks.

Example:

```text
Nia: "I am going to pass this one to Sol. The Yard is warming up for jazz tonight."
Sol: "Soft lights, rooftop air, and a live trio at eight. Three of your friends are already circling this one."
```

This makes Pulse FM feel like a real station with programming, not a single endless assistant voice.

---

## Live Context Engine

Radio feels live because it references the moment. Pulse FM should feed the MC enough context to make every segment feel current, local, and connected to the last thing the user heard.

The MC should know:

- Time of day
- Day of week
- Weather
- Nearby neighborhood
- Distance from the signal
- Event start time
- Deal expiry time
- Stock or capacity
- Friend activity
- Recent purchases
- Recent saves or skips
- Trend velocity
- User preferences
- Previous segment
- Next segment
- Current music bed
- Current show mood

Example:

> "It is just after six, and the neighborhood is starting to tilt toward dinner. Two blocks over, The Yard has live jazz warming up."

The MC should not simply describe a database row. It should place the signal inside the user's current moment.

### Context Rules

- Mention time only when it adds urgency or atmosphere.
- Mention distance in natural language, not raw coordinates.
- Mention friends only within their visibility settings.
- Mention stock or capacity only when accurate enough to trust.
- Avoid fake certainty.
- Avoid repeating the same context pattern in every segment.
- Use previous and next segment context to create continuity.

Good:

> "You just heard Kofi's lunch drop. If you want to turn that into a plan, The Yard starts jazz in about an hour and it is close enough to walk."

Bad:

> "There is an event 0.9 kilometers from your current location starting at 20:00."

---

## Stingers And Transitions

Tiny branded audio cues are part of the product identity.

Pulse FM needs:

- Opening sting
- Segment transition
- Deal alert sting
- Friend or social signal sting
- Ticket drop sting
- Purchase confirmation sound
- RSVP confirmation sound
- Chat join sound
- Soft error sound
- End-of-block bumper

These should be subtle and tasteful: more jazz-radio identity than game-show sound design.

Stingers should help the user understand the feed without looking at the screen. A ticket drop, friend signal, vendor promo, and verified review should each feel slightly different.

---

## Show Clock

The stream assembler should schedule a show, not just play a ranked list.

Do not treat the feed as:

```text
ranked signals -> play in order
```

Treat it as:

```text
show block -> MC intro -> local signal -> real voice -> proof -> action prompt -> transition -> next block
```

The show clock controls pacing, variety, and energy.

Example 5-minute clock:

```text
00:00 Opening sting
00:05 MC scene-setter
00:20 Local food or vendor signal
00:45 Real vendor voice
01:05 Action prompt
01:15 Music bridge
01:30 Event signal
01:50 Friend or social proof
02:05 Ticket or RSVP prompt
02:20 Review or attendee clip
02:45 MC connects prior signal to next option
03:00 Community or plan signal
03:25 Chat invitation
03:40 Music bridge
04:00 Personalized nudge
04:30 Save, buy, RSVP, or skip prompt
04:50 End-of-block bumper
```

The show clock should avoid too many ads, too many events, too many friend signals, or too many purchase prompts in a row.

---

## Real Local Voices

Vendor, organizer, buyer, and attendee voices are a core part of Pulse FM.

The MC creates the frame, but real voices create trust and texture.

### Voice Sources

- Vendors recording promos in their own voice
- Organizers describing events
- Buyers leaving verified audio reviews
- Attendees sharing short post-event reactions
- Friends sending voice notes into a plan or event chat

### Vendor Voice Rule

Vendors should be encouraged to record their own promos, but should not be blocked if they do not.

Best flow:

1. Vendor creates a signal in under 60 seconds.
2. Vendor adds title, time, location, price, inventory, and action.
3. Pulse FM generates a temporary MC read.
4. Vendor can replace or enrich it with their own voice.
5. Strong vendor voices get ranked and reused because they convert better.

### Why Real Voices Matter

Real voices make the feed feel local, human, and less like an ad network.

The ideal segment sounds like:

```text
MC introduces the moment
Vendor speaks in their own voice
Verified buyer or friend signal adds trust
MC returns with a short action prompt
```

---

## The Pulse Agent

The Pulse agent is both a local concierge and part of the radio station.

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

The main feed primitive in Pulse FM is a `LocalSignal`.

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

Events, vendors, deals, reviews, and friend actions can have their own tables, but they should project into `LocalSignal` for feed assembly.

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

### Friend Activity

Friend activity can include:

- RSVP
- Ticket purchase
- Saved event
- Joined chat
- Check-in
- Verified review
- Share
- Interest signal

Friend activity should not mean raw live tracking by default.

### Event Chats

Users who RSVP or buy tickets to an event are invited into an event chat. Event chats should expire 12-24 hours after the event unless extended by meaningful activity.

### Vendor Chats

Users who purchase from a vendor are invited into a 7-day vendor group chat.

If they purchase again before expiry, they stay in the group and continue a streak.

### Plan Chats

Users can form temporary chats around plans, such as dinner, a concert, a game watch party, or a group outing.

### Drop Chats

Limited-time offers or ticket drops can create chats for users who claim, save, or buy the drop.

### Chat Safety

Chats need mute, report, block, moderation, and automatic escalation for spam or harassment. Group chats should expire, renew, or archive based on real activity.

---

## Commerce

V1 commerce should be simple.

Start with:

- Ticket purchase or RSVP
- Simple vendor deals
- Pickup-only food or drink orders where supported

Delay:

- Delivery logistics
- Complex subscriptions
- Alcohol sales
- Regulated goods
- Marketplace-wide loyalty programs

### Fulfillment

Vendors and organizers handle fulfillment, but Pulse FM owns the customer experience and refund routing.

If an item is unavailable after it has played in the feed, the app should apologize, offer replacement or refund options, and penalize the vendor or organizer reliability score.

### Monetization

Start with transaction revenue and vendor/event tools.

Possible models:

- 5-10% transaction take rate
- Flat vendor or organizer software fee
- Paid boosts for clearly labeled sponsored signals

Sponsored signals must be labeled. Organic friend signals should never be purchasable.

---

## Supply

The first 20 vendors and organizers join because Pulse FM gives them measurable local demand:

- Plays
- Saves
- Shares
- RSVPs
- Purchases
- Chat joins
- Repeat buyers
- Audio conversion metrics

### Signal Creation

Creating a signal should take under 60 seconds.

Minimum fields:

- Title
- Location
- Time window
- Price or action
- Capacity or inventory
- Optional audio

The agent can generate a temporary MC read from structured input. Real vendor or organizer audio can be added later and should be encouraged.

### Verification

Events can be verified through organizer identity, venue confirmation, ticket/payment proof, manual review, or trusted partner status.

Reviews should require purchase, RSVP, attendance, or another qualifying action.

Fake events, fake promos, and bait-and-switch offers should reduce reliability score and can trigger takedown or merchant suspension.

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
- Vendor reliability
- Voice quality and engagement

The feed should avoid repeating the same vendor, event type, category, MC, or offer too often.

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
+ vendor_voice_quality
- fatigue
- low_inventory_risk
- privacy_limitations
- reliability_risk
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
- Sponsored signals must be labeled.
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

### Defaults

By default, friends should not see precise live location. They can see only the activity the user chooses to reveal: interested, saved, RSVP'd, attending, joined chat, or hidden.

Vendors should see aggregate analytics and fulfillment data only. They should not see user movement history or friend graph.

Vendors should not be able to message buyers one-to-one in v1. Use controlled vendor group chats and broadcasts instead.

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

The best first scene is **campus or downtown evening plans**: food, music, watch parties, small events, and friend movement.

### V1 Includes

- iOS app
- Live radio-style local feed
- Jazz bed and audio transitions
- Multiple MC personalities
- Real vendor and organizer audio
- Verified buyer or attendee audio reviews
- Agent query screen
- Location-aware local signals
- Food and drink vendor promos
- Local events
- Ticket or RSVP actions
- Friend interest and attendance signals
- Event group chats
- 7-day vendor group chats
- Basic checkout or order flow
- Vendor/event dashboard

### V1 Excludes

- Full open-ended social posting
- Delivery logistics
- Alcohol sales
- Adult events
- Gambling
- Medical claims
- Political events and campaign content
- Complex heat maps
- Corporate event management tools
- Wedding planning workflows
- Multi-city launch
- Fully autonomous ad campaign generation
- Advanced creator monetization

The goal is not to launch with everything. The goal is to make one neighborhood feel alive.

---

## Go-To-Market

The first supply-side customers should be:

- Student societies
- Small venues
- Food vendors
- Nightlife promoters
- Event organizers
- Food trucks and pop-up sellers

Launch through campus reps, venue partnerships, vendor onboarding, and a manually curated weekend guide.

On day one, Pulse FM can feel alive through:

- 10-20 committed vendors or organizers
- Manually curated signals
- Pre-recorded MC bits
- Real vendor voice clips
- A launch weekend or event cluster
- A small number of active group chats

Manual curation is acceptable at the start. Automate only after the loop is clear.

### Early Proof Metric

The strongest early metric is:

> weekly active users who complete a local action from the feed

A local action can be RSVP, buy, save, join chat, share, ask the agent, or navigate.

Listen time alone is not enough. Purchases alone are not enough. Pulse FM needs repeat opens and meaningful local actions.

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
| MC voices | ElevenLabs or equivalent TTS |
| Realtime | WebSockets or SSE |
| Payments | Apple Pay / payment processor |
| Push | APNs |

---

## Audio Architecture

Pulse FM should treat the MC as part of an audio production system.

```text
LocalSignals
    |
    v
ShowBlock[]
    |
    v
MC selection
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
Jazz bed + MC + real voices + reviews + stings
```

Use client-side mixing for the live feel:

```text
Jazz Bed Player  -> Mixer
MC TTS Player    -> Mixer
Signal Audio     -> Mixer
Review Audio     -> Mixer
Stingers         -> Mixer
Mixer            -> Output
```

The app should keep the next few MC clips and segments buffered. If generation is slow, the music bed and cached fallback lines should cover the gap naturally.

Use licensed, owned, or commercially cleared jazz loops. Music rights must be solved from the start.

---

## Show Assembly

The backend should assemble a show, not just return a ranked list.

Ranking chooses candidates. The Show Clock creates pacing, continuity, and variety.

Example show block:

```text
Block type: event_signal
MC: Sol
Music bed: late_jazz_01
Live context: time, neighborhood, weather, distance, friend activity, prior segment, next segment
Intro: generated or cached MC clip
Primary audio: organizer or vendor voice clip
Proof: friend activity or verified review
Action prompt: RSVP, buy ticket, join chat, save, or skip
Transition: short sting
```

Cached:

- Vendor intros
- Organizer intros
- Event summaries
- Common MC lines
- Music beds
- Stings
- Fallback lines

Live-generated:

- User-specific nudges
- Agent answers
- Contextual transitions
- Personalized recommendations

---

## Analytics

Pulse FM should measure the whole local action loop:

- Feed impressions
- Segment starts
- Segment completion
- Listen duration
- Skips
- Saves
- Shares
- Agent asks
- RSVP starts and completions
- Purchases
- Chat joins
- Repeat opens
- Vendor conversion
- Event conversion
- Voice clip engagement

Vendor voices should be measurable. If real vendor clips convert better than generated MC reads, that should be visible in the dashboard.

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
MC is selected for each block
    |
    v
Agent generates intros, summaries, and nudges
    |
    v
iOS mixes jazz bed, MC voice, real local audio, reviews, and stings
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
|-- cmd/
|   `-- api/
|       `-- main.go
|-- internal/
|   |-- agent/
|   |-- audio/
|   |-- chat/
|   |-- commerce/
|   |-- events/
|   |-- feed/
|   |-- mc/
|   |-- signals/
|   |-- social/
|   |-- spatial/
|   |-- vendor/
|   `-- db/
|-- api/
|   |-- routes.go
|   |-- feed_handler.go
|   |-- agent_handler.go
|   |-- commerce_handler.go
|   |-- events_handler.go
|   |-- chat_handler.go
|   `-- middleware.go
|-- migrations/
|-- pkg/
|   `-- money/
|-- docker-compose.yml
|-- .env.example
`-- README.md
```

---

## Design Principles

### Make The City Feel Alive

The app should make users feel like things are happening around them and they are close enough to join.

### Be Audio First, Not Audio Only

Users should be able to listen hands-free, but every important action should also be available visually.

### Make The MC Present

The MC should know the time, neighborhood, previous segment, next segment, weather, friend context, and user preferences.

### Let Real Voices Carry Trust

The MC frames the moment, but real vendor, organizer, buyer, and attendee voices make the feed feel alive.

### Keep Segments Short

Radio energy comes from pacing. The MC should not monologue.

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
