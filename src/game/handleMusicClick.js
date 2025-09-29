import { showDialogue } from "../helper/dialogueChanger";
import { music } from "../helper/handleMusic";

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
  const musicContainer = document.getElementById("music-container");
  const isUp = musicContainer.classList.toggle("active");

  if (isUp) {
    music.volume = 0.8;
  } else {
    music.volume = 0.1;
  }

  if (applicationState === "initial") {
    showDialogue("music", "initial");
  }
  if (applicationState === "progress") {
    window.startStory(musicFollowUp);
  }
  if (applicationState === "completed") {
    music.src = "/music/success.mp3";
    music.play();
    music.volume = 0.4;
    showDialogue("music", "completed");
  }
}

export default handleMusicClick;
