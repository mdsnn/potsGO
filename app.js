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
    runtime: "00:50",
    staffTitle: "Production-grade AI SaaS, start to finish.",
    staffBody: "Six projects — Pulse, Taskflow, AI Form Builder, CSV Importer, Invoice Generator, and Marketplace. All shipped.",
    scenes: [
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
    runtime: "06:00",
    staffTitle: "Build notes from the night shift.",
    staffBody: "Six posts on agent memory, prompt caching, RAG, LangChain, tool use, and proactive agents — all from building Nearby Vibes.",
    scenes: [
      {
        heading: "After Hours",
        eyebrow: "Build notes · Nearby Vibes",
        body: "Six posts from building a production AI agent. Not tutorials — real decisions, real failures, and what actually shipped.",
        badges: ["pgvector", "Prompt caching", "RAG", "LangChain", "Tool use", "Proactive agents"],
        duration: 5000
      },
      {
        heading: "Agent Memory with pgvector",
        eyebrow: "Post 1 of 6",
        body: "How I built persistent semantic user memory in Nearby Vibes using pgvector — without a separate vector database. The hard part was not the database. It was deciding what deserved to become memory.",
        readPost: "pgvector",
        duration: 6000
      },
      {
        heading: "Prompt Caching in Production",
        eyebrow: "Post 2 of 6",
        body: "Prompt caching changed the economics of running a tool-using agent. The win came from treating tool definitions and system instructions as product infrastructure — stable, deliberate, and cacheable.",
        readPost: "prompt-caching",
        duration: 6000
      },
      {
        heading: "LangChain: What I Used and Why",
        eyebrow: "Post 3 of 6",
        body: "I evaluated LangChain, borrowed its vocabulary, and built the Nearby Vibes agent without it. Not a verdict against the framework — a verdict about where the agent loop sat in the product.",
        readPost: "langchain",
        duration: 6000
      },
      {
        heading: "RAG Lessons From Real Products",
        eyebrow: "Post 4 of 6",
        body: "RAG is not one feature. It is the retrieval layer of your product. Chunking strategy, hybrid search, reranking, and knowing when retrieval makes things worse — all from building Nearby Vibes.",
        readPost: "rag",
        duration: 6000
      },
      {
        heading: "Tooling: Claude Tool Use",
        eyebrow: "Post 5 of 6",
        body: "The most important part of a tool-using agent is the contract between the model and the tools. Tool tiers, structured failures, step budgets, and logging tool calls as product events.",
        readPost: "tool-use",
        duration: 6000
      },
      {
        heading: "Proactive Autonomous Agents",
        eyebrow: "Post 6 of 6",
        body: "Scheduled jobs, Telegram nudges, nightly BI — the parts of Nearby Vibes that acted before the user asked. Autonomy is a ladder. The most powerful thing an agent can do is sometimes decide to do nothing.",
        readPost: "proactive-agents",
        duration: 6000
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
    runtime: "00:45",
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
const storeStatus    = document.querySelector("#storeStatus");
const ambienceToggle = document.querySelector("#ambienceToggle");
const vcr            = document.querySelector(".vcr");
const tapeProgress   = document.querySelector("#tapeProgress");
const leftReel       = document.querySelector("#leftReel");
const rightReel      = document.querySelector("#rightReel");
const trackingLabel  = document.querySelector("#trackingLabel");
const staffPickTitle = document.querySelector("#staffPickTitle");
const staffPickBody  = document.querySelector("#staffPickBody");
const expandBtn      = document.querySelector("#expandBtn");
const sceneDots      = document.querySelector("#sceneDots");

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
const fsSceneDots     = document.querySelector("#fsSceneDots");
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
   DOM REFS — CONTACT
───────────────────────────────────────── */
const contactOverlay   = document.querySelector("#contactOverlay");
const contactName      = document.querySelector("#contactName");
const contactEmail     = document.querySelector("#contactEmail");
const contactMsg       = document.querySelector("#contactMsg");
const contactSubmitBtn = document.querySelector("#contactSubmitBtn");
const contactCancelBtn = document.querySelector("#contactCancelBtn");
const contactStatus    = document.querySelector("#contactStatus");

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
let contactOpen    = false;

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

  // Highlight active fast path button
  document.querySelectorAll(".fast-path-btn").forEach((btn) => {
    btn.classList.toggle("fp-active", btn.dataset.tape === id);
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
  renderSceneDots();
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
   SCENE NAVIGATION DOTS
───────────────────────────────────────── */
function renderSceneDots() {
  sceneDots.innerHTML   = "";
  fsSceneDots.innerHTML = "";

  if (!currentTape || currentTape.scenes.length <= 1) return;

  currentTape.scenes.forEach((_, index) => {
    // Main TV dot
    const dot = makeDot(index);
    sceneDots.appendChild(dot);

    // Fullscreen mirror
    const fsDot = makeDot(index);
    fsSceneDots.appendChild(fsDot);
  });
}

function makeDot(index) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "scene-dot" + (index === currentScene ? " dot-active" : "");
  dot.setAttribute("role", "tab");
  dot.setAttribute("aria-label", `Scene ${index + 1}`);
  dot.setAttribute("aria-selected", index === currentScene ? "true" : "false");
  dot.setAttribute("title", `Scene ${index + 1}`);
  dot.addEventListener("click", () => jumpToScene(index));
  return dot;
}

function updateDots() {
  [sceneDots, fsSceneDots].forEach((container) => {
    container.querySelectorAll(".scene-dot").forEach((dot, index) => {
      const active = index === currentScene;
      dot.classList.toggle("dot-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });
  });
}

function jumpToScene(index) {
  if (!currentTape) return;
  stopPlayback();
  recordUserAction();
  currentScene = Math.max(0, Math.min(index, currentTape.scenes.length - 1));
  tapeEnded    = false;

  // If playing, keep playing from the new scene
  if (mode === "playing") {
    renderScene("playing");
    startPlayback();
  } else {
    // Put into paused state so user can see the scene then press play
    mode = "paused";
    screen.classList.remove("playing", "rewinding", "fast");
    screen.classList.add("paused", "has-content");
    vcr.classList.remove("is-playing");
    setTransportActive(controls.pause);
    renderScene("paused");
  }
  updateDots();
  syncFullscreen();
  beep("click");
}

/* ─────────────────────────────────────────
   SCENE RENDER
───────────────────────────────────────── */
function renderScene(state = mode) {
  if (!currentTape) {
    screenContent.classList.remove("has-image");
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
  const hasImage = !!scene.image;

  const eyebrow   = scene.eyebrow ? `<p class="scene-eyebrow">${escHtml(scene.eyebrow)}</p>` : "";
  const body      = scene.body    ? `<p>${escHtml(scene.body)}</p>` : "";
  const list      = scene.list    ? `<ul>${scene.list.map((item) => `<li>${escHtml(item)}</li>`).join("")}</ul>` : "";
  const badges    = scene.badges  ? `<div class="badge-row">${scene.badges.map((b) => `<span>${escHtml(b)}</span>`).join("")}</div>` : "";
  const cards     = scene.cards   ? `<div class="card-grid">${scene.cards.map((card) => `
      <article class="project-card">
        <strong>${escHtml(card.title)}</strong>
        <small>${escHtml(card.meta)}</small>
        <p>${escHtml(card.body)}</p>
      </article>`).join("")}</div>` : "";
  const image     = hasImage
    ? `<figure class="screen-image"><img src="${escAttr(scene.image)}" alt="${escAttr(scene.imageAlt || "")}"></figure>`
    : "";
  const linksHtml = scene.links ? buildLinks(scene.links) : "";
  const readBtn   = scene.readPost
    ? `<div class="link-row"><button type="button" class="read-post-btn" data-post="${escAttr(scene.readPost)}">▶ Read inside the store</button></div>`
    : "";

  const label = state === "loaded" ? "Press play on the VCR." : state.toUpperCase();
  updateTransportDisplay(state);

  screenContent.classList.toggle("has-image", hasImage);

  screenContent.innerHTML = `
    ${image}
    <p class="kicker">${escHtml(label)}</p>
    ${eyebrow}
    <h2>${escHtml(scene.heading)}</h2>
    ${body}
    ${list}
    ${badges}
    ${cards}
    ${linksHtml}
    ${readBtn}
    <p class="scene-counter">${currentScene + 1} / ${currentTape.scenes.length}</p>`;

  updateDots();
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
  document.querySelectorAll(".fast-path-btn").forEach((btn) => btn.classList.remove("fp-active"));

  vcrSlot.classList.remove("loaded");
  slotLabel.textContent  = "INSERT TAPE";
  vcrDisplay.textContent = "--:--";
  clerkLine.textContent  = "Tape returned. Shelf's open.";
  screen.className = "screen paused";
  vcr.classList.remove("has-tape", "is-playing");

  setTransportActive(null);
  updateTapeProgress();
  renderScene();
  renderSceneDots();
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

    screenContent.classList.remove("has-image");
    screenContent.innerHTML = `
      <p class="kicker">END OF TAPE</p>
      <h2>${escHtml(currentTape.title)}</h2>
      <p>Rewind to watch again, fast-forward to jump around, or eject and rent another tape.</p>`;

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
  setTimeout(() => {
    fsOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }, 240);
  expandBtn.focus();
  beep("click");
}

function syncFullscreen() {
  if (!fsOpen) return;

  const stateClasses = ["playing", "paused", "rewinding", "fast", "has-content"];
  fsScreen.classList.remove(...stateClasses);
  stateClasses.forEach((cls) => {
    if (screen.classList.contains(cls)) fsScreen.classList.add(cls);
  });

  fsScreenContent.classList.toggle("has-image", screenContent.classList.contains("has-image"));
  fsScreenContent.innerHTML = screenContent.innerHTML;
  fsVcrDisplay.textContent  = vcrDisplay.textContent;
  fsTapeLabel.textContent   = currentTape ? currentTape.title.toUpperCase() : "";

  // Re-wire fullscreen dots since innerHTML was replaced
  renderSceneDots();
  syncFsTransportButtons();
}

function syncFsTransportButtons() {
  const modeToBtn = {
    playing:   fsControls.play,
    paused:    fsControls.pause,
    rewinding: fsControls.rewind,
    fast:      fsControls.fast
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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (contactOpen)    { closeContact();    return; }
    if (readerOpen)     { closeReader();     return; }
    if (fsOpen)         { closeFullscreen(); return; }
  }
  if ((e.key === "f" || e.key === "F") && !contactOpen && !readerOpen) {
    if (!fsOpen && currentTape) openFullscreen();
  }
});

fsOverlay.addEventListener("click", (e) => {
  if (e.target === fsOverlay) closeFullscreen();
});

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function openContact() {
  contactOpen = true;
  contactOverlay.setAttribute("aria-hidden", "false");
  contactOverlay.classList.add("open");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => contactOverlay.classList.add("contact-visible"));
  });
  document.body.style.overflow = "hidden";
  contactName.focus();
  beep("insert");
}

function closeContact() {
  contactOpen = false;
  contactOverlay.classList.remove("contact-visible");
  contactOverlay.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    contactOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }, 240);
  beep("click");
}

function validateContact() {
  const name  = contactName.value.trim();
  const email = contactEmail.value.trim();
  const msg   = contactMsg.value.trim();

  if (!name)                             return "Name is required.";
  if (!email || !email.includes("@"))   return "A valid email is required.";
  if (!msg || msg.length < 10)          return "Message is a bit short — tell me more.";
  return null;
}

contactSubmitBtn.addEventListener("click", () => {
  const error = validateContact();
  if (error) {
    contactStatus.textContent = error;
    contactStatus.className   = "contact-status error";
    beep("error");
    return;
  }

  // Build mailto link as the submission mechanism (no server required)
  const name  = contactName.value.trim();
  const email = contactEmail.value.trim();
  const msg   = contactMsg.value.trim();
  const subject = encodeURIComponent(`Message from ${name} via Mwiko Video Club`);
  const body    = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
  window.location.href = `mailto:mwikosinyangwe@gmail.com?subject=${subject}&body=${body}`;

  contactStatus.textContent = "Opening your email client… message ready to send.";
  contactStatus.className   = "contact-status";
  beep("play");

  // Clear fields after a short delay
  setTimeout(() => {
    contactName.value  = "";
    contactEmail.value = "";
    contactMsg.value   = "";
    contactStatus.textContent = "";
    clerkLine.textContent = "Message drafted. The clerk is impressed.";
    closeContact();
  }, 2200);
});

contactCancelBtn.addEventListener("click", closeContact);

contactOverlay.addEventListener("click", (e) => {
  if (e.target === contactOverlay) closeContact();
});

/* ─────────────────────────────────────────
   BLOG POST DATA
   Each post: { id, title, eyebrow, sections[] }
   Section types: "p", "h2", "h3", "ul", "code", "blockquote", "takeaway"
───────────────────────────────────────── */
const blogPosts = {
  "pgvector": {
    title: "How I Built Agent Memory with pgvector",
    eyebrow: "Agent Memory · PostgreSQL · pgvector",
    sections: [
      { type: "p", text: "Agent memory sounds abstract until you have a user come back a week later and expect the product to remember something obvious." },
      { type: "p", text: "In Nearby Vibes, the problem was not \"make the agent conscious.\" It was much more practical: if someone told the assistant they were vegetarian, hated cilantro, usually ordered for two, or preferred cheap late-night places, I did not want every future conversation to start from zero." },
      { type: "h2", text: "The Problem I Was Actually Solving" },
      { type: "p", text: "Nearby Vibes helps users find food and activity options around them. Preferences matter a lot: dietary constraints, cuisines liked or avoided, price sensitivity, distance tolerance, places already tried, and conversational hints like \"I want something cozy, not loud.\"" },
      { type: "p", text: "Some of these are clean structured fields. But most preferences arrive messily — \"Last time the ramen place was good, but I want something less salty and closer to home.\" That sentence contains several useful future signals but does not fit neatly into one column." },
      { type: "h2", text: "The Memory Schema" },
      { type: "p", text: "I treated memory as a first-class table, not a side effect of chat history. The key decision was separating memory_type because not all memories behave the same way. A durable preference like \"does not eat pork\" needs to be treated differently from a soft signal like \"was in the mood for sushi last Friday.\"" },
      { type: "code", text: "CREATE TABLE user_memories (\n  id              bigserial PRIMARY KEY,\n  user_id         uuid NOT NULL,\n  memory_type     text NOT NULL,\n  content         text NOT NULL,\n  confidence      numeric DEFAULT 0.8,\n  created_at      timestamptz DEFAULT now(),\n  embedding       vector(1536)\n);\n\nCREATE INDEX user_memories_embedding_hnsw_idx\n  ON user_memories\n  USING hnsw (embedding vector_cosine_ops);" },
      { type: "h2", text: "Writing Memories" },
      { type: "p", text: "The first version wrote every message into memory. Retrieval got worse almost immediately. Instead I added a small extraction step — the model decided whether a conversation turn contained durable preference information. If it did, it returned normalized memory candidates. The application then embedded only the content string and saved it." },
      { type: "p", text: "The boring detail that mattered: memories need to be short, declarative, and phrased as reusable facts. \"User liked it\" is useless six weeks later. \"User liked the vegan dumplings at X because they were spicy but not greasy\" is actionable." },
      { type: "h2", text: "Reading Memories" },
      { type: "p", text: "At request time, I embedded the user's current intent and pulled back the closest memories using pgvector's cosine distance operator. In practice I rarely used vector similarity alone — I combined it with type filters so dietary constraints were always included regardless of similarity score." },
      { type: "code", text: "WITH candidates AS (\n  SELECT id, memory_type, content, confidence,\n         1 - (embedding <=> $1::vector) AS similarity\n  FROM user_memories\n  WHERE user_id = $2\n  ORDER BY embedding <=> $1::vector\n  LIMIT 20\n)\nSELECT * FROM candidates\nWHERE similarity > 0.72\nORDER BY confidence DESC, similarity DESC, created_at DESC\nLIMIT 6;" },
      { type: "h2", text: "What Surprised Me" },
      { type: "ul", items: [
        "More memory made the agent worse. Too many memories and the assistant became overfit to stale context.",
        "Memory extraction mattered more than embedding quality. A clean sentence with an average model beat a raw transcript with a better model.",
        "Deletion had to be designed early. \"I am avoiding gluten this week\" should not persist for months with the same weight as \"I have a peanut allergy.\""
      ]},
      { type: "h2", text: "What Did Not Work" },
      { type: "p", text: "Treating conversation history as memory was easy to implement and bad in production. Chat turns were too verbose, retrieval matched on incidental words, and old temporary moods resurfaced as permanent preferences." },
      { type: "p", text: "The better architecture was hybrid: structured fields for hard constraints, vector memory for fuzzy preferences, recency and confidence decay to prevent stale memories from dominating." },
      { type: "takeaway", text: "pgvector worked well because it kept memory close to the rest of the product data — no separate vector database, no extra operational surface. But the database was not the hard part. The hard part was deciding what deserved to become memory. Agent memory is less about storing everything and more about forgetting on purpose." }
    ]
  },

  "prompt-caching": {
    title: "What Prompt Caching Changed in Production Cost",
    eyebrow: "Claude API · Prompt Caching · Production Cost",
    sections: [
      { type: "p", text: "Prompt caching did not change the product architecture. It changed the economics of running it." },
      { type: "p", text: "In Nearby Vibes, the expensive part of an agent call was not always the user's latest message. It was the repeated context around it: the system prompt, tool definitions, behavioral rules, examples, and working context that barely changed between calls. Before caching, every request paid for that entire static prefix again." },
      { type: "h2", text: "What We Were Repeating" },
      { type: "p", text: "Each request included a lot of stable material alongside the user's actual message: the core system prompt and response style rules, tool definitions and JSON schemas, tool usage policy, examples of good tool calls, and product-specific safety behavior." },
      { type: "p", text: "The actual user message was often tiny — \"Anything good nearby that's still open?\" — but the model also needed the full operating manual. That operating manual was the obvious caching candidate." },
      { type: "h2", text: "Implementation" },
      { type: "p", text: "You mark the end of the stable prefix with cache_control. The API considers content in order: tools → system → messages. If your tools change between requests, everything below them in the cache is also invalidated — so tool definitions need to be stable in production." },
      { type: "code", text: "const tools = [\n  { name: \"search_nearby_places\", ... },\n  {\n    name: \"get_user_memory\",\n    ...,\n    // Cache boundary: everything above this is stable\n    cache_control: { type: \"ephemeral\" },\n  },\n];\n\nconst response = await anthropic.messages.create({\n  model: process.env.CLAUDE_MODEL,\n  max_tokens: 800,\n  tools,\n  system: [{\n    type: \"text\",\n    text: NEARBY_VIBES_SYSTEM_PROMPT,\n    cache_control: { type: \"ephemeral\" },\n  }],\n  messages: [...],\n});\n\nconsole.log(response.usage);\n// { cache_creation_input_tokens, cache_read_input_tokens, ... }" },
      { type: "h2", text: "The Gotchas" },
      { type: "ul", items: [
        "Minimum cache length. If the cacheable prefix is too short, it will not be cached even if you mark it.",
        "Exact matching. The cached prefix must be byte-identical on every request. No timestamps, request IDs, or user-specific text in the cached section.",
        "Tool churn during development. Every tweak to tool descriptions invalidates the prefix. The stable agent contract needs to actually be stable before caching delivers value.",
        "Concurrent request bursts. A cache entry is not available until the first response starts writing it. A simultaneous burst may all miss on the first wave."
      ]},
      { type: "h2", text: "How the Mental Model Changed" },
      { type: "p", text: "Before caching, the optimization question was: how small can I make every prompt? After caching, the question became: what parts of this prompt are stable enough to become infrastructure?" },
      { type: "p", text: "That shift made the agent design cleaner. Tool definitions became more deliberate. The system prompt became less of a dumping ground. Dynamic context moved later in the request where it belonged." },
      { type: "takeaway", text: "Prompt caching is not a magic discount button. It rewards stable prompt architecture. The win came from caching the parts of the agent that behaved like product infrastructure — tools, policies, examples, stable instructions. The parts that changed per user stayed uncached. That split made the product cheaper to run and easier to reason about." }
    ]
  },

  "langchain": {
    title: "LangChain: What I Used, What I Did Not, and Why",
    eyebrow: "LangChain · Agent Frameworks · AI Tooling",
    sections: [
      { type: "p", text: "LangChain is one of those tools that people tend to discuss as a belief system. You are either supposed to love it because it gives you abstractions for LLM apps, or reject it because it hides too much." },
      { type: "p", text: "My take is more boring: LangChain is useful when its abstractions match the shape of your problem. It gets in the way when you are still discovering that shape. For Nearby Vibes, I evaluated LangChain early, borrowed some of its vocabulary, and built the production agent without it." },
      { type: "h2", text: "What LangChain Gets Right" },
      { type: "p", text: "LangChain is genuinely good at getting a prototype moving quickly. If you need to wire together a model, prompt templates, tools, retrieval, memory, and output parsing, it gives you vocabulary and a component set. That matters when you are still learning what an LLM application even needs." },
      { type: "p", text: "Even if you do not use it directly, you probably use ideas it helped popularize: retrievers, agents, tool calling, structured outputs, document loaders, evaluation traces. The vocabulary is valuable regardless of whether you adopt the library." },
      { type: "h2", text: "Where It Started to Feel Heavy" },
      { type: "p", text: "The more product-specific Nearby Vibes became, the more I cared about exact behavior between steps. I wanted direct control over how tools were selected, how memory was retrieved, how many tokens each section consumed, how errors surfaced, and how telemetry mapped to product events." },
      { type: "p", text: "The issue was not that LangChain could not do these things. The issue was that I was spending more time understanding the abstraction than understanding the product behavior underneath it." },
      { type: "h2", text: "The Agent Loop I Actually Wanted" },
      { type: "code", text: "async function runNearbyAgent(input) {\n  const memory = await retrieveRelevantMemory(\n    input.userId, input.message\n  );\n\n  const response = await claude.messages.create({\n    model:    process.env.CLAUDE_MODEL,\n    system:   buildSystemPrompt({ memory }),\n    tools:    nearbyTools,\n    messages: input.messages,\n  });\n\n  if (response.stop_reason === \"tool_use\") {\n    const toolResults = await runRequestedTools(response.content);\n    return continueWithToolResults(input, response, toolResults);\n  }\n\n  return formatAgentResult(response);\n}" },
      { type: "p", text: "That is not a lot of code. More importantly, every line maps directly to product behavior. When something went wrong I could answer exactly where it broke. That debugging path mattered more than a more elegant framework graph." },
      { type: "h2", text: "The Rule I Use Now" },
      { type: "blockquote", text: "Use frameworks for commodity complexity. Own the code where product behavior lives." },
      { type: "p", text: "For Nearby Vibes, tool orchestration, memory, ranking, and prompt caching were product behavior. I would reach for LangChain faster when the integration surface is broad and standard: chat over documents, common vector stores, interchangeable model providers. I would build without it when the agent loop is the product itself." },
      { type: "takeaway", text: "The best LangChain decision is not yes or no. It is deciding which parts of your AI system are generic enough to outsource to a framework and which parts are specific enough that you should own them. For Nearby Vibes, the agent loop pushed firmly into the second category." }
    ]
  },

  "rag": {
    title: "RAG Lessons From Building Retrieval Into Products",
    eyebrow: "RAG · Retrieval · Vector Search · PostgreSQL",
    sections: [
      { type: "p", text: "RAG sounds like one technique. In practice it is a bundle of product decisions." },
      { type: "p", text: "Retrieval-augmented generation means the model does not answer from its weights alone. You retrieve relevant context first, then give that context to the model. The definition is simple. The implementation is where things get interesting." },
      { type: "h2", text: "The First Mistake: Treating RAG as Search Plus Prompting" },
      { type: "p", text: "The naive version: embed question → vector search → stuff top chunks into prompt → answer. That can work for a demo. It breaks down when the product needs reliability." },
      { type: "p", text: "The real questions are: What are you retrieving? How fresh is it? How trustworthy is it? What should happen when retrieval finds nothing? Does the user need an answer, a citation, or an action? In Nearby Vibes, retrieval was only useful when it changed a decision." },
      { type: "h2", text: "Chunking Strategy" },
      { type: "p", text: "Chunking defines what the system is capable of finding. I prefer semantic chunks over fixed-size chunks — a chunk should represent one complete idea: one menu item, one venue description, one memory, one policy section." },
      { type: "p", text: "Smaller, meaningful chunks make retrieval more precise. The tradeoff is that answering a broad question may require retrieving and assembling several chunks." },
      { type: "h2", text: "Hybrid Retrieval" },
      { type: "p", text: "Vector similarity alone fails for names, exact terms, and proper nouns. Keyword search fails for semantic intent. For a product system, you usually want both." },
      { type: "code", text: "WITH vector_matches AS (\n  SELECT id, title, body,\n    1 - (embedding <=> $1::vector) AS vector_score\n  FROM rag_chunks WHERE workspace_id = $2\n  ORDER BY embedding <=> $1::vector LIMIT 30\n),\nkeyword_matches AS (\n  SELECT id,\n    ts_rank_cd(search_vector, plainto_tsquery($3)) AS keyword_score\n  FROM rag_chunks\n  WHERE workspace_id = $2\n    AND search_vector @@ plainto_tsquery($3)\n  LIMIT 30\n)\nSELECT v.id, v.title, v.body,\n  (v.vector_score * 0.75 + COALESCE(k.keyword_score,0) * 0.25) AS score\nFROM vector_matches v\nLEFT JOIN keyword_matches k ON k.id = v.id\nORDER BY score DESC LIMIT 8;" },
      { type: "h2", text: "Reranking" },
      { type: "p", text: "The first retrieval pass should cast a wide net. It is looking for candidates. The reranker decides what actually belongs in the model's context. Do not assume the nearest vectors are the best final context — nearest in embedding space is not the same as most useful for the answer." },
      { type: "h2", text: "What Retrieval Is Not For" },
      { type: "ul", items: [
        "Facts the model already knows well. Retrieving a summary of something obvious wastes tokens.",
        "Structured data. If you need to know whether a venue is open right now, query the database directly. RAG is for text-heavy information that does not fit neatly into a query.",
        "A substitute for bad data. If the corpus has stale venue information, retrieval will confidently surface stale answers."
      ]},
      { type: "takeaway", text: "RAG is not one feature. It is the retrieval layer of your product. The best RAG systems are opinionated about what they retrieve, when they retrieve it, and how much of it the model is allowed to see. Retrieval should make the next answer or action better. If it does not, it is just expensive context." }
    ]
  },

  "tool-use": {
    title: "Tooling Lessons From Claude Tool Use",
    eyebrow: "Claude API · Tool Use · Agent Design",
    sections: [
      { type: "p", text: "The most important part of a tool-using agent is not the model. It is the contract between the model and the tools." },
      { type: "p", text: "In Nearby Vibes, Claude was not generating text. It was deciding when to search nearby venues, retrieve user memory, check availability, rank options, and trigger follow-up workflows. That meant tools had to be designed like a product API, not random helper functions." },
      { type: "h2", text: "Tool Tiers" },
      { type: "p", text: "I ended up thinking about tools in tiers based on consequence and cost. Tier 1 was safe, read-only, cheap — retrieve memory, search venues, get suggestions. Tier 2 was more expensive or specific — fetch detailed venue data, check hours, get menus. Tier 3 changed state or contacted the user — save a memory, schedule a nudge, send a Telegram message." },
      { type: "p", text: "The model did not get unlimited access across all tiers. The more consequential the tool, the more validation the application performed before executing it." },
      { type: "h2", text: "Tool Definitions" },
      { type: "p", text: "The best tool definitions were boring and explicit. I learned to avoid clever names — search_nearby_places beats discover_vibes every time. The model chooses tools far more reliably when names describe the action plainly." },
      { type: "code", text: "const searchNearbyPlaces = {\n  name: \"search_nearby_places\",\n  description:\n    \"Search for nearby restaurants, cafes, bars, and activities \" +\n    \"that match the user's current request.\",\n  input_schema: {\n    type: \"object\",\n    properties: {\n      query: {\n        type: \"string\",\n        description: \"Short search phrase: 'vegetarian ramen', 'quiet wine bar'.\",\n      },\n      lat:  { type: \"number\" },\n      lng:  { type: \"number\" },\n      radius_meters: { type: \"integer\", minimum: 100, maximum: 5000 },\n      open_now: { type: \"boolean\" },\n    },\n    required: [\"query\", \"lat\", \"lng\", \"radius_meters\"],\n  },\n};" },
      { type: "h2", text: "Tool Results" },
      { type: "p", text: "Tool result shape matters as much as input shape. A result that gives the model something to reason with — distance, open status, why it matches, warnings — lets the model explain tradeoffs instead of inventing them." },
      { type: "h2", text: "The Four Lessons" },
      { type: "ul", items: [
        "Make tools narrower than you want at first. A broad tool is easy to build and hard to control.",
        "Validate tool input server-side. The model proposes arguments. The application owns execution.",
        "Return structured failures. The model should be able to recover from any tool failure naturally.",
        "Log tool calls as product events. The only way to improve an agent in production is a clear record of what it decided."
      ]},
      { type: "takeaway", text: "Tool use works best when the model is treated as a planner and the application as the executor. Claude can decide it needs nearby restaurants or user memory. But the application defines what those tools mean, validates inputs, enforces budgets, and decides which actions are allowed. That split made Nearby Vibes capable without making it uncontrollable." }
    ]
  },

  "proactive-agents": {
    title: "Proactive Autonomous Agents in Nearby Vibes",
    eyebrow: "Autonomous Agents · APScheduler · Telegram",
    sections: [
      { type: "p", text: "Most agents are reactive. A user asks a question, the agent responds, and the loop ends." },
      { type: "p", text: "The more interesting version is proactive: the system notices something, decides it is worth acting on, and reaches out or prepares work before the user asks. Nearby Vibes started as a conversational product, but the parts that felt most agentic were scheduled jobs, Telegram nudges, and nightly BI workflows." },
      { type: "h2", text: "Reactive vs Proactive" },
      { type: "p", text: "A reactive agent waits: user asks for dinner options, agent searches and replies. A proactive agent has a standing job: it is Friday at 5:30pm, this user often asks for casual dinner around this time, their usual spot is closed tonight, prepare three alternatives and send a nudge if they have opted in." },
      { type: "p", text: "That second system is harder because it has to answer questions the user never asked: Is this useful right now? Is the confidence high enough? Has the user opted in? How recently did we nudge them?" },
      { type: "h2", text: "The Architecture" },
      { type: "code", text: "scheduler.add_job(\n    run_evening_nudge_scan,\n    trigger=\"cron\",\n    hour=\"16-20\",\n    minute=\"*/15\",\n    id=\"evening_nudge_scan\",\n)\n\nscheduler.add_job(\n    run_nightly_bi_summary,\n    trigger=\"cron\",\n    hour=2, minute=0,\n    id=\"nightly_bi_summary\",\n)" },
      { type: "p", text: "The scheduler should not contain product intelligence. It wakes up the right workflow at the right time. The workflow decides whether anything deserves to happen." },
      { type: "h2", text: "Telegram Nudges" },
      { type: "p", text: "The critical function was should_send_nudge — where product restraint lives. It checked: opted in, quiet hours (no messages before 10am or after 9pm), frequency cap (max 2 nudges per 7 days), confidence threshold, and days since last app open. The agent can draft the message. It should not decide whether sending is appropriate." },
      { type: "h2", text: "Nightly BI" },
      { type: "p", text: "Nightly BI was proactive in a different direction. It did not message users. It prepared operational intelligence — pulling the day's events, aggregating usage and failures, asking the model to summarize notable patterns, and storing the result. The model surfaces things like: search quality degraded for late-night requests because most venues were already closed. That is not just reporting. It is the system preparing tomorrow's work." },
      { type: "h2", text: "The Autonomy Ladder" },
      { type: "ul", items: [
        "Level 1: System drafts. Human reviews and sends.",
        "Level 2: System sends low-risk messages under strict explicit rules.",
        "Level 3: System takes reversible actions — saves a memory, creates a reminder.",
        "Level 4: System takes consequential actions — books, purchases, contacts others."
      ]},
      { type: "p", text: "Nearby Vibes stayed mostly at Levels 2 and 3. That was intentional. Food recommendations and nudges should not create surprise obligations for users." },
      { type: "h2", text: "Where Autonomous Agents Break Down" },
      { type: "p", text: "Acting without enough signal. Acting on stale context. Frequency without restraint — the first nudge feels helpful, the fifth this week feels aggressive. And no explanation trail — if a proactive action causes a problem, the user and the product team need to understand why." },
      { type: "takeaway", text: "The future of agents is not better chat boxes. It is systems that can watch, prepare, and occasionally act at the right moment. But proactive does not mean pushy. The best autonomous agents understand timing, permission, and silence. The most powerful action an agent can take is sometimes deciding to do nothing." }
    ]
  }
};

/* ─────────────────────────────────────────
   BLOG READER
───────────────────────────────────────── */
let readerOpen   = false;
let readerPostId = null;

function openReader(postId) {
  const post = blogPosts[postId];
  if (!post) return;

  readerOpen   = true;
  readerPostId = postId;

  // Build post HTML
  const sectionsHtml = post.sections.map((s) => {
    if (s.type === "p")           return `<p class="reader-p">${escHtml(s.text)}</p>`;
    if (s.type === "h2")          return `<h2 class="reader-h2">${escHtml(s.text)}</h2>`;
    if (s.type === "h3")          return `<h3 class="reader-h3">${escHtml(s.text)}</h3>`;
    if (s.type === "blockquote")  return `<blockquote class="reader-blockquote"><p>${escHtml(s.text)}</p></blockquote>`;
    if (s.type === "ul")          return `<ul class="reader-ul">${s.items.map(i => `<li>${escHtml(i)}</li>`).join("")}</ul>`;
    if (s.type === "code")        return `<pre class="reader-pre"><code>${escHtml(s.text)}</code></pre>`;
    if (s.type === "takeaway")    return `<div class="reader-takeaway"><span class="reader-takeaway-label">Takeaway</span><p>${escHtml(s.text)}</p></div>`;
    return "";
  }).join("");

  // Render into fullscreen overlay in reader mode
  fsOverlay.setAttribute("aria-hidden", "false");
  fsOverlay.classList.add("open", "reader-mode");

  fsScreen.className = "screen paused has-content fs-screen";
  fsScreenContent.classList.remove("has-image");
  fsScreenContent.innerHTML = `
    <div class="reader-shell">
      <div class="reader-header">
        <span class="reader-eyebrow">${escHtml(post.eyebrow)}</span>
        <h1 class="reader-title">${escHtml(post.title)}</h1>
      </div>
      <div class="reader-body">
        ${sectionsHtml}
        <div class="reader-footer-links">
          <a href="blog/${postId}.html" target="_blank" rel="noreferrer noopener" class="reader-external">
            ↗ Open as standalone page
          </a>
        </div>
      </div>
    </div>`;

  // Hide normal fs-vcr-bar, show reader bar
  document.querySelector(".fs-vcr-bar").style.display = "none";
  document.querySelector("#fsSceneDots").style.display = "none";

  // Inject reader bar if not already there
  let readerBar = document.querySelector("#readerBar");
  if (!readerBar) {
    readerBar = document.createElement("div");
    readerBar.id = "readerBar";
    readerBar.className = "reader-bar";
    readerBar.innerHTML = `
      <span id="readerBarTitle" class="reader-bar-title"></span>
      <button id="readerCloseBtn" type="button" class="reader-close-btn">✕ Close</button>`;
    document.querySelector(".fs-shell").appendChild(readerBar);
    document.querySelector("#readerCloseBtn").addEventListener("click", closeReader);
  }

  document.querySelector("#readerBarTitle").textContent = post.title;
  readerBar.style.display = "flex";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => fsOverlay.classList.add("fs-visible"));
  });

  document.body.style.overflow = "hidden";

  // Scroll reader to top
  fsScreenContent.scrollTop = 0;

  beep("insert");
}

function closeReader() {
  readerOpen   = false;
  readerPostId = null;

  fsOverlay.classList.remove("fs-visible", "reader-mode");
  fsOverlay.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    fsOverlay.classList.remove("open");
    document.body.style.overflow = "";

    // Restore normal fs-vcr-bar
    document.querySelector(".fs-vcr-bar").style.display = "";
    document.querySelector("#fsSceneDots").style.display = "";

    const readerBar = document.querySelector("#readerBar");
    if (readerBar) readerBar.style.display = "none";

    // Re-sync the fullscreen content with main screen
    syncFullscreen();
  }, 240);

  beep("click");
}

// Event delegation for read-post-btn (rendered dynamically inside screenContent)
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".read-post-btn");
  if (btn) {
    openReader(btn.dataset.post);
  }
});

/* ─────────────────────────────────────────
   FAST PATH NAV
───────────────────────────────────────── */
document.querySelectorAll(".fast-path-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.tape;

    // Contact button opens the form overlay instead of renting a tape
    if (id === "contact") {
      openContact();
      clerkLine.textContent = "Skipping the queue — leave your details.";
      return;
    }

    // Rent tape and immediately start playing
    rentTape(id);
    setMode("playing");
    clerkLine.textContent = `Skipping the queue — playing ${tapes.find(t => t.id === id)?.title || id}.`;
  });
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

  // Space bar triggers stop when game is active
  document.addEventListener("keydown", onGameKey);
}

function onGameKey(e) {
  if (e.key === " " || e.key === "Spacebar") {
    e.preventDefault();
    const btn = document.querySelector("#rrStopBtn");
    if (btn && !btn.disabled && rrActive) onRRStop();
  }
}

function injectRRStyles() {
  if (document.querySelector("#rr-styles")) return;
  const s = document.createElement("style");
  s.id = "rr-styles";
  s.textContent = `
    .rr-game { display: grid; gap: 18px; width: min(480px, 100%); }
    .rr-display-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .rr-counter-box {
      font-family: "Courier New", monospace; font-size: clamp(2.2rem, 6vw, 3.5rem);
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
    .rr-needle { position: absolute; top: 0; bottom: 0; width: 3px; background: var(--gold); box-shadow: 0 0 8px rgba(242,212,71,0.8); transition: left 90ms linear; }
    .rr-track-labels { display: flex; justify-content: space-between; font-family: "Courier New", monospace; font-size: 0.68rem; color: rgba(215,255,228,0.6); }
    .rr-round-label { font-family: "Courier New", monospace; font-size: 0.8rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em; }
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
    if (result) { result.textContent = `Nice stop! ${formatTenths(rrCounter)} left.`; result.className = "rr-result win"; }
    clerkLine.textContent = "The tape survives. The clerk nods.";
    lateFee.textContent   = "";
    rrRound++;
    if (rrRound >= GAME_ROUNDS) setTimeout(showRRVictory, 900);
    else                        setTimeout(startRRRound,  1200);
  } else if (rrCounter > stopZoneTenths) {
    rrActive = false;
    beep("error");
    const result = document.querySelector("#rrResult");
    if (result) { result.textContent = "Too early — the tape kept rolling."; result.className = "rr-result lose"; }
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
  document.removeEventListener("keydown", onGameKey);
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
  document.removeEventListener("keydown", onGameKey);
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
   CLOCK & STORE STATUS
───────────────────────────────────────── */
function updateClock() {
  const date  = new Date();
  const hours = date.getHours();

  storeTime.textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Store status based on actual time (9am–6pm = open, otherwise after hours)
  if (hours >= 9 && hours < 18) {
    storeStatus.textContent = "Open";
  } else if (hours >= 18 && hours < 21) {
    storeStatus.textContent = "Closing soon";
  } else {
    storeStatus.textContent = "After hours";
  }
}

/* ─────────────────────────────────────────
   IDLE / LATE FEE — FIXED: charge once per idle window, not every second
───────────────────────────────────────── */
function recordUserAction() {
  lastUserAction = Date.now();
}

let lateFeeCharged = false; // prevents repeat charges within same idle window

function checkLateFee() {
  if (!currentTape) return;
  const idleSeconds = Math.floor((Date.now() - lastUserAction) / 1000);

  if (idleSeconds > 35 && !lateFeeCharged) {
    fee += 1;
    lateFee.textContent   = `LATE FEE: $${fee}.97`;
    clerkLine.textContent = "You are now emotionally overdue.";
    lateFeeCharged = true;
    beep("error");
  }

  // Reset the flag once the user takes action (checked via lastUserAction freshness)
  if (idleSeconds < 5) lateFeeCharged = false;
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
    insert: [90, 160], eject: [160, 80], play: [220, 330],
    click: [140, 140], rewind: [420, 150], fast: [180, 520], error: [70, 60]
  };
  const [start, end] = frequencies[type] || frequencies.click;
  osc.type = type === "error" ? "sawtooth" : "square";
  osc.frequency.setValueAtTime(start, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(1, end), now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.015);
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
expandBtn.addEventListener("click",             openFullscreen);

/* ─────────────────────────────────────────
   EVENT LISTENERS — FULLSCREEN VCR
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