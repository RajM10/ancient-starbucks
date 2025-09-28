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
function handleSurferClick(applicationState) {
  console.log("surfer");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleSurferClick;
