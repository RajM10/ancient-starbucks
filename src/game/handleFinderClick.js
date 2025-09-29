import { showDialogue } from "../helper/dialogueChanger";

const finderFollowUp = [
  {
    id: "player_asks_finder",
    speaker: "you",
    images: {
      you: "/character/you.png",
      finder: "/character/finder.png",
    },
    dialogues: ["Find anything else interesting?"],
  },
  {
    id: "finder_response",
    speaker: "finder",
    images: {
      you: "/character/you.png",
      finder: "/character/finder.png",
    },
    dialogues: [
      "Finder: Always!",
      "This whole island is full of little secrets if you know how to look.",
      "Most folks just don't pay enough attention to the little details.",
    ],
  },
];
function handleFinderClick({ state: applicationState }) {
  if (applicationState === "initial") {
    showDialogue("finder", "initial");
  } else if (applicationState === "progress") {
    window.startStory(finderFollowUp);
  } else if (applicationState === "completed") {
    showDialogue("finder", "completed");
  }
}

export default handleFinderClick;
