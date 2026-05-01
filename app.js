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
      },
      /* ── Project screenshots ── */
      {
        heading: "Pulse",
        eyebrow: "Real-time Analytics Dashboard · TypeScript",
        body: "Live event stream ingestion, anomaly detection, and AI-assisted insight summaries for production-grade data pipelines.",
        image: "assets/pulse.PNG",
        imageAlt: "Pulse — real-time analytics dashboard",
        duration: 5000
      },
      {
        heading: "Taskflow",
        eyebrow: "AI Workflow Manager · TypeScript",
        body: "Kanban-style task and workflow OS with AI-assisted planning, sprint velocity tracking, and blocker prediction.",
        image: "assets/taskflow.PNG",
        imageAlt: "Taskflow — AI workflow manager",
        duration: 5000
      },
      {
        heading: "AI Form Builder",
        eyebrow: "Dynamic Form Generation · TypeScript",
        body: "Describe the form in plain language — Claude drafts the fields, validation rules, and conditional logic. Embeds anywhere.",
        image: "assets/formbuilder.PNG",
        imageAlt: "AI Form Builder — dynamic form generation",
        duration: 5000
      },
      {
        heading: "CSV Importer",
        eyebrow: "Data Validation & Import · TypeScript",
        body: "Schema inference, row-level validation, type coercion, and clean PostgreSQL loading with per-cell error reporting.",
        image: "assets/csvimporter.PNG",
        imageAlt: "CSV Importer — data validation and import",
        duration: 5000
      },
      {
        heading: "Invoice Generator",
        eyebrow: "PDF Invoicing · TypeScript",
        body: "Claude reads your work log and fills the line items. Polished, client-ready PDF invoices in seconds.",
        image: "assets/invoicegen.PNG",
        imageAlt: "Invoice Generator — PDF invoicing tool",
        duration: 5000
      },
      {
        heading: "Marketplace",
        eyebrow: "E-commerce Platform · TypeScript",
        body: "AI-assisted buyer-seller matching, product discovery, payments, and analytics in one platform.",
        image: "assets/marketplace.PNG",
        imageAlt: "Marketplace — e-commerce platform",
        duration: 5000
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
    title: "Rewind Race",
    tag: "Bonus mini-game",
    color: "#f2d447",
    art: "linear-gradient(135deg, #f2d447, #e93434 50%, #11131b)",
    tilt: "0.5deg",
    runtime: "00:15",
    game: true,
    staffTitle: "Stop the counter on 00:00 or the tape snaps.",
    staffBody: "Hit STOP at exactly the right moment. Too early, too late — both cost you. Three lives. No mercy.",
    scenes: [
      {
        heading: "Rewind Race",
        body: "Hit STOP before the counter hits zero. Miss the window and the tape snaps.",
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
        heading: "Pulse",
        eyebrow: "Real-time Analytics Dashboard · TypeScript",
        body: "Live event stream ingestion, anomaly detection, and AI-assisted insight summaries for production-grade data pipelines.",
        image: "assets/pulse.PNG",
        imageAlt: "Pulse — real-time analytics dashboard",
        duration: 5000
      },
      {
        heading: "Taskflow",
        eyebrow: "AI Workflow Manager · TypeScript",
        body: "Kanban-style task and workflow OS with AI-assisted planning, sprint velocity tracking, and blocker prediction.",
        image: "assets/taskflow.PNG",
        imageAlt: "Taskflow — AI workflow manager",
        duration: 5000
      },
      {
        heading: "AI Form Builder",
        eyebrow: "Dynamic Form Generation · TypeScript",
        body: "Describe the form in plain language — Claude drafts the fields, validation rules, and conditional logic. Embeds anywhere.",
        image: "assets/formbuilder.PNG",
        imageAlt: "AI Form Builder — dynamic form generation",
        duration: 5000
      },
      {
        heading: "CSV Importer",
        eyebrow: "Data Validation & Import · TypeScript",
        body: "Schema inference, row-level validation, type coercion, and clean PostgreSQL loading with per-cell error reporting.",
        image: "assets/csvimporter.PNG",
        imageAlt: "CSV Importer — data validation and import",
        duration: 5000
      },
      {
        heading: "Invoice Generator",
        eyebrow: "PDF Invoicing · TypeScript",
        body: "Claude reads your work log and fills the line items. Polished, client-ready PDF invoices in seconds.",
        image: "assets/invoicegen.PNG",
        imageAlt: "Invoice Generator — PDF invoicing tool",
        duration: 5000
      },
      {
        heading: "Marketplace",
        eyebrow: "E-commerce Platform · TypeScript",
        body: "AI-assisted buyer-seller matching, product discovery, payments, and analytics in one platform.",
        image: "assets/marketplace.PNG",
        imageAlt: "Marketplace — e-commerce platform",
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
   DOM REFS — MAIN
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
const expandBtn      = document.querySelector("#expandBtn");

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
   DOM REFS — FULLSCREEN
───────────────────────────────────────── */
const fsOverlay       = document.querySelector("#fsOverlay");
const fsScreen        = document.querySelector("#fsScreen");
const fsScreenContent = document.querySelector("#fsScreenContent");
const fsVcrDisplay    = document.querySelector("#fsVcrDisplay");
const fsTapeLabel     = document.querySelector("#fsTapeLabel");
const fsTrackingLabel = document.querySelector("#fsTrackingLabel");
const minimizeBtn     = document.querySelector("#minimizeBtn");

const fsControls = {
  play:         document.querySelector("#fsPlayBtn"),
  pause:        document.querySelector("#fsPauseBtn"),
  rewind:       document.querySelector("#fsRewindBtn"),
  fast:         document.querySelector("#fsFfBtn"),
  eject:        document.querySelector("#fsEjectBtn"),
  trackingDown: document.querySelector("#fsTrkDownBtn"),
  trackingUp:   document.querySelector("#fsTrkUpBtn")
};

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let currentTape    = null;
let currentScene   = 0;
let mode           = "empty";
let lastUserAction = Date.now();
let fee            = 0;
let audioContext   = null;
let ambienceNode   = null;
let ambienceGain   = null;
let gameTimer      = null;
let playbackTimer  = null;
let trackingLevel  = 3;
let tapeEnded      = false;
let fsOpen         = false;

/* ─────────────────────────────────────────
   SHELF RENDER
───────────────────────────────────────── */
function renderShelf() {
  const placeholder = shelf.querySelector(".shelf-loading");
  if (placeholder) placeholder.remove();

  tapes.forEach((tape) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = tape.id;
    node.style.setProperty("--tape-color", tape.color);
    node.style.setProperty("--cover-art",  tape.art);
    node.style.setProperty("--tilt",       tape.tilt);

    node.querySelector("strong").textContent = tape.title;
    node.querySelector("small").textContent  = tape.tag;
    node.setAttribute("aria-label", `${tape.title} — ${tape.tag}. Runtime: ${tape.runtime}.`);

    node.addEventListener("click", () => rentTape(tape.id));
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", onTapeDragStart);
    node.addEventListener("dragend",   onTapeDragEnd);
    node.addEventListener("touchstart", onTouchStart, { passive: false });

    shelf.appendChild(node);
  });
}

/* ─────────────────────────────────────────
   DRAG & DROP — HTML5
───────────────────────────────────────── */
let dragGhost  = null;
let draggingId = null;

function onTapeDragStart(e) {
  const node = e.currentTarget;
  draggingId = node.dataset.id;
  node.classList.add("dragging");

  dragGhost = node.cloneNode(true);
  dragGhost.style.cssText = `
    position: fixed; top: -999px; left: -999px;
    width: ${node.offsetWidth}px;
    transform: rotate(-3deg) scale(0.88);
    pointer-events: none; opacity: 0.92; z-index: 9999; border-radius: 2px;
  `;
  dragGhost.style.setProperty("--tape-color", node.style.getPropertyValue("--tape-color"));
  dragGhost.style.setProperty("--cover-art",  node.style.getPropertyValue("--cover-art"));
  dragGhost.style.setProperty("--tilt", "0deg");
  document.body.appendChild(dragGhost);

  e.dataTransfer.setDragImage(dragGhost, dragGhost.offsetWidth / 2, 30);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", draggingId);
}

function onTapeDragEnd(e) {
  e.currentTarget.classList.remove("dragging");
  if (dragGhost) { dragGhost.remove(); dragGhost = null; }
  if (e.dataTransfer.dropEffect === "none") animateSnapBack(e.currentTarget);
  draggingId = null;
}

function animateSnapBack(node) {
  node.style.transition = "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)";
  node.style.transform  = "translateY(-12px) rotate(0deg)";
  requestAnimationFrame(() => {
    setTimeout(() => { node.style.transform = ""; node.style.transition = ""; }, 300);
  });
}

vcrSlot.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  vcrSlot.classList.add("drag-over");
});

vcrSlot.addEventListener("dragleave", (e) => {
  if (!vcrSlot.contains(e.relatedTarget)) vcrSlot.classList.remove("drag-over");
});

vcrSlot.addEventListener("drop", (e) => {
  e.preventDefault();
  vcrSlot.classList.remove("drag-over");
  const id = e.dataTransfer.getData("text/plain") || draggingId;
  if (id) { e.dataTransfer.dropEffect = "move"; rentTape(id); }
});

vcrSlot.setAttribute("draggable", "false");

/* ─────────────────────────────────────────
   DRAG & DROP — TOUCH
───────────────────────────────────────── */
let touchDragId  = null;
let touchClone   = null;
let touchOffsetX = 0;
let touchOffsetY = 0;

function onTouchStart(e) {
  if (e.touches.length !== 1) return;
  const node   = e.currentTarget;
  touchDragId  = node.dataset.id;
  const touch  = e.touches[0];
  const rect   = node.getBoundingClientRect();
  touchOffsetX = touch.clientX - rect.left;
  touchOffsetY = touch.clientY - rect.top;

  touchClone = node.cloneNode(true);
  touchClone.style.cssText = `
    position: fixed; width: ${rect.width}px;
    left: ${rect.left}px; top: ${rect.top}px;
    transform: rotate(-3deg) scale(0.9);
    pointer-events: none; opacity: 0.88; z-index: 9999; transition: none;
  `;
  touchClone.style.setProperty("--tape-color", node.style.getPropertyValue("--tape-color"));
  touchClone.style.setProperty("--cover-art",  node.style.getPropertyValue("--cover-art"));
  touchClone.style.setProperty("--tilt", "0deg");
  document.body.appendChild(touchClone);
  node.classList.add("dragging");

  document.addEventListener("touchmove",   onTouchMove,  { passive: false });
  document.addEventListener("touchend",    onTouchEnd);
  document.addEventListener("touchcancel", onTouchEnd);
}

function onTouchMove(e) {
  e.preventDefault();
  if (!touchClone) return;
  const touch = e.touches[0];
  touchClone.style.left = `${touch.clientX - touchOffsetX}px`;
  touchClone.style.top  = `${touch.clientY - touchOffsetY}px`;
  const r = vcrSlot.getBoundingClientRect();
  vcrSlot.classList.toggle("drag-over",
    touch.clientX >= r.left && touch.clientX <= r.right &&
    touch.clientY >= r.top  && touch.clientY <= r.bottom
  );
}

function onTouchEnd(e) {
  document.removeEventListener("touchmove",   onTouchMove);
  document.removeEventListener("touchend",    onTouchEnd);
  document.removeEventListener("touchcancel", onTouchEnd);
  vcrSlot.classList.remove("drag-over");

  if (touchClone) {
    const touch = e.changedTouches[0];
    const r     = vcrSlot.getBoundingClientRect();
    const dropped = (
      touch.clientX >= r.left && touch.clientX <= r.right &&
      touch.clientY >= r.top  && touch.clientY <= r.bottom
    );
    touchClone.remove();
    touchClone = null;
    const sourceNode = shelf.querySelector(`[data-id="${touchDragId}"]`);
    if (sourceNode) {
      sourceNode.classList.remove("dragging");
      if (!dropped) animateSnapBack(sourceNode);
    }
    if (dropped && touchDragId) rentTape(touchDragId);
  }
  touchDragId = null;
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

  vcrSlot.classList.remove("loaded");
  requestAnimationFrame(() => vcrSlot.classList.add("loaded"));
  slotLabel.textContent  = currentTape.title.toUpperCase();
  vcrDisplay.textContent = currentTape.runtime;
  clerkLine.textContent  = `"${currentTape.title}" is due back by midnight.`;

  updateStaffPick(currentTape);

  screen.className = "screen paused has-content";
  vcr.classList.add("has-tape");
  vcr.classList.remove("is-playing");

  setTransportActive(null);
  updateTapeProgress();
  renderScene("loaded");
  syncFullscreen();
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
      <p class="standby-small">Drag a tape to the VCR slot, or click one to rent it.</p>`;
    syncFullscreen();
    return;
  }

  if (currentTape.game && state === "playing") {
    renderRewindRace();
    return;
  }

  const scene    = currentTape.scenes[currentScene] || currentTape.scenes[0];
  const eyebrow  = scene.eyebrow  ? `<p class="scene-eyebrow">${escHtml(scene.eyebrow)}</p>` : "";
  const body     = scene.body     ? `<p>${escHtml(scene.body)}</p>` : "";
  const list     = scene.list     ? `<ul>${scene.list.map((item) => `<li>${escHtml(item)}</li>`).join("")}</ul>` : "";
  const badges   = scene.badges   ? `<div class="badge-row">${scene.badges.map((b) => `<span>${escHtml(b)}</span>`).join("")}</div>` : "";
  const cards    = scene.cards    ? `<div class="card-grid">${scene.cards.map((card) => `
      <article class="project-card">
        <strong>${escHtml(card.title)}</strong>
        <small>${escHtml(card.meta)}</small>
        <p>${escHtml(card.body)}</p>
      </article>`).join("")}</div>` : "";
  const image    = scene.image    ? `<figure class="screen-image"><img src="${escAttr(scene.image)}" alt="${escAttr(scene.imageAlt || "")}"></figure>` : "";
  const linksHtml = scene.links   ? buildLinks(scene.links) : "";

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

  syncFullscreen();
}

function buildLinks(links) {
  const row = document.createElement("div");
  row.className = "link-row";
  links.forEach((link) => {
    const a = document.createElement("a");
    a.href        = link.href;
    a.target      = "_blank";
    a.rel         = "noreferrer noopener";
    a.textContent = link.label;
    row.appendChild(a);
  });
  return row.outerHTML;
}

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
    syncFullscreen();
    return;
  }

  if (nextMode === "paused") {
    screen.classList.add("paused");
    clerkLine.textContent = "Paused. You can almost hear the tape stretching.";
    setTransportActive(controls.pause);
    renderScene("paused");
    beep("click");
    syncFullscreen();
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
    syncFullscreen();
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
    syncFullscreen();
  }
}

function setTransportActive(activeBtn) {
  [controls.play, controls.pause, controls.rewind, controls.fast].forEach((btn) => {
    btn.classList.remove("transport-active");
    btn.removeAttribute("aria-pressed");
  });
  if (activeBtn) {
    activeBtn.classList.add("transport-active");
    activeBtn.setAttribute("aria-pressed", "true");
  }
  // Mirror to fullscreen buttons (independent visual state)
  syncFsTransportButtons();
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
  slotLabel.textContent  = "INSERT TAPE";
  vcrDisplay.textContent = "--:--";
  clerkLine.textContent  = "Tape returned. Shelf's open.";
  screen.className = "screen paused";
  vcr.classList.remove("has-tape", "is-playing");

  setTransportActive(null);
  updateTapeProgress();
  renderScene();
  syncFullscreen();
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

    const endHtml = `
      <p class="kicker">END OF TAPE</p>
      <h2>${escHtml(currentTape.title)}</h2>
      <p>Rewind to watch it again, fast-forward to jump around, or eject and rent another tape.</p>`;

    screenContent.innerHTML = endHtml;

    vcrDisplay.textContent = "END";
    updateTapeProgress(1);
    syncFullscreen();
    beep("eject");
  }, scene.duration || 4500);
}

function stopPlayback() {
  if (playbackTimer) { window.clearTimeout(playbackTimer); playbackTimer = null; }
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
  const progress   = typeof forcedProgress === "number" ? forcedProgress : getTapeProgress();
  const leftScale  = 1 - progress * 0.44;
  const rightScale = 0.56 + progress * 0.44;
  tapeProgress.style.width  = `${Math.round(progress * 100)}%`;
  leftReel.style.transform  = `scale(${leftScale})`;
  rightReel.style.transform = `scale(${rightScale})`;
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
  // Mirror to fullscreen screen
  fsScreen.style.setProperty("--tracking-opacity", distortion.toFixed(2));
  fsScreen.style.setProperty("--tracking-shift",   `${trackingLevel * 2}px`);
  fsTrackingLabel.textContent = `TRACKING ${trackingLevel}`;
}

/* ─────────────────────────────────────────
   FULLSCREEN
───────────────────────────────────────── */
function openFullscreen() {
  if (!currentTape) {
    clerkLine.textContent = "Insert a tape before expanding.";
    beep("error");
    return;
  }
  fsOpen = true;
  fsOverlay.setAttribute("aria-hidden", "false");
  fsOverlay.classList.add("open");
  // Two-frame trick: display:flex first, then opacity transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => fsOverlay.classList.add("fs-visible"));
  });
  document.body.style.overflow = "hidden";
  syncFullscreen();
  minimizeBtn.focus();
  beep("play");
}

function closeFullscreen() {
  fsOpen = false;
  fsOverlay.classList.remove("fs-visible");
  fsOverlay.setAttribute("aria-hidden", "true");
  // Wait for transition before hiding
  setTimeout(() => {
    fsOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }, 240);
  expandBtn.focus();
  beep("click");
}

function syncFullscreen() {
  if (!fsOpen) return;

  // Mirror screen state class
  const stateClasses = ["playing", "paused", "rewinding", "fast", "has-content"];
  fsScreen.classList.remove(...stateClasses);
  stateClasses.forEach((cls) => {
    if (screen.classList.contains(cls)) fsScreen.classList.add(cls);
  });

  // Mirror content
  fsScreenContent.innerHTML = screenContent.innerHTML;

  // Mirror VCR display
  fsVcrDisplay.textContent = vcrDisplay.textContent;

  // Update tape label badge
  fsTapeLabel.textContent = currentTape ? currentTape.title.toUpperCase() : "";

  syncFsTransportButtons();
}

function syncFsTransportButtons() {
  const modeToBtn = {
    playing:  fsControls.play,
    paused:   fsControls.pause,
    rewinding: fsControls.rewind,
    fast:     fsControls.fast
  };

  [fsControls.play, fsControls.pause, fsControls.rewind, fsControls.fast].forEach((btn) => {
    btn.classList.remove("transport-active");
    btn.removeAttribute("aria-pressed");
  });

  const activeBtn = modeToBtn[mode];
  if (activeBtn) {
    activeBtn.classList.add("transport-active");
    activeBtn.setAttribute("aria-pressed", "true");
  }
}

// Keyboard shortcut: F = fullscreen, Esc = close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && fsOpen) {
    closeFullscreen();
    return;
  }
  if (e.key === "f" || e.key === "F") {
    if (!fsOpen && currentTape) openFullscreen();
  }
});

// Click outside the shell to close
fsOverlay.addEventListener("click", (e) => {
  if (e.target === fsOverlay) closeFullscreen();
});

/* ─────────────────────────────────────────
   REWIND RACE — MINI-GAME
───────────────────────────────────────── */
const GAME_ROUNDS   = 3;
const STOP_ZONE_SEC = 3;
const START_SECS    = [18, 14, 10];
const TICK_MS       = [100, 80, 55];

let rrRound    = 0;
let rrLives    = 3;
let rrScore    = 0;
let rrCounter  = 0;
let rrInterval = null;
let rrActive   = false;

function stopGame() {
  rrActive = false;
  if (gameTimer)  { window.clearInterval(gameTimer);  gameTimer  = null; }
  if (rrInterval) { window.clearInterval(rrInterval); rrInterval = null; }
}

function renderRewindRace() {
  stopGame();
  updateTransportDisplay("playing");

  rrRound  = 0;
  rrLives  = 3;
  rrScore  = 0;
  rrActive = true;

  screenContent.innerHTML = `
    <div class="rr-game">
      <p class="kicker">BONUS GAME — REWIND RACE</p>
      <h2 style="font-size:clamp(1.6rem,4vw,2.8rem)">Stop the Tape</h2>
      <p style="font-size:0.95rem">Hit STOP inside the danger zone before the counter hits 00:00. Miss it and the tape snaps.</p>
      <div class="rr-display-row">
        <div class="rr-counter-box" id="rrCounter">00:18.0</div>
        <div class="rr-lives" id="rrLives">♥ ♥ ♥</div>
      </div>
      <div class="rr-track-wrap" aria-hidden="true">
        <div class="rr-track" id="rrTrack">
          <div class="rr-zone" id="rrZone"></div>
          <div class="rr-needle" id="rrNeedle"></div>
        </div>
        <div class="rr-track-labels">
          <span>START</span><span>STOP ZONE</span><span>00:00 💀</span>
        </div>
      </div>
      <div class="rr-round-label" id="rrRoundLabel">ROUND 1 OF ${GAME_ROUNDS}</div>
      <div class="action-row">
        <button id="rrStopBtn" type="button" class="rr-stop-btn">⏹ STOP</button>
      </div>
      <p id="rrResult" class="rr-result" aria-live="assertive"></p>
    </div>`;

  injectRRStyles();
  startRRRound();
  document.querySelector("#rrStopBtn").addEventListener("click", onRRStop);
}

function injectRRStyles() {
  if (document.querySelector("#rr-styles")) return;
  const s = document.createElement("style");
  s.id = "rr-styles";
  s.textContent = `
    .rr-game { display: grid; gap: 18px; width: min(480px, 100%); }
    .rr-display-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .rr-counter-box {
      font-family: "Courier New", monospace;
      font-size: clamp(2.2rem, 6vw, 3.5rem);
      color: var(--green); letter-spacing: 0.08em;
      background: rgba(0,0,0,0.5); border: 2px solid rgba(118,255,157,0.4);
      padding: 6px 16px; transition: color 200ms ease, border-color 200ms ease;
    }
    .rr-counter-box.danger {
      color: #ff5555; border-color: rgba(255,85,85,0.6);
      animation: rrPulse 400ms steps(2,end) infinite;
    }
    @keyframes rrPulse { 0% { opacity: 1; } 50% { opacity: 0.55; } }
    .rr-lives { font-size: 1.4rem; letter-spacing: 0.15em; color: #ff5caa; font-family: "Courier New", monospace; }
    .rr-track-wrap { display: grid; gap: 4px; }
    .rr-track { position: relative; height: 28px; border: 2px solid rgba(215,255,228,0.4); background: rgba(0,0,0,0.45); overflow: hidden; }
    .rr-zone  { position: absolute; top: 0; bottom: 0; right: 0; background: rgba(233,52,52,0.32); border-left: 2px solid rgba(255,80,80,0.8); }
    .rr-needle {
      position: absolute; top: 0; bottom: 0; width: 3px;
      background: var(--gold); box-shadow: 0 0 8px rgba(242,212,71,0.8); transition: left 90ms linear;
    }
    .rr-track-labels { display: flex; justify-content: space-between; font-family: "Courier New", monospace; font-size: 0.68rem; color: rgba(215,255,228,0.6); }
    .rr-round-label  { font-family: "Courier New", monospace; font-size: 0.8rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em; }
    .rr-stop-btn {
      width: fit-content; min-height: 48px; padding: 10px 28px;
      border: 3px solid #d7ffe4; background: #0d2218; color: #d7ffe4; cursor: pointer;
      text-transform: uppercase; font-weight: 900; font-size: 1rem; letter-spacing: 0.06em;
      transition: background 100ms ease, transform 80ms ease;
    }
    .rr-stop-btn:hover  { background: #1a3a28; }
    .rr-stop-btn:active { transform: translateY(2px); }
    .rr-stop-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }
    .rr-result { font-family: "Courier New", monospace; font-size: 0.95rem; min-height: 24px; color: #d7ffe4; }
    .rr-result.win  { color: var(--green); }
    .rr-result.lose { color: #ff5555; }
    .rr-badge { display: inline-block; padding: 6px 12px; background: var(--gold); color: var(--ink); font-size: 0.8rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.06em; animation: sceneFadeIn 400ms ease; }
  `;
  document.head.appendChild(s);
}

function startRRRound() {
  const startSecs = START_SECS[Math.min(rrRound, START_SECS.length - 1)];
  const tickMs    = TICK_MS[Math.min(rrRound, TICK_MS.length - 1)];
  rrCounter = startSecs * 10;
  rrActive  = true;

  const roundLabel = document.querySelector("#rrRoundLabel");
  if (roundLabel) roundLabel.textContent = `ROUND ${rrRound + 1} OF ${GAME_ROUNDS}`;
  const stopBtn = document.querySelector("#rrStopBtn");
  if (stopBtn) stopBtn.disabled = false;
  const result = document.querySelector("#rrResult");
  if (result) { result.textContent = ""; result.className = "rr-result"; }

  updateRRDisplay();

  rrInterval = window.setInterval(() => {
    if (!rrActive) return;
    rrCounter -= 1;
    updateRRDisplay();
    if (rrCounter <= 0) {
      rrActive = false;
      window.clearInterval(rrInterval);
      rrInterval = null;
      loseLife("The tape snapped. Hit STOP earlier next time.");
    }
  }, tickMs);
}

function onRRStop() {
  if (!rrActive) return;
  rrActive = false;
  window.clearInterval(rrInterval);
  rrInterval = null;

  const stopBtn = document.querySelector("#rrStopBtn");
  if (stopBtn) stopBtn.disabled = true;

  const stopZoneTenths = STOP_ZONE_SEC * 10;
  const inZone = rrCounter > 0 && rrCounter <= stopZoneTenths;

  if (inZone) {
    rrScore++;
    beep("play");
    const result = document.querySelector("#rrResult");
    if (result) { result.textContent = `Nice stop! ${formatTenths(rrCounter)} left on the clock.`; result.className = "rr-result win"; }
    clerkLine.textContent = "The tape survives. The clerk nods.";
    lateFee.textContent   = "";
    rrRound++;
    if (rrRound >= GAME_ROUNDS) setTimeout(showRRVictory, 900);
    else                        setTimeout(startRRRound,  1200);
  } else if (rrCounter > stopZoneTenths) {
    rrActive = false;
    beep("error");
    const result = document.querySelector("#rrResult");
    if (result) { result.textContent = "Too early — the tape kept rolling. Try again."; result.className = "rr-result lose"; }
    loseLife("Stopped too early.");
  }
}

function loseLife(msg) {
  rrLives--;
  beep("error");
  const livesEl = document.querySelector("#rrLives");
  if (livesEl) {
    const hearts = "♥ ".repeat(Math.max(0, rrLives)).trim();
    const dead   = "♡ ".repeat(Math.max(0, 3 - rrLives)).trim();
    livesEl.textContent = (hearts + " " + dead).trim();
  }
  const result = document.querySelector("#rrResult");
  if (result) { result.textContent = msg; result.className = "rr-result lose"; }
  clerkLine.textContent = "The tape is not pleased.";
  fee++;
  lateFee.textContent = `LATE FEE: $${fee}.97`;
  if (rrLives <= 0) setTimeout(showRRGameOver, 900);
  else              setTimeout(() => { if (!rrActive) startRRRound(); }, 1400);
}

function showRRVictory() {
  if (!currentTape) return;
  screenContent.innerHTML = `
    <div class="rr-game">
      <p class="kicker">ALL ROUNDS CLEARED</p>
      <h2 style="font-size:clamp(1.8rem,5vw,3rem)">Master Rewinder</h2>
      <p>You stopped the tape ${rrScore}/${GAME_ROUNDS} times in the danger zone. The tape is intact. The clerk is impressed.</p>
      <div><span class="rr-badge">🏆 NO LATE FEE</span></div>
      <div class="action-row">
        <button id="rrPlayAgainBtn" type="button" class="rr-stop-btn">Play Again</button>
      </div>
    </div>`;
  lateFee.textContent   = "";
  clerkLine.textContent = "Not bad. Not bad at all.";
  beep("play");
  document.querySelector("#rrPlayAgainBtn").addEventListener("click", renderRewindRace);
}

function showRRGameOver() {
  if (!currentTape) return;
  screenContent.innerHTML = `
    <div class="rr-game">
      <p class="kicker">GAME OVER</p>
      <h2 style="font-size:clamp(1.8rem,5vw,3rem)">Tape Destroyed</h2>
      <p>You stopped ${rrScore}/${GAME_ROUNDS} tapes before snapping. The clerk is filling out an incident report.</p>
      <div class="action-row">
        <button id="rrPlayAgainBtn" type="button" class="rr-stop-btn">Try Again</button>
      </div>
    </div>`;
  clerkLine.textContent = "Please see the manager.";
  beep("error");
  document.querySelector("#rrPlayAgainBtn").addEventListener("click", renderRewindRace);
}

function updateRRDisplay() {
  const counter = document.querySelector("#rrCounter");
  const needle  = document.querySelector("#rrNeedle");
  const zone    = document.querySelector("#rrZone");
  if (!counter || !needle) return;

  const startSecs   = START_SECS[Math.min(rrRound, START_SECS.length - 1)];
  const totalTenths = startSecs * 10;
  const zoneWidth   = (STOP_ZONE_SEC / startSecs) * 100;
  const progress    = 1 - Math.max(0, rrCounter) / totalTenths;

  counter.textContent = formatTenths(rrCounter);
  counter.classList.toggle("danger", rrCounter > 0 && rrCounter <= STOP_ZONE_SEC * 10);
  needle.style.left = `${Math.min(99, progress * 100)}%`;
  if (zone) zone.style.width = `${zoneWidth}%`;
}

function formatTenths(tenths) {
  const t       = Math.max(0, tenths);
  const secs    = Math.floor(t / 10);
  const tenth   = t % 10;
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenth}`;
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
───────────────────────────────────────── */
function recordUserAction() { lastUserAction = Date.now(); }

function checkLateFee() {
  if (!currentTape) return;
  const idleSeconds = Math.floor((Date.now() - lastUserAction) / 1000);
  if (idleSeconds > 35) {
    fee += 1;
    lateFee.textContent   = `LATE FEE: $${fee}.97`;
    clerkLine.textContent = "You are now emotionally overdue.";
    beep("error");
  }
}

/* ─────────────────────────────────────────
   AUDIO
───────────────────────────────────────── */
function getAudio() {
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function beep(type) {
  const ctx  = getAudio();
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
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.22;
  ambienceNode            = ctx.createBufferSource();
  ambienceGain            = ctx.createGain();
  ambienceGain.gain.value = 0.035;
  ambienceNode.buffer     = buffer;
  ambienceNode.loop       = true;
  ambienceNode.connect(ambienceGain).connect(ctx.destination);
  ambienceNode.start();
  ambienceToggle.classList.add("active");
  ambienceToggle.setAttribute("aria-pressed", "true");
}

/* ─────────────────────────────────────────
   EVENT LISTENERS — MAIN VCR
───────────────────────────────────────── */
controls.play.addEventListener("click",         () => setMode("playing"));
controls.pause.addEventListener("click",        () => setMode("paused"));
controls.rewind.addEventListener("click",       () => setMode("rewinding"));
controls.fast.addEventListener("click",         () => setMode("fast"));
controls.eject.addEventListener("click",        ejectTape);
controls.trackingDown.addEventListener("click", () => adjustTracking(-1));
controls.trackingUp.addEventListener("click",   () => adjustTracking(1));
ambienceToggle.addEventListener("click",        toggleAmbience);

/* ── Expand button ── */
expandBtn.addEventListener("click", openFullscreen);

/* ─────────────────────────────────────────
   EVENT LISTENERS — FULLSCREEN VCR
   These call the same setMode / ejectTape / adjustTracking
   functions so state stays fully in sync.
───────────────────────────────────────── */
fsControls.play.addEventListener("click",         () => setMode("playing"));
fsControls.pause.addEventListener("click",        () => setMode("paused"));
fsControls.rewind.addEventListener("click",       () => setMode("rewinding"));
fsControls.fast.addEventListener("click",         () => setMode("fast"));
fsControls.eject.addEventListener("click",        ejectTape);
fsControls.trackingDown.addEventListener("click", () => adjustTracking(-1));
fsControls.trackingUp.addEventListener("click",   () => adjustTracking(1));
minimizeBtn.addEventListener("click",             closeFullscreen);

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
renderShelf();
applyTracking();
updateClock();
window.setInterval(updateClock,  1000);
window.setInterval(checkLateFee, 1000);