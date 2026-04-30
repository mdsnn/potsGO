const tapes = [
  {
    id: "about",
    title: "About Me",
    tag: "A bio trailer",
    color: "#e93434",
    art: "linear-gradient(135deg, #f2d447, #ff7b54 45%, #312250)",
    tilt: "-1.8deg",
    runtime: "00:47",
    scenes: [
      {
        heading: "About Me",
        body: "A quick trailer for the person behind the counter: curious builder, frontend tinkerer, and maker of interactive web oddities.",
        duration: 4200
      },
      {
        heading: "The Setup",
        body: "I like interfaces with a pulse: tools that feel useful first, then reward people with little moments of delight.",
        duration: 4600
      },
      {
        heading: "Coming Soon",
        body: "Replace this copy with your actual bio beats: what you build, what you care about, and the kind of projects people should hire you for.",
        duration: 5000
      }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    tag: "Live demo shelf",
    color: "#1154a4",
    art: "linear-gradient(135deg, #65e8ff, #1154a4 50%, #10131d)",
    tilt: "1.1deg",
    runtime: "01:23",
    scenes: [
      {
        heading: "Projects",
        list: ["Interactive portfolio systems", "Tiny games and motion experiments", "Design-forward tools that feel tactile"],
        duration: 4400
      },
      {
        heading: "Highlight Reel",
        body: "Fast-forward jumps through project cards, live embeds, or mini playable scenes once your real work is wired in.",
        duration: 4600
      },
      {
        heading: "Demo Slot",
        body: "This scene can become an embedded prototype, a case-study clip, or a tiny playable sample from a featured project.",
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
    scenes: [
      {
        heading: "Contact",
        body: "Drop your email, socials, calendar link, or a fake receipt printer form here. No backend needed for the first version.",
        duration: 4200
      },
      {
        heading: "Receipt",
        body: "Rental fee: one good conversation. Late fee: answering emails three weeks later.",
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
    scenes: [
      {
        heading: "After Hours",
        body: "Late-night notes, essays, build logs, and the strange little ideas that do not fit anywhere else.",
        duration: 4400
      },
      {
        heading: "Staff Picks",
        list: ["What made the build weird", "Favorite UI details", "Stuff learned while making it"],
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
    scenes: [
      {
        heading: "Resume",
        list: ["Experience goes here", "Selected skills go here", "Download link can become a big tracking-warp button"],
        duration: 4400
      },
      {
        heading: "Skills",
        list: ["Frontend architecture", "Motion and interaction design", "Playable web experiences"],
        duration: 4600
      },
      {
        heading: "Now Hiring?",
        body: "Turn this scene into a resume download, client pitch, or availability note with a very dramatic tape wobble.",
        duration: 5000
      }
    ]
  }
];

const shelf = document.querySelector("#tapeShelf");
const template = document.querySelector("#tapeTemplate");
const screen = document.querySelector("#screen");
const screenContent = document.querySelector("#screenContent");
const vcrSlot = document.querySelector("#vcrSlot");
const slotLabel = document.querySelector("#slotLabel");
const vcrDisplay = document.querySelector("#vcrDisplay");
const clerkLine = document.querySelector("#clerkLine");
const lateFee = document.querySelector("#lateFee");
const storeTime = document.querySelector("#storeTime");
const ambienceToggle = document.querySelector("#ambienceToggle");

const controls = {
  play: document.querySelector("#playBtn"),
  pause: document.querySelector("#pauseBtn"),
  rewind: document.querySelector("#rewindBtn"),
  fast: document.querySelector("#ffBtn"),
  eject: document.querySelector("#ejectBtn")
};

let currentTape = null;
let currentScene = 0;
let mode = "empty";
let lastAction = Date.now();
let fee = 0;
let audioContext = null;
let ambienceNode = null;
let ambienceGain = null;
let gameTimer = null;
let gameValue = 0;
let gameDirection = 1;
let playbackTimer = null;

function renderShelf() {
  tapes.forEach((tape) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = tape.id;
    node.style.setProperty("--tape-color", tape.color);
    node.style.setProperty("--cover-art", tape.art);
    node.style.setProperty("--tilt", tape.tilt);
    node.querySelector("strong").textContent = tape.title;
    node.querySelector("small").textContent = tape.tag;
    node.addEventListener("click", () => rentTape(tape.id));
    shelf.appendChild(node);
  });
}

function rentTape(id) {
  stopGame();
  stopPlayback();
  currentTape = tapes.find((tape) => tape.id === id);
  currentScene = 0;
  mode = "loaded";
  lastAction = Date.now();
  document.querySelectorAll(".tape").forEach((node) => {
    node.classList.toggle("rented", node.dataset.id === id);
  });
  vcrSlot.classList.remove("loaded");
  requestAnimationFrame(() => vcrSlot.classList.add("loaded"));
  slotLabel.textContent = currentTape.title.toUpperCase();
  vcrDisplay.textContent = currentTape.runtime;
  clerkLine.textContent = `"${currentTape.title}" is due back by midnight.`;
  screen.className = "screen paused";
  renderScene("loaded");
  beep("insert");
}

function renderScene(state = mode) {
  if (!currentTape) {
    screenContent.innerHTML = `<p class="standby">NO TAPE</p><p class="standby-small">Browse the shelf and rent something weird.</p>`;
    return;
  }

  if (currentTape.game && state === "playing") {
    renderGame();
    return;
  }

  const scene = currentTape.scenes[currentScene] || currentTape.scenes[0];
  const list = scene.list ? `<ul>${scene.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
  const body = scene.body ? `<p>${scene.body}</p>` : "";
  const label = state === "loaded" ? "Press play on the VCR." : state.toUpperCase();
  updateTransportDisplay(state);
  screenContent.innerHTML = `
    <p class="kicker">${label}</p>
    <h2>${scene.heading}</h2>
    ${body}
    ${list}
    <p class="scene-counter">${currentScene + 1} / ${currentTape.scenes.length}</p>
  `;
}

function setMode(nextMode) {
  if (!currentTape && nextMode !== "empty") {
    clerkLine.textContent = "Nice try. The VCR cannot play vibes alone.";
    beep("error");
    return;
  }

  mode = nextMode;
  lastAction = Date.now();
  screen.classList.remove("playing", "paused", "rewinding", "fast");
  if (nextMode !== "playing") {
    stopGame();
    stopPlayback();
  }

  if (nextMode === "playing") {
    screen.classList.add("playing");
    clerkLine.textContent = `Now playing: ${currentTape.title}.`;
    renderScene("playing");
    startPlayback();
    beep("play");
    return;
  }

  if (nextMode === "paused") {
    screen.classList.add("paused");
    clerkLine.textContent = "Paused. You can almost hear the tape stretching.";
    renderScene("paused");
    beep("click");
    return;
  }

  if (nextMode === "rewinding") {
    screen.classList.add("rewinding");
    currentScene = Math.max(0, currentScene - 1);
    clerkLine.textContent = "Be kind, rewind.";
    renderScene("rewinding");
    beep("rewind");
    return;
  }

  if (nextMode === "fast") {
    screen.classList.add("fast");
    currentScene = Math.min(currentTape.scenes.length - 1, currentScene + 1);
    clerkLine.textContent = "Skipping to the good parts.";
    renderScene("fast-forward");
    beep("fast");
  }
}

function ejectTape() {
  stopGame();
  stopPlayback();
  currentTape = null;
  currentScene = 0;
  mode = "empty";
  document.querySelectorAll(".tape").forEach((node) => node.classList.remove("rented"));
  vcrSlot.classList.remove("loaded");
  slotLabel.textContent = "INSERT TAPE";
  vcrDisplay.textContent = "--:--";
  clerkLine.textContent = "Tape returned. Shelf's open.";
  screen.className = "screen paused";
  renderScene();
  beep("eject");
}

function startPlayback() {
  stopPlayback();
  if (!currentTape || currentTape.game) {
    return;
  }

  const scene = currentTape.scenes[currentScene] || {};
  playbackTimer = window.setTimeout(() => {
    if (!currentTape || mode !== "playing") {
      return;
    }

    if (currentScene < currentTape.scenes.length - 1) {
      currentScene += 1;
      renderScene("playing");
      beep("click");
      startPlayback();
      return;
    }

    mode = "paused";
    screen.classList.remove("playing");
    screen.classList.add("paused");
    clerkLine.textContent = `${currentTape.title} reached the end of the tape.`;
    screenContent.innerHTML = `
      <p class="kicker">END OF TAPE</p>
      <h2>${currentTape.title}</h2>
      <p>Rewind to watch it again, fast-forward to jump around, or eject and rent another tape.</p>
    `;
    vcrDisplay.textContent = "END";
    beep("eject");
  }, scene.duration || 4500);
}

function stopPlayback() {
  if (playbackTimer) {
    window.clearTimeout(playbackTimer);
    playbackTimer = null;
  }
}

function updateTransportDisplay(state) {
  if (!currentTape) {
    vcrDisplay.textContent = "--:--";
    return;
  }

  if (state === "loaded") {
    vcrDisplay.textContent = currentTape.runtime;
    return;
  }

  const sceneNumber = String(currentScene + 1).padStart(2, "0");
  const sceneTotal = String(currentTape.scenes.length).padStart(2, "0");
  const labels = {
    playing: "PLAY",
    paused: "PAUS",
    rewinding: "REW",
    "fast-forward": "FF"
  };
  vcrDisplay.textContent = `${labels[state] || "PLAY"} ${sceneNumber}/${sceneTotal}`;
}

function renderGame() {
  stopGame();
  updateTransportDisplay("playing");
  gameValue = 8;
  gameDirection = 1;
  screenContent.innerHTML = `
    <div class="mini-game">
      <p class="kicker">BONUS GAME</p>
      <h2>Late Fee Panic</h2>
      <p>Return the tape when the meter is in the sweet spot.</p>
      <div class="meter" aria-label="Return timing meter"><span id="gameMeter"></span></div>
      <div class="action-row">
        <button id="returnBtn" type="button">Return Tape</button>
        <button id="resetGameBtn" type="button">Reset</button>
      </div>
      <p id="gameResult">The clerk is looking away. Move.</p>
    </div>
  `;
  const meter = document.querySelector("#gameMeter");
  const result = document.querySelector("#gameResult");
  gameTimer = window.setInterval(() => {
    gameValue += gameDirection * 4;
    if (gameValue >= 100 || gameValue <= 0) {
      gameDirection *= -1;
    }
    meter.style.setProperty("--meter", `${gameValue}%`);
  }, 80);

  document.querySelector("#returnBtn").addEventListener("click", () => {
    const win = gameValue >= 42 && gameValue <= 62;
    result.textContent = win ? "Perfect return. The late fee has vanished." : "Too slow. The clerk stamps your receipt with menace.";
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

function updateClock() {
  const date = new Date();
  storeTime.textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function checkLateFee() {
  const idleSeconds = Math.floor((Date.now() - lastAction) / 1000);
  if (currentTape && idleSeconds > 35) {
    fee += 1;
    lateFee.textContent = `LATE FEE: $${fee}.97`;
    clerkLine.textContent = "You are now emotionally overdue.";
    lastAction = Date.now();
    beep("error");
  }
}

function getAudio() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

function beep(type) {
  const ctx = getAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const now = ctx.currentTime;
  const frequencies = {
    insert: [90, 160],
    eject: [160, 80],
    play: [220, 330],
    click: [140, 140],
    rewind: [420, 150],
    fast: [180, 520],
    error: [70, 60]
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
    return;
  }

  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.22;
  }

  ambienceNode = ctx.createBufferSource();
  ambienceGain = ctx.createGain();
  ambienceGain.gain.value = 0.035;
  ambienceNode.buffer = buffer;
  ambienceNode.loop = true;
  ambienceNode.connect(ambienceGain).connect(ctx.destination);
  ambienceNode.start();
  ambienceToggle.classList.add("active");
}

controls.play.addEventListener("click", () => setMode("playing"));
controls.pause.addEventListener("click", () => setMode("paused"));
controls.rewind.addEventListener("click", () => setMode("rewinding"));
controls.fast.addEventListener("click", () => setMode("fast"));
controls.eject.addEventListener("click", ejectTape);
ambienceToggle.addEventListener("click", toggleAmbience);

renderShelf();
updateClock();
window.setInterval(updateClock, 1000);
window.setInterval(checkLateFee, 1000);
