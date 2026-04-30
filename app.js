/* ─────────────────────────────────────────
   TAPE DATA
───────────────────────────────────────── */
const tapes = [
  {
    id: "about",
    title: "Mwiko",
    tag: "AI SaaS builder",
    color: "#e93434",
    art: "linear-gradient(135deg, #f2d447, #ff7b54 45%, #312250)",
    tilt: "-1.8deg",
    runtime: "00:47",
    staffTitle: "AI SaaS builder with production proof.",
    staffBody: "React frontends, API-first backends, AI agents, and business systems that survive real daily use.",
    scenes: [
      {
        heading: "Mwiko Sinyangwe",
        eyebrow: "Full-stack developer in Lusaka",
        body: "I build AI-powered SaaS products and production business systems, from API design and database modelling to React frontends people can actually use every day.",
        badges: ["AI SaaS", "React", "FastAPI", "TypeScript", "PostgreSQL"],
        duration: 4200
      },
      {
        heading: "The Angle",
        body: "My strongest pattern is owning the full lifecycle: understand the workflow, cut complexity, ship the backend, wire the frontend, and keep improving the product after launch.",
        list: [
          "3+ years building production systems",
          "Currently modernising ZamFIND platforms",
          "Building Nearby Vibes as an AI-powered local marketplace"
        ],
        duration: 4600
      },
      {
        heading: "Going Forward",
        body: "I want to work deeper in modern SaaS teams using React on the frontend and Go for fast, reliable backend services, while keeping AI agents and automation close to the product core.",
        badges: ["React apps", "Go backends", "AI agents", "SaaS workflows"],
        duration: 5000
      }
    ]
  },
  {
    id: "projects",
    title: "AI SaaS",
    tag: "Project reel",
    color: "#1154a4",
    art: "linear-gradient(135deg, #65e8ff, #1154a4 50%, #10131d)",
    tilt: "1.1deg",
    runtime: "01:23",
    staffTitle: "Production-grade AI SaaS, start to finish.",
    staffBody: "Nearby Vibes, Agent OS, and a shelf of TypeScript building blocks — all shipped and actively maintained.",
    scenes: [
      {
        heading: "Nearby Vibes",
        eyebrow: "FastAPI · React PWA · Claude · PostgreSQL",
        body: "AI-powered F&B operating system and local marketplace for Lusaka, connecting buyers with restaurants, butcheries, bakeries, bars, grocers, and farm shops.",
        list: [
          "Zara buyer concierge and Keza seller partner",
          "Claude tool-use with tiered tools and SSE streaming",
          "pgvector semantic memory for preferences and order history"
        ],
        duration: 4400
      },
      {
        heading: "Agent OS",
        body: "The interesting part is not just chat. Nearby Vibes has scheduled jobs, proactive nudges, nightly business intelligence, planning flows, Telegram bots, and real-time order management.",
        badges: ["APScheduler", "WebSockets", "Prompt caching", "Mobile money", "Telegram Bot API"],
        duration: 5200
      },
      {
        heading: "GitHub Shelf",
        body: "Pinned repos show a TypeScript-first habit around practical SaaS building blocks.",
        cards: [
          { title: "pulse",             meta: "TypeScript", body: "Real-time analytics dashboard foundation." },
          { title: "taskflow",          meta: "TypeScript", body: "Task and workflow management app." },
          { title: "ai-form-builder",   meta: "TypeScript", body: "AI-assisted dynamic form generation." },
          { title: "csv-importer",      meta: "TypeScript", body: "CSV validation, mapping, and import flow." },
          { title: "invoice-generator", meta: "TypeScript", body: "PDF invoice generation tool." },
          { title: "marketplace",       meta: "TypeScript", body: "E-commerce marketplace template." }
        ],
        duration: 5200
      }
    ]
  },
  {
    id: "contact",
    title: "Return Counter",
    tag: "Leave a message",
    color: "#2fbf71",
    art: "linear-gradient(135deg, #fff7d1, #2fbf71 42%, #11251c)",
    tilt: "-0.8deg",
    runtime: "00:31",
    staffTitle: "Available for the right project.",
    staffBody: "AI SaaS product work, React builds, backend API, and production system modernisation.",
    scenes: [
      {
        heading: "Contact",
        body: "Available for AI SaaS product work, React builds, backend API work, and production system modernisation.",
        links: [
          { label: "Email Mwiko", href: "mailto:mwikosinyangwe@gmail.com" },
          { label: "GitHub",      href: "https://github.com/mdsnn" }
        ],
        duration: 4200
      },
      {
        heading: "Receipt",
        body: "Best fit: teams building SaaS workflows, AI-assisted tools, marketplaces, internal platforms, dashboards, or systems that need to move from legacy code into a cleaner modern stack.",
        badges: ["Lusaka, Zambia", "Remote-friendly", "Full-stack"],
        duration: 4800
      }
    ]
  },
  {
    id: "blog",
    title: "After Hours",
    tag: "Blog archive",
    color: "#ff5caa",
    art: "linear-gradient(135deg, #ff5caa, #442264 48%, #08090d)",
    tilt: "2deg",
    runtime: "02:12",
    staffTitle: "Build notes from the night shift.",
    staffBody: "AI agent design, SaaS lessons, React patterns, Postgres tricks, and the road toward Go services.",
    scenes: [
      {
        heading: "After Hours",
        body: "Use this tape for build notes: AI agent design, SaaS lessons, React patterns, API design, Postgres tricks, and the road from FastAPI-heavy systems toward Go services.",
        duration: 4400
      },
      {
        heading: "Staff Picks",
        list: [
          "How I built agent memory with pgvector",
          "What prompt caching changed in production cost",
          "Migrating legacy business systems without breaking daily operations",
          "React + Go notes as I move deeper into Go backends"
        ],
        duration: 5200
      }
    ]
  },
  {
    id: "game",
    title: "Late Fee Panic",
    tag: "Bonus mini-game",
    color: "#f2d447",
    art: "linear-gradient(135deg, #f2d447, #e93434 50%, #11131b)",
    tilt: "0.5deg",
    runtime: "00:15",
    game: true,
    staffTitle: "Can you return it in time?",
    staffBody: "Stop the meter inside the green zone. The clerk is watching. Or not. Hard to tell.",
    scenes: [
      {
        heading: "Late Fee Panic",
        body: "Stop the meter inside the green zone to return the tape before the clerk notices.",
        duration: 1000
      }
    ]
  },
  {
    id: "resume",
    title: "Resume",
    tag: "Staff file",
    color: "#6f55ff",
    art: "linear-gradient(135deg, #f8e8bc, #6f55ff 46%, #11131b)",
    tilt: "-2.2deg",
    runtime: "01:01",
    staffTitle: "3+ years. Production proof. Self-taught.",
    staffBody: "AI SaaS products, API-first platforms, React frontends, and PostgreSQL-backed business systems.",
    scenes: [
      {
        heading: "Resume",
        body: "Self-taught full-stack developer with 3+ years building production systems. Strongest work: AI SaaS products, API-first platforms, React frontends, and PostgreSQL-backed business systems.",
        links: [
          { label: "Download Resume",  href: "assets/mwiko-resume.docx" },
          { label: "GitHub Profile",   href: "https://github.com/mdsnn" }
        ],
        duration: 4400
      },
      {
        heading: "Production Work",
        body: "At ZamFIND Technology, I am leading a platform migration from legacy PHP/Rails-era systems toward FastAPI, React, TypeScript, and PostgreSQL.",
        list: [
          "FastAPI backend with Pydantic validation and OpenAPI",
          "React + TypeScript frontend with typed API layer",
          "RBAC, analytics, inventory, accounting, events, and reporting modules"
        ],
        duration: 4600
      },
      {
        heading: "Technical Stack",
        list: [
          "Primary: React, TypeScript, FastAPI, PostgreSQL",
          "AI: Claude API, tool-use, prompt engineering, pgvector, XGBoost",
          "Backend direction: Go services, API design, real-time systems, clean product infrastructure"
        ],
        duration: 5000
      },
      {
        heading: "GitHub Proof",
        body: "Active TypeScript repos, visible contribution history, and pinned projects that map to SaaS product primitives.",
        image: "assets/github-profile.png",
        imageAlt: "Screenshot of Mwiko Sinyangwe's GitHub profile",
        duration: 5600
      }
    ]
  }
];

/* ─────────────────────────────────────────
   DOM REFS
───────────────────────────────────────── */
const shelf          = document.querySelector("#tapeShelf");
const template       = document.querySelector("#tapeTemplate");
const screen         = document.querySelector("#screen");
const screenContent  = document.querySelector("#screenContent");
const vcrSlot        = document.querySelector("#vcrSlot");
const slotLabel      = document.querySelector("#slotLabel");
const vcrDisplay     = document.querySelector("#vcrDisplay");
const clerkLine      = document.querySelector("#clerkLine");
const lateFee        = document.querySelector("#lateFee");
const storeTime      = document.querySelector("#storeTime");
const ambienceToggle = document.querySelector("#ambienceToggle");
const vcr            = document.querySelector(".vcr");
const tapeProgress   = document.querySelector("#tapeProgress");
const leftReel       = document.querySelector("#leftReel");
const rightReel      = document.querySelector("#rightReel");
const trackingLabel  = document.querySelector("#trackingLabel");
const staffPickTitle = document.querySelector("#staffPickTitle");
const staffPickBody  = document.querySelector("#staffPickBody");

const controls = {
  play:         document.querySelector("#playBtn"),
  pause:        document.querySelector("#pauseBtn"),
  rewind:       document.querySelector("#rewindBtn"),
  fast:         document.querySelector("#ffBtn"),
  eject:        document.querySelector("#ejectBtn"),
  trackingDown: document.querySelector("#trackingDownBtn"),
  trackingUp:   document.querySelector("#trackingUpBtn")
};

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let currentTape    = null;
let currentScene   = 0;
let mode           = "empty";
let lastUserAction = Date.now(); // only updated by user interactions, not by checkLateFee
let fee            = 0;
let audioContext   = null;
let ambienceNode   = null;
let ambienceGain   = null;
let gameTimer      = null;
let gameValue      = 0;
let gameDirection  = 1;
let playbackTimer  = null;
let trackingLevel  = 3;
let tapeEnded      = false;

/* ─────────────────────────────────────────
   SHELF RENDER
───────────────────────────────────────── */
function renderShelf() {
  // Remove loading placeholder
  const placeholder = shelf.querySelector(".shelf-loading");
  if (placeholder) placeholder.remove();

  tapes.forEach((tape) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = tape.id;
    node.style.setProperty("--tape-color", tape.color);
    node.style.setProperty("--cover-art",  tape.art);
    node.style.setProperty("--tilt",       tape.tilt);

    // Text content via DOM properties — not innerHTML — avoids any XSS risk
    node.querySelector("strong").textContent = tape.title;
    node.querySelector("small").textContent  = tape.tag;

    // Accessible label for screen readers
    node.setAttribute("aria-label", `${tape.title} — ${tape.tag}. Runtime: ${tape.runtime}.`);

    node.addEventListener("click", () => rentTape(tape.id));
    shelf.appendChild(node);
  });
}

/* ─────────────────────────────────────────
   RENT A TAPE
───────────────────────────────────────── */
function rentTape(id) {
  stopGame();
  stopPlayback();
  recordUserAction();

  currentTape  = tapes.find((tape) => tape.id === id);
  currentScene = 0;
  tapeEnded    = false;
  mode         = "loaded";

  document.querySelectorAll(".tape").forEach((node) => {
    node.classList.toggle("rented", node.dataset.id === id);
  });

  // Slot animation: remove then re-add so it re-triggers
  vcrSlot.classList.remove("loaded");
  requestAnimationFrame(() => vcrSlot.classList.add("loaded"));
  slotLabel.textContent = currentTape.title.toUpperCase();

  vcrDisplay.textContent = currentTape.runtime;
  clerkLine.textContent  = `"${currentTape.title}" is due back by midnight.`;

  // Update staff pick to match rented tape
  updateStaffPick(currentTape);

  screen.className = "screen paused has-content";
  vcr.classList.add("has-tape");
  vcr.classList.remove("is-playing");

  setTransportActive(null);
  updateTapeProgress();
  renderScene("loaded");
  beep("insert");
}

/* ─────────────────────────────────────────
   STAFF PICK
───────────────────────────────────────── */
function updateStaffPick(tape) {
  if (!tape) return;
  staffPickTitle.textContent = tape.staffTitle || tape.title;
  staffPickBody.textContent  = tape.staffBody  || tape.tag;
}

/* ─────────────────────────────────────────
   SCENE RENDER
───────────────────────────────────────── */
function renderScene(state = mode) {
  if (!currentTape) {
    screenContent.innerHTML = `
      <p class="standby">NO TAPE</p>
      <p class="standby-small">Browse the shelf and rent something weird.</p>`;
    return;
  }

  if (currentTape.game && state === "playing") {
    renderGame();
    return;
  }

  const scene = currentTape.scenes[currentScene] || currentTape.scenes[0];

  // Build HTML fragments safely for known-safe data fields.
  // All text content comes from our own tapes array so innerHTML is acceptable here;
  // links are validated below before being assigned to .href.
  const eyebrow = scene.eyebrow
    ? `<p class="scene-eyebrow">${escHtml(scene.eyebrow)}</p>` : "";

  const body = scene.body
    ? `<p>${escHtml(scene.body)}</p>` : "";

  const list = scene.list
    ? `<ul>${scene.list.map((item) => `<li>${escHtml(item)}</li>`).join("")}</ul>` : "";

  const badges = scene.badges
    ? `<div class="badge-row">${scene.badges.map((b) => `<span>${escHtml(b)}</span>`).join("")}</div>` : "";

  const cards = scene.cards
    ? `<div class="card-grid">${scene.cards.map((card) => `
        <article class="project-card">
          <strong>${escHtml(card.title)}</strong>
          <small>${escHtml(card.meta)}</small>
          <p>${escHtml(card.body)}</p>
        </article>`).join("")}</div>` : "";

  const image = scene.image
    ? `<figure class="screen-image"><img src="${escAttr(scene.image)}" alt="${escAttr(scene.imageAlt || "")}"></figure>` : "";

  // Links: build anchors via DOM to keep href safe
  const linksHtml = scene.links
    ? buildLinks(scene.links) : "";

  const label = state === "loaded" ? "Press play on the VCR." : state.toUpperCase();
  updateTransportDisplay(state);

  screenContent.innerHTML = `
    <p class="kicker">${escHtml(label)}</p>
    ${eyebrow}
    <h2>${escHtml(scene.heading)}</h2>
    ${body}
    ${list}
    ${badges}
    ${cards}
    ${linksHtml}
    ${image}
    <p class="scene-counter">${currentScene + 1} / ${currentTape.scenes.length}</p>`;
}

/* Build link row safely using DOM — href is set as a property, not via innerHTML */
function buildLinks(links) {
  const row = document.createElement("div");
  row.className = "link-row";
  links.forEach((link) => {
    const a = document.createElement("a");
    a.href   = link.href;            // property assignment, not attribute string injection
    a.target = "_blank";
    a.rel    = "noreferrer noopener";
    a.textContent = link.label;
    row.appendChild(a);
  });
  // Return the outer HTML of the safely-built element
  return row.outerHTML;
}

/* Minimal HTML escape for text node insertion */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escAttr(str) {
  return String(str).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ─────────────────────────────────────────
   MODE MANAGEMENT
───────────────────────────────────────── */
function setMode(nextMode) {
  if (!currentTape && nextMode !== "empty") {
    clerkLine.textContent = "Nice try. The VCR cannot play vibes alone.";
    beep("error");
    return;
  }

  recordUserAction();
  mode = nextMode;

  screen.classList.remove("playing", "paused", "rewinding", "fast");
  vcr.classList.toggle("is-playing", nextMode === "playing");

  if (nextMode !== "playing") {
    stopGame();
    stopPlayback();
  }

  if (nextMode === "playing") {
    if (tapeEnded) { currentScene = 0; tapeEnded = false; }
    screen.classList.add("playing", "has-content");
    clerkLine.textContent = `Now playing: ${currentTape.title}.`;
    setTransportActive(controls.play);
    renderScene("playing");
    startPlayback();
    beep("play");
    return;
  }

  if (nextMode === "paused") {
    screen.classList.add("paused");
    clerkLine.textContent = "Paused. You can almost hear the tape stretching.";
    setTransportActive(controls.pause);
    renderScene("paused");
    beep("click");
    return;
  }

  if (nextMode === "rewinding") {
    screen.classList.add("rewinding");
    currentScene = Math.max(0, currentScene - 1);
    tapeEnded    = false;
    clerkLine.textContent = "Be kind, rewind.";
    setTransportActive(controls.rewind);
    renderScene("rewinding");
    beep("rewind");
    return;
  }

  if (nextMode === "fast") {
    screen.classList.add("fast");
    currentScene = Math.min(currentTape.scenes.length - 1, currentScene + 1);
    tapeEnded    = false;
    clerkLine.textContent = "Skipping to the good parts.";
    setTransportActive(controls.fast);
    renderScene("fast-forward");
    beep("fast");
  }
}

/* Highlight the active transport button */
function setTransportActive(activeBtn) {
  [controls.play, controls.pause, controls.rewind, controls.fast].forEach((btn) => {
    btn.classList.remove("transport-active");
    btn.removeAttribute("aria-pressed");
  });
  if (activeBtn) {
    activeBtn.classList.add("transport-active");
    activeBtn.setAttribute("aria-pressed", "true");
  }
}

/* ─────────────────────────────────────────
   EJECT
───────────────────────────────────────── */
function ejectTape() {
  stopGame();
  stopPlayback();
  recordUserAction();

  currentTape  = null;
  currentScene = 0;
  tapeEnded    = false;
  mode         = "empty";

  document.querySelectorAll(".tape").forEach((node) => node.classList.remove("rented"));

  vcrSlot.classList.remove("loaded");
  slotLabel.textContent = "INSERT TAPE";
  vcrDisplay.textContent = "--:--";
  clerkLine.textContent  = "Tape returned. Shelf's open.";
  screen.className = "screen paused";
  vcr.classList.remove("has-tape", "is-playing");

  setTransportActive(null);
  updateTapeProgress();
  renderScene();
  beep("eject");
}

/* ─────────────────────────────────────────
   PLAYBACK TIMER
───────────────────────────────────────── */
function startPlayback() {
  stopPlayback();
  if (!currentTape || currentTape.game) return;

  const scene = currentTape.scenes[currentScene] || {};
  playbackTimer = window.setTimeout(() => {
    if (!currentTape || mode !== "playing") return;

    if (currentScene < currentTape.scenes.length - 1) {
      currentScene += 1;
      renderScene("playing");
      beep("click");
      startPlayback();
      return;
    }

    // End of tape
    mode      = "paused";
    tapeEnded = true;
    screen.classList.remove("playing");
    screen.classList.add("paused");
    vcr.classList.remove("is-playing");
    clerkLine.textContent = `${currentTape.title} reached the end of the tape.`;
    setTransportActive(null);

    screenContent.innerHTML = `
      <p class="kicker">END OF TAPE</p>
      <h2>${escHtml(currentTape.title)}</h2>
      <p>Rewind to watch it again, fast-forward to jump around, or eject and rent another tape.</p>`;

    vcrDisplay.textContent = "END";
    updateTapeProgress(1);
    beep("eject");
  }, scene.duration || 4500);
}

function stopPlayback() {
  if (playbackTimer) {
    window.clearTimeout(playbackTimer);
    playbackTimer = null;
  }
}

/* ─────────────────────────────────────────
   TRANSPORT DISPLAY & PROGRESS
───────────────────────────────────────── */
function updateTransportDisplay(state) {
  if (!currentTape) {
    vcrDisplay.textContent = "--:--";
    updateTapeProgress();
    return;
  }

  if (state === "loaded") {
    vcrDisplay.textContent = currentTape.runtime;
    updateTapeProgress();
    return;
  }

  const sceneNumber = String(currentScene + 1).padStart(2, "0");
  const sceneTotal  = String(currentTape.scenes.length).padStart(2, "0");
  const labels = { playing: "PLAY", paused: "PAUS", rewinding: "REW", "fast-forward": "FF" };
  vcrDisplay.textContent = `${labels[state] || "PLAY"} ${sceneNumber}/${sceneTotal}`;
  updateTapeProgress();
}

function updateTapeProgress(forcedProgress) {
  const progress    = typeof forcedProgress === "number" ? forcedProgress : getTapeProgress();
  const leftScale   = 1 - progress * 0.44;
  const rightScale  = 0.56 + progress * 0.44;
  tapeProgress.style.width          = `${Math.round(progress * 100)}%`;
  leftReel.style.transform          = `scale(${leftScale})`;
  rightReel.style.transform         = `scale(${rightScale})`;
}

function getTapeProgress() {
  if (!currentTape) return 0;
  const totalScenes = Math.max(1, currentTape.scenes.length - 1);
  return Math.min(1, currentScene / totalScenes);
}

/* ─────────────────────────────────────────
   TRACKING
───────────────────────────────────────── */
function adjustTracking(direction) {
  trackingLevel = Math.min(6, Math.max(1, trackingLevel + direction));
  applyTracking();
  beep("click");
}

function applyTracking() {
  const distortion = 0.1 + trackingLevel * 0.055;
  screen.style.setProperty("--tracking-opacity", distortion.toFixed(2));
  screen.style.setProperty("--tracking-shift",   `${trackingLevel * 2}px`);
  trackingLabel.textContent = `TRACKING ${trackingLevel}`;
}

/* ─────────────────────────────────────────
   MINI-GAME
───────────────────────────────────────── */
function renderGame() {
  stopGame();
  updateTransportDisplay("playing");
  gameValue     = 8;
  gameDirection = 1;

  screenContent.innerHTML = `
    <div class="mini-game">
      <p class="kicker">BONUS GAME</p>
      <h2>Late Fee Panic</h2>
      <p>Return the tape when the meter lands in the green zone.</p>
      <div class="meter" role="progressbar" aria-label="Return timing meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="8">
        <span id="gameMeter"></span>
      </div>
      <div class="action-row">
        <button id="returnBtn" type="button">Return Tape</button>
        <button id="resetGameBtn" type="button">Reset</button>
      </div>
      <p id="gameResult" aria-live="assertive">The clerk is looking away. Move.</p>
    </div>`;

  const meter  = document.querySelector("#gameMeter");
  const result = document.querySelector("#gameResult");
  const meterEl = document.querySelector(".meter");

  gameTimer = window.setInterval(() => {
    gameValue += gameDirection * 4;
    if (gameValue >= 100 || gameValue <= 0) gameDirection *= -1;
    meter.style.setProperty("--meter", `${gameValue}%`);
    meterEl.setAttribute("aria-valuenow", Math.round(gameValue));
  }, 80);

  document.querySelector("#returnBtn").addEventListener("click", () => {
    const win = gameValue >= 42 && gameValue <= 62;
    result.textContent = win
      ? "Perfect return. The late fee has vanished."
      : "Too slow. The clerk stamps your receipt with menace.";
    fee = win ? 0 : fee + 1;
    lateFee.textContent = win ? "" : `LATE FEE: $${fee}.97`;
    beep(win ? "play" : "error");
  });

  document.querySelector("#resetGameBtn").addEventListener("click", renderGame);
}

function stopGame() {
  if (gameTimer) {
    window.clearInterval(gameTimer);
    gameTimer = null;
  }
}

/* ─────────────────────────────────────────
   CLOCK
───────────────────────────────────────── */
function updateClock() {
  const date = new Date();
  storeTime.textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─────────────────────────────────────────
   IDLE / LATE FEE
   lastUserAction is only ever mutated by real user interactions (recordUserAction),
   never inside checkLateFee itself — so fees accumulate correctly.
───────────────────────────────────────── */
function recordUserAction() {
  lastUserAction = Date.now();
}

function checkLateFee() {
  if (!currentTape) return;
  const idleSeconds = Math.floor((Date.now() - lastUserAction) / 1000);
  if (idleSeconds > 35) {
    fee += 1;
    lateFee.textContent = `LATE FEE: $${fee}.97`;
    clerkLine.textContent = "You are now emotionally overdue.";
    // Do NOT reset lastUserAction here — let fees keep accumulating until user acts
    beep("error");
  }
}

/* ─────────────────────────────────────────
   AUDIO
───────────────────────────────────────── */
function getAudio() {
  if (!audioContext) audioContext = new AudioContext();
  // Resume if browser suspended it (autoplay policy)
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function beep(type) {
  const ctx = getAudio();
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  const now  = ctx.currentTime;

  const frequencies = {
    insert: [90,  160],
    eject:  [160,  80],
    play:   [220, 330],
    click:  [140, 140],
    rewind: [420, 150],
    fast:   [180, 520],
    error:  [70,   60]
  };

  const [start, end] = frequencies[type] || frequencies.click;
  osc.type = type === "error" ? "sawtooth" : "square";
  osc.frequency.setValueAtTime(start, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(1, end), now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055,  now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.2);
}

function toggleAmbience() {
  const ctx = getAudio();

  if (ambienceNode) {
    ambienceNode.stop();
    ambienceNode = null;
    ambienceToggle.classList.remove("active");
    ambienceToggle.setAttribute("aria-pressed", "false");
    return;
  }

  const bufferSize = ctx.sampleRate * 2;
  const buffer     = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data       = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.22;
  }

  ambienceNode  = ctx.createBufferSource();
  ambienceGain  = ctx.createGain();
  ambienceGain.gain.value = 0.035;
  ambienceNode.buffer = buffer;
  ambienceNode.loop   = true;
  ambienceNode.connect(ambienceGain).connect(ctx.destination);
  ambienceNode.start();

  ambienceToggle.classList.add("active");
  ambienceToggle.setAttribute("aria-pressed", "true");
}

/* ─────────────────────────────────────────
   EVENT LISTENERS
───────────────────────────────────────── */
controls.play.addEventListener("click",         () => setMode("playing"));
controls.pause.addEventListener("click",        () => setMode("paused"));
controls.rewind.addEventListener("click",       () => setMode("rewinding"));
controls.fast.addEventListener("click",         () => setMode("fast"));
controls.eject.addEventListener("click",        ejectTape);
controls.trackingDown.addEventListener("click", () => adjustTracking(-1));
controls.trackingUp.addEventListener("click",   () => adjustTracking(1));
ambienceToggle.addEventListener("click",        toggleAmbience);

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
renderShelf();
applyTracking();
updateClock();
window.setInterval(updateClock,    1000);
window.setInterval(checkLateFee,   1000);