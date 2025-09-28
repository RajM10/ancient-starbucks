const fisherClue = [
  {
    id: "player_asks_fisher",
    speaker: "you",
    images: {
      you: "/character/you.png",
      fisher: "/character/fisher.png",
    },
    dialogues: ["Catching anything?"],
  },
  {
    id: "fisher_response",
    speaker: "fisher",
    images: {
      you: "/character/you.png",
      fisher: "/character/fisher.png",
    },
    dialogues: [
      "Fisher: (Doesn't look away from his line) Nope.",
      "Too much noise. Too much... ambition.",
      "Everyone's always staring out at the horizon, planning grand voyages.",
      "They forget the best catch is sometimes hidden in the shallow water, right under your feet.",
    ],
  },
  {
    id: "player_thanks",
    speaker: "you",
    images: {
      you: "/character/you.png",
      fisher: "/character/fisher.png",
    },
    dialogues: ["Hidden in the shallow water... Good to know."],
  },
];
function handleFisherClick(applicationState) {
  console.log("fisher");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleFisherClick;
