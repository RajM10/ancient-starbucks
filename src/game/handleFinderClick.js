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
  console.log("finder");
  if (applicationState === "progress") {
    window.startStory(finderFollowUp);
  }
  if (applicationState === "completed") {
  }
}

export default handleFinderClick;
