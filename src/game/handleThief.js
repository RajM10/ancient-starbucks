import showToast from "../helper/showToast";
import { showDialogue } from "../helper/dialogueChanger";
import { music } from "../helper/handleMusic";
const thiefFollowUp = [
  {
    id: "player_confronts_thief",
    speaker: "you",
    images: {
      you: "/character/you.png",
      thief: "/character/thief.png",
    },
    dialogues: [
      "That placemat... it's a piece of a map.",
      "You wouldn't happen to have seen any other interesting scraps of paper, would you?",
    ],
  },
  {
    id: "thief_response",
    speaker: "thief",
    images: {
      you: "/character/you.png",
      thief: "/character/thief.png",
    },
    dialogues: [
      "Thief: (A sly grin spreads across their face) Heh. Funny you should ask.",
      "I saw those two big adventurers using a priceless piece of cartography as a coaster. A true crime!",
      "I thought it was a treasure map, so I... liberated the other half for safekeeping.",
    ],
  },
  {
    id: "thief_gives_map",
    speaker: "thief",
    images: {
      you: "/character/you.png",
      thief: "/character/thief.png",
    },
    dialogues: [
      "Turns out it's not a treasure map at all. Just some boring coastline.",
      "Seeing as you're the first person clever enough to notice, you can have it.",
      "It's probably more useful to you anyway.",
    ],
  },
];
export default function handleThiefClick(applicationState) {
  console.log("Thief found");
  const calm = document.getElementById("heidiAndExplorpheusCalm");
  const panic = document.getElementById("heidiAndExplorpheusPanic");
  const { state } = applicationState;
  if (state === "initial") {
    showDialogue("thief", "initial");
  }
  if (state === "progress") {
    window.startStory(thiefFollowUp);
    applicationState.state = "completed";
  }
  if (state === "completed") {
    showDialogue("thief", "completed");
    calm.style.opacity = 1;
    calm.style.display = "block";
    panic.style.opacity = 0;
    panic.style.display = "none";
  }
}
