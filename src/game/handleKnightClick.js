import { showDialogue } from "../helper/dialogueChanger";

const knightFollowUp = [
  {
    id: "player_asks_knight",
    speaker: "you",
    images: {
      you: "/character/you.png",
      knight: "/character/knight.png",
    },
    dialogues: ["What quest are you on?"],
  },
  {
    id: "knight_dismissal",
    speaker: "knight",
    images: {
      you: "/character/you.png",
      knight: "/character/knight.png",
    },
    dialogues: [
      "Knight: A quest of great import, far beyond the understanding of a common traveler.",
      "It begins, as all great quests do, with a perfectly brewed coffee.",
    ],
  },
];
function handleKnightClick({ state: applicationState }) {
  console.log("knight");
  if (applicationState === "initial") {
    showDialogue("knight", "initial");
  }
  if (applicationState === "progress") {
    window.startStory(knightFollowUp);
  }
  if (applicationState === "completed") {
    showDialogue("knight", "completed");
  }
}

export default handleKnightClick;
