import Bush1 from "./assets/Bush1";
import Bush2 from "./assets/Bush2";
import Bush3 from "./assets/Bush3";
import Bush4 from "./assets/Bush4";
import Calm from "./assets/Calm";
import Panic from "./assets/Panic";
import StarBugs from "./assets/StarBugs";
import Boat from "./assets/Boat";
import "./style.css";
import "./containers.css";
import "./global.css";
import StoryTeller from "./StoryTeller";
import Thief from "./assets/Thief";

const html = StarBugs() + Panic() + Calm() + Boat();
function handleThiefClick() {
  console.log("Thief found");
}

const bushHtml = `<div id="bush-container">${Array.from({ length: 6 }, (_, id) => Bush1(id)).join("")}${Bush2()}${Bush3()}${Bush4()}${Thief(handleThiefClick)}</div>`;

const images = [
  { id: "finder", path: "/som/find.png" },
  { id: "char", path: "/som/char.png" },
  { id: "gunMan", path: "/som/gun.png" },
  { id: "worker", path: "/som/worker.png" },
  { id: "sipper", path: "/som/sip.png" },
  { id: "boat", path: "/som/boat.png" },
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
// Dialogue system configuration
const dialogueConfig = {
  thief: {
    text: "I have the map! Want to see the treasure location?",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#FF0066",
  },
  finder: {
    text: "I found something interesting over here!",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#00AA66",
  },
  char: {
    text: "Hello there! I'm the main character.",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#FF6600",
  },
  gunMan: {
    text: "Don't mess with me! I've got protection!",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#CC0000",
  },
  worker: {
    text: "I'm working hard to build something great!",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#0066CC",
  },
  sipper: {
    text: "This drink is absolutely delicious!",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#9900CC",
  },
  boat: {
    text: "Ready to sail the seven seas!",
    position: { top: "-150px", left: "50%" },
    bubbleColor: "#006699",
  },
};

// Create dialogue bubble HTMLjhjhkhjdsfsdset
function createDialogueBubble(id, config) {
  return `
    <div class="dialogue-bubble" id="${id}-bubble" style="
      top: ${config.position.top};
      left: ${config.position.left};
      transform: translateX(-50%);
    ">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="${config.bubbleColor}" d="M23.1,-33C32.8,-34.3,45.5,-34,56.1,-28.2C66.7,-22.4,75.2,-11.2,78,1.6C80.8,14.4,77.8,28.8,70.9,41C63.9,53.1,53,62.9,40.5,72C28,81.1,14,89.5,1.4,87.1C-11.3,84.8,-22.5,71.7,-35.3,62.7C-48.1,53.8,-62.4,49,-67,39.3C-71.7,29.5,-66.7,14.8,-68.3,-1C-70,-16.7,-78.3,-33.3,-73.2,-42.4C-68.2,-51.5,-49.8,-53,-35.4,-48.9C-21,-44.8,-10.5,-35.1,-1.9,-31.8C6.7,-28.5,13.3,-31.6,23.1,-33Z" transform="translate(100 100)" />
      </svg>
      <div class="dialogue-text">${config.text}</div>
    </div>
  `;
}

// Create global story teller instance
const storyTeller = new StoryTeller();

// Example story data structure
const exampleStory = [
  {
    id: "intro",
    speaker: "you",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "Hello there! I'm new to this place.",
      "Can you help me understand what's happening here?",
      "I see there are many interesting characters around.",
    ],
  },
  {
    id: "worker_response",
    speaker: "worker",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "Welcome to Ancient Starbucks! I'm the worker here.",
      "This is a magical place where stories come to life.",
      "Each character you see has their own story to tell.",
      "Would you like to explore and meet everyone?",
    ],
  },
  {
    id: "your_decision",
    speaker: "you",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "That sounds amazing! I'd love to explore.",
      "Where should I start my adventure?",
    ],
  },
];

// Helper function to start a story
function startStory(storyData) {
  storyTeller.init(storyData);
}

// startStory(exampleStory);
// Make storyTeller globally accessible
window.storyTeller = storyTeller;
window.startStory = startStory;

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
    document.getElementById("thief").addEventListener('click',handleThiefClick)
    setupDialogueSystem();
  }, 500); // Wait for fade out animation
}, 2000); // Show loading for 2 seconds
