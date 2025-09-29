import "./style.css";
import "./containers.css";
import "./global.css";
import "./responsive.css";
import Bush1 from "./assets/Bush1";
import Bush2 from "./assets/Bush2";
import Bush3 from "./assets/Bush3";
import Bush4 from "./assets/Bush4";
import Calm from "./assets/Calm";
import Panic from "./assets/Panic";
import Boat from "./assets/Boat";
import Thief from "./assets/Thief";
import handleThiefClick from "./game/handleThief";
import handleChallenge from "./game/handleChallenge";
import passGlobalState from "./helper/passGlobalState";
import handleCocopheusClick from "./game/handleCocopheusClick";
import handleFisherClick from "./game/handleFisherClick";
import handleKnightClick from "./game/handleKnightClick";
import handleStarBugs from "./game/handleStarBugs";
import handleFinderClick from "./game/handleFinderClick";
import handleWorkerClick from "./game/handleWorkerClick";
import handleGunManClick from "./game/handleGunManClick";
import handleMusicClick from "./game/handleMusicClick";
import handleSipperClick from "./game/handleSipperClick";
import handleFleaClick from "./game/handleFleaClick";
import StoryTeller from "./StoryTeller";
import handleStarfishClick from "./game/handleStarfishClick";
import handleShellsClick from "./game/handleShellsClick";
import handleBoatClick from "./game/handleBoatClick";
import handleStonesClick from "./game/handleStonesClick";
import handleNewspaperClick from "./game/handleNewspaperClick";
import handleSurferClick from "./game/handleSurferClick";
import handleMusic from "./helper/handleMusic";

const html = Panic() + Calm() + Boat();
const storyTeller = new StoryTeller();
window.storyTeller = storyTeller;
export function startStory(storyData) {
  storyTeller.init(storyData);
}

window.startStory = startStory;

const bushHtml = `<div id="info-container"></div>
<div id="bush-container">${Array.from({ length: 6 }, (_, id) => Bush1(id)).join("")}
${Bush2()}
${Bush3()}
${Bush4()}
<div class="image-container absolute" id="thief-container">
        ${Thief()}
</div>

</div>`;

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
  { id: "starbugs", path: "/image/StarBuckup.svg" },
  // { id: "thief", path: "/image/Thief.svg" },
];
let applicationState = { state: "initial" };

const imgHTML = images
  .map((img) => {
    return `
      <div class="image-container absolute" id="${img.id}-container">
        <img class="image" id="${img.id}" src="${img.path}"/>
      </div>
    `;
  })
  .join("");

// Create loading screen HTML
const loadingScreenHTML = `
  <div class="loading-screen" id="loading-screen">
    <div class="loading-text">Ancient Starbucks</div>
    <div class="loading-subtitle">Loading your adventure...</div>
    <div class="loading-spinner"></div>
    <div class="loading-dots">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
    <div class="loading-waves">
      <span></span><span></span><span></span>
    </div>
  </div>
`;

// Show loading screen first
document.querySelector("#app").innerHTML = loadingScreenHTML;

// Preload assets, then show main content
function preloadImages(paths) {
  return Promise.all(
    paths.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(src); // resolve even on error to avoid blocking
          img.src = src;
        })
    )
  );
}

const assetsToLoad = Array.from(
  new Set([
    ...images.map((i) => i.path),
    "/StarBuck.png",
    "/image/ChatBubble.svg",
  ])
);

preloadImages(assetsToLoad).then(() => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
  setTimeout(() => {
    document.querySelector("#app").innerHTML = `${html} ${imgHTML} ${bushHtml}`;
    handleMusic();
    addListeners();
  }, 500);
});

function addListeners() {
  const theif = document.getElementById("thief");
  const mainChar = document.getElementById("heidiAndExplorpheusCalm");
  const mainCharPanic = document.getElementById("heidiAndExplorpheusPanic");
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
  const boat = document.getElementById("boat");
  const shells = document.getElementById("shells");
  const starfish = document.getElementById("starfish");
  const stones = document.getElementById("stones");
  const newspaper = document.getElementById("newspaper");
  mainCharPanic.addEventListener(
    "click",
    passGlobalState(handleChallenge, applicationState)
  );
  finder.addEventListener(
    "click",
    passGlobalState(handleFinderClick, applicationState)
  );
  worker.addEventListener(
    "click",
    passGlobalState(handleWorkerClick, applicationState)
  );
  surfer.addEventListener(
    "click",
    passGlobalState(handleSurferClick, applicationState)
  );
  knight.addEventListener(
    "click",
    passGlobalState(handleKnightClick, applicationState)
  );
  fisher.addEventListener(
    "click",
    passGlobalState(handleFisherClick, applicationState)
  );
  cocopheus.addEventListener(
    "click",
    passGlobalState(handleCocopheusClick, applicationState)
  );
  starbugs.addEventListener(
    "click",
    passGlobalState(handleStarBugs, applicationState)
  );

  theif.addEventListener(
    "click",
    passGlobalState(handleThiefClick, applicationState)
  );

  mainChar.addEventListener(
    "click",
    passGlobalState(handleChallenge, applicationState)
  );
  gunMan.addEventListener(
    "click",
    passGlobalState(handleGunManClick, applicationState)
  );
  sipper.addEventListener(
    "click",
    passGlobalState(handleSipperClick, applicationState)
  );
  music.addEventListener(
    "click",
    passGlobalState(handleMusicClick, applicationState)
  );
  flea.addEventListener(
    "click",
    passGlobalState(handleFleaClick, applicationState)
  );
  starfish.addEventListener(
    "click",
    passGlobalState(handleStarfishClick, applicationState)
  );
  shells.addEventListener(
    "click",
    passGlobalState(handleShellsClick, applicationState)
  );
  boat.addEventListener(
    "click",
    passGlobalState(handleBoatClick, applicationState)
  );
  stones.addEventListener(
    "click",
    passGlobalState(handleStonesClick, applicationState)
  );
  newspaper.addEventListener(
    "click",
    passGlobalState(handleNewspaperClick, applicationState)
  );
}
