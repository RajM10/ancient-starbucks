import { showDialogue } from "../helper/dialogueChanger";

const fleaFollowUp = [
  {
    id: "player_asks_flea",
    speaker: "you",
    images: {
      you: "/character/you.png",
      flea: "/character/flea.png",
    },
    dialogues: ["What's the view like from down there?"],
  },
  {
    id: "flea_response",
    speaker: "flea",
    images: {
      you: "/character/you.png",
      flea: "/character/flea.png",
    },
    dialogues: [
      "Flea: Sandy. And hot.",
      "You big folk have no idea how mountainous a single grain of sand can be.",
    ],
  },
];
function handleFleaClick({ state: applicationState }) {
  console.log(`handleFleaClick `);
  if (applicationState === "initial") {
    showDialogue("flea", "initial");
  }
  if (applicationState === "progress") {
    window.startStory(fleaFollowUp);
  }
  if (applicationState === "completed") {
    showDialogue("flea", "completed");
  }
}

export default handleFleaClick;
