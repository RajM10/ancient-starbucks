const gunmanKnightRivalry = [
  {
    id: "player_approaches_rivals",
    speaker: "you",
    images: {
      you: "/character/you.png",
      gunMan: "/character/gunMan.png",
      knight: "/character/knight.png",
    },
    dialogues: ["Everything alright over here?"],
  },
  {
    id: "gunman_response",
    speaker: "gunMan",
    images: {
      you: "/character/you.png",
      gunMan: "/character/gunMan.png",
      knight: "/character/knight.png",
    },
    dialogues: [
      "Gunman: (Scoffs) Peachy.",
      "Just waiting for Sir Clanks-a-Lot to finish his 'noble brew' so some of us with actual work to do can get a drink.",
      "Bounties don't wait for chivalry.",
    ],
  },
  {
    id: "knight_retort",
    speaker: "knight",
    images: {
      you: "/character/you.png",
      gunMan: "/character/gunMan.png",
      knight: "/character/knight.png",
    },
    dialogues: [
      "Knight: (Without looking at the Gunman) A proper quest requires a proper constitution, ruffian.",
      "Perhaps if your targets required more than just a loud noise to defeat, you'd understand the value of patience.",
    ],
  },
];
const gunmanFollowUp = [
  {
    id: "player_asks_gunman",
    speaker: "you",
    images: {
      you: "/character/you.png",
      gunMan: "/character/gunMan.png",
    },
    dialogues: ["So, what's your story?"],
  },
  {
    id: "gunman_dismissal",
    speaker: "gunMan",
    images: {
      you: "/character/you.png",
      gunMan: "/character/gunMan.png",
    },
    dialogues: [
      "Gunman: Don't have time for stories, pal.",
      "I've got a paying job to do. Now scram, you're distracting me.",
    ],
  },
];

function handleGunManClick(applicationState) {
  console.log(`handleGunManClick `);
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleGunManClick;
