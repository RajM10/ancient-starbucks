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
function handleKnightClick(applicationState) {
  console.log("knight");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleKnightClick;
