const sipperFollowUp = [
  {
    id: "player_asks_sipper",
    speaker: "you",
    images: {
      you: "/character/you.png",
      sipper: "/character/sipper.png",
    },
    dialogues: ["Enjoying the coffee?"],
  },
  {
    id: "sipper_response",
    speaker: "sipper",
    images: {
      you: "/character/you.png",
      sipper: "/character/sipper.png",
    },
    dialogues: [
      "Sipper: (Nods slowly) The best on the island.",
      "They say the barista uses water from the Shy River itself.",
      "Adds a certain... quiet flavor.",
    ],
  },
];
function handleSipperClick(applicationState) {
  console.log(`handleSipperClick `);
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleSipperClick;
