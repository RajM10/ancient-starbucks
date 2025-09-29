import { showDialogue } from "../helper/dialogueChanger";
const baristaFollowUp = [
  {
    id: "player_asks_barista",
    speaker: "you",
    images: {
      you: "/character/you.png",
      barista: "/character/starbugs.png",
    },
    dialogues: ["Hello? Who are you?", "The coffee is amazing, by the way."],
  },
  {
    id: "barista_response",
    speaker: "barista",
    images: {
      you: "/character/you.png",
      barista: "/character/starbugs.png",
    },
    dialogues: [
      "Barista: (The hooded figure behind the counter doesn't speak.)",
      "(It simply gives a slow, deliberate nod before turning back to polishing a clean mug.)",
    ],
  },
];
function handleStarBugs({ state: applicationState }) {
  console.log("starBugs");
  console.log(applicationState);

  if (applicationState === "initial") {
    showDialogue("starbugs", "initial");
  }
  if (applicationState === "progress") {
    window.startStory(baristaFollowUp);
    console.log(applicationState);
  }
  if (applicationState === "completed") {
    showDialogue("starbugs", "completed");
  }
}

export default handleStarBugs;
