const musicFollowUp = [
  {
    id: "player_asks_music",
    speaker: "you",
    images: {
      you: "/character/you.png",
      music: "/character/music.png",
    },
    dialogues: ["What's that tune you're playing?"],
  },
  {
    id: "music_response",
    speaker: "music",
    images: {
      you: "/character/you.png",
      music: "/character/music.png",
    },
    dialogues: [
      "Music: (Smiles faintly) I'm not playing it. I'm listening.",
      "This place... the heroes planning, the waves, the arguments...",
      "It all has a sound. A rhythm.",
      "I'm just trying to tune the air so you can hear it, too.",
    ],
  },
];

function handleMusicClick({ state: applicationState }) {
  console.log(`handleMusicClick `);
  if (applicationState === "inital") {
  }
  if (applicationState === "progress") {
    window.startStory(musicFollowUp);

  }
  if (applicationState === "completed") {
  }
}

export default handleMusicClick;
