const coconutBonkFollowUp = [
  {
    id: "player_checks_on_bonk",
    speaker: "you",
    images: {
      you: "/character/you.png",
      coconutBonk: "/character/coconutBonk.png",
    },
    dialogues: ["Are you okay? That was a nasty knock from that coconut."],
  },
  {
    id: "bonk_response",
    speaker: "coconutBonk",
    images: {
      you: "/character/you.png",
      coconutBonk: "/character/coconutBonk.png",
    },
    dialogues: [
      "Coconut? I thought the sky was finally delivering my mail.",
      "It sent a very important, hairy letter.",
    ],
  },
  {
    id: "player_asks_letter",
    speaker: "you",
    images: {
      you: "/character/you.png",
      coconutBonk: "/character/coconutBonk.png",
    },
    dialogues: ["A letter? What did it say?"],
  },
  {
    id: "bonk_reveals",
    speaker: "coconutBonk",
    images: {
      you: "/character/you.png",
      coconutBonk: "/character/coconutBonk.png",
    },
    dialogues: [
      "It said... 'Drink more coffee.'",
      "Very wise, the sky is. Very wise.",
    ],
  },
];

function handleCocopheusClick(applicationState) {
  console.log("cocopheus");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleCocopheusClick;
