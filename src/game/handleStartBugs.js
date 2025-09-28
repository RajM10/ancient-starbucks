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
function handleStartBugs(applicationState) {
  console.log("startBugs");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleStartBugs;
