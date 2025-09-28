import "./style.css";
import "./containers.css";
import "./global.css";
import story from "./story.js";
import startStory from "./helper/startStory.js";
import Bush1 from "./assets/Bush1";
import Bush2 from "./assets/Bush2";
import Bush3 from "./assets/Bush3";
import Bush4 from "./assets/Bush4";
import Calm from "./assets/Calm";
import Panic from "./assets/Panic";
import StarBugs from "./assets/StarBugs";
import Boat from "./assets/Boat";
import Thief from "./assets/Thief";
import handleThiefClick from "./game/handleThief";
import handleChallenge from "./game/handleChallenge";
import passGlobalState from "./helper/passGlobalState";
import handleCocopheusClick from "./game/handleCocopheusClick";
import handleFisherClick from "./game/handleFisherClick";
import handleKnightClick from "./game/handleKnightClick";
import handleStartBugs from "./game/handleStartBugs";
import handleFinderClick from "./game/handleFinderClick";
import handleWorkerClick from "./game/handleWorkerClick";
import handleGunManClick from "./game/handleGunManClick";
import handleMusicClick from "./game/handleMusicClick";
import handleSipperClick from "./game/handleSipperClick";
import handleFleaClick from "./game/handleFleaClick";

const html = StarBugs() + Panic() + Calm() + Boat();

const bushHtml = `<div id="info-container"></div>
<div id="bush-container">${Array.from({ length: 6 }, (_, id) => Bush1(id)).join("")}${Bush2()}${Bush3()}${Bush4()}${Thief(handleThiefClick)}</div>`;

const images = [
  { id: "finder", path: "/som/find.png" },
  { id: "gunMan", path: "/som/gun.png" },
  { id: "worker", path: "/som/worker.png" },
  { id: "sipper", path: "/som/sip.png" },
  { id: "surfer", path: "/som/surfer.png" },
  { id: "knight", path: "/som/knight.png" },
  { id: "fisher", path: "/som/fisher.png" },
  { id: "newspaper", path: "/som/newspaper.png" },
  { id: "shells", path: "/som/shells.png" },
  { id: "starfish", path: "/som/starFish.png" },
  { id: "stones", path: "/som/stones.png" },
  { id: "music", path: "/som/music-guy.png" },
  { id: "flea", path: "/som/flea.png" },
  { id: "cocopheus", path: "/som/cocopheus.png" },
];
let applicationState = "inital";
const dialogueConfig = {
  cocopheus: {
    text: "Did... did the moon just ask me for a latte?",
    position: { top: "-8.5rem", right: "-2rem" },
    bubbleColor: "#FFD700",
  },

  finder: {
    text: "I've cataloged every shell on this beach. The pattern on that placemat map, though... that's not a shell I recognize.",
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#008000",
  },
  fisher: {
    text: "The sea's been strange lately. Even the currents seem lost. A good landmark is worth more than gold right now.",
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#457B9D",
  },

  starbugs: {
    text: "...",
    position: { top: "-5rem", right: "0" },
    bubbleColor: "#6c757d",
  },
  sipper: {
    text: "Don't know who the barista is. Don't care. The coffee's the best on the island.",
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#5a189a",
  },
  gunMan: {
    text: "Some of us have bounties to collect. Move it, tin can.",
    position: { top: "-7.375rem", right: "0" },
    bubbleColor: "#a4161a",
  },
  knight: {
    text: "Patience, ruffian. A noble quest requires a noble brew. You'll get your turn.",
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#1d3557",
  },
  surfer: {
    text: "You can't just ride the waves, man. You gotta *feel* where the ocean wants to go. It's all about the landmarks.",
    position: { top: "-7.375rem", right: "0" },
    bubbleColor: "#00b4d8",
  },
  worker: {
    text: "Trying to build a retaining wall. This sand just doesn't want to stay put. Needs a solid foundation.",
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#a0522d",
  },
  coconutBonk: {
    text: "Did... did the moon just ask me for a latte?",
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#FFD700",
  },
  flea: {
    text: "*bzzzt* So many giant, fleshy ankles... so little time... *bzzzt*",
    position: { top: "-5rem", right: "0" },
    bubbleColor: "#7f7f7f",
  },
  music: {
    text: "♪ ♫ ...the tide is high but I'm holdin' on... ♫ ♪",
    position: { top: "-6rem", right: "-2rem" },
    bubbleColor: "#ffc300",
  },
  thief: {
    text: "Just... admiring the... local foliage. Nothing to see here. Move along.",
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#2d6a4f",
  },
};

// Create dialogue bubble HTML
function createDialogueBubble(id, config) {
  return `
    <div class="dialogue-bubble" id="${id}-bubble" style="
      top: ${config.position.top};
      right: ${config.position.right};
      transform: translateX(59%);
    ">
   ${config.text}
    </div>
  `;
}

// Add click event listeners for dialogue system
function setupDialogueSystem() {
  Object.keys(dialogueConfig).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        const bubble = document.getElementById(`${id}-bubble`);
        if (bubble) {
          bubble.classList.toggle("show");
        }
      });
    }
  });
}

const imgHTML = images
  .map((img) => {
    const dialogueBubble = dialogueConfig[img.id]
      ? createDialogueBubble(img.id, dialogueConfig[img.id])
      : "";
    return `
      <div class="image-container absolute" id="${img.id}-container">
        <img class="image" id="${img.id}" src="${img.path}"/>
        ${dialogueBubble}
      </div>
    `;
  })
  .join("");

// Create loading screen HTML
const loadingScreenHTML = `
  <div class="loading-screen" id="loading-screen">
    <div class="loading-logo">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M23.1,-33C32.8,-34.3,45.5,-34,56.1,-28.2C66.7,-22.4,75.2,-11.2,78,1.6C80.8,14.4,77.8,28.8,70.9,41C63.9,53.1,53,62.9,40.5,72C28,81.1,14,89.5,1.4,87.1C-11.3,84.8,-22.5,71.7,-35.3,62.7C-48.1,53.8,-62.4,49,-67,39.3C-71.7,29.5,-66.7,14.8,-68.3,-1C-70,-16.7,-78.3,-33.3,-73.2,-42.4C-68.2,-51.5,-49.8,-53,-35.4,-48.9C-21,-44.8,-10.5,-35.1,-1.9,-31.8C6.7,-28.5,13.3,-31.6,23.1,-33Z" transform="translate(100 100)" />
      </svg>
    </div>
    <div class="loading-text">Ancient Starbucks</div>
    <div class="loading-subtitle">Loading your adventure...</div>
    <div class="loading-spinner"></div>
    <div class="loading-dots">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>
`;

// Show loading screen first
document.querySelector("#app").innerHTML = loadingScreenHTML;

// Simulate loading time and then show main content
setTimeout(() => {
  // Hide loading screen
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
  // Show main content
  setTimeout(() => {
    document.querySelector("#app").innerHTML = `${html} ${imgHTML} ${bushHtml}`;
    setupDialogueSystem();
    addListeners();
  }, 500); // Wait for fade out animation
}, 2000); // Show loading for 2 seconds

function addListeners() {
  const theif = document.getElementById("thief");
  const mainChar = document.getElementById("main-character-calm");
  const finder = document.getElementById("finder");
  const worker = document.getElementById("worker");
  const surfer = document.getElementById("surfer");
  const knight = document.getElementById("knight");
  const fisher = document.getElementById("fisher");
  const cocopheus = document.getElementById("cocopheus");
  const starbugs = document.getElementById("starbugs");
  const gunMan = document.getElementById("gunMan");
  const sipper = document.getElementById("sipper");
  const music = document.getElementById("music");
  const flea = document.getElementById("flea");

  finder.addEventListener(
    "click",
    passGlobalState(handleFinderClick, applicationState),
  );
  worker.addEventListener(
    "click",
    passGlobalState(handleWorkerClick, applicationState),
  );
  surfer.addEventListener(
    "click",
    passGlobalState(handleChallenge, applicationState),
  );
  knight.addEventListener(
    "click",
    passGlobalState(handleKnightClick, applicationState),
  );
  fisher.addEventListener(
    "click",
    passGlobalState(handleFisherClick, applicationState),
  );
  cocopheus.addEventListener(
    "click",
    passGlobalState(handleCocopheusClick, applicationState),
  );
  starbugs.addEventListener(
    "click",
    passGlobalState(handleStartBugs, applicationState),
  );

  theif.addEventListener(
    "click",
    passGlobalState(handleThiefClick, applicationState),
  );

  mainChar.addEventListener(
    "click",
    passGlobalState(handleChallenge, applicationState),
  );
  gunMan.addEventListener(
    "click",
    passGlobalState(handleGunManClick, applicationState),
  );
  sipper.addEventListener(
    "click",
    passGlobalState(handleSipperClick, applicationState),
  );
  music.addEventListener(
    "click",
    passGlobalState(handleMusicClick, applicationState),
  );
  flea.addEventListener(
    "click",
    passGlobalState(handleFleaClick, applicationState),
  );
}
