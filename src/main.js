import "./style.css";
import "./containers.css";
import "./global.css";
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
import StoryTeller from "./StoryTeller";
import { initialDialogueConfig } from "./assets/dialogue";

const html = StarBugs() + Panic() + Calm() + Boat();
const storyTeller = new StoryTeller();
window.storyTeller = storyTeller;
export function startStory(storyData) {
  storyTeller.init(storyData);
}

window.startStory = startStory;

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
let applicationState = { state: "inital" };


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


const imgHTML = images
  .map((img) => {
    const dialogueBubble = initialDialogueConfig[img.id]
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
