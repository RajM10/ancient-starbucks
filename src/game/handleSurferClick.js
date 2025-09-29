import { showDialogue } from "../helper/dialogueChanger";
const surferFollowUp = [
  {
    id: "player_asks_surfer",
    speaker: "you",
    images: {
      you: "/character/you.png",
      surfer: "/character/surfer.png",
    },
    dialogues: ["How's the surf?"],
  },
  {
    id: "surfer_response",
    speaker: "surfer",
    images: {
      you: "/character/you.png",
      surfer: "/character/surfer.png",
    },
    dialogues: [
      "Surfer: The ocean's quiet today, friend.",
      "You can't force a wave to appear.",
      "You just have to be ready when it decides to show up.",
    ],
  },
];
function handleSurferClick({ state: applicationState }) {
  console.log("surfer");
  if (applicationState === "initial") {
    showDialogue("surfer", "initial");
  }
  if (applicationState === "progress") {
    window.startStory(surferFollowUp);
  }
  if (applicationState === "completed") {
    showDialogue("surfer", "completed");
  }
}

export default handleSurferClick;
