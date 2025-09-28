import startStory from "../helper/startStory";

const exampleStory = [
  {
    id: "intro",
    speaker: "you",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "Hello there! I'm new to this place.",
      "Can you help me understand what's happening here?",
      "I see there are many interesting characters around.",
    ],
  },
  {
    id: "worker_response",
    speaker: "worker",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "Welcome to Ancient Starbucks! I'm the worker here.",
      "This is a magical place where stories come to life.",
      "Each character you see has their own story to tell.",
      "Would you like to explore and meet everyone?",
    ],
  },
  {
    id: "your_decision",
    speaker: "you",
    images: {
      you: "/som/char.png",
      other: "/som/worker.png",
    },
    dialogues: [
      "That sounds amazing! I'd love to explore.",
      "Where should I start my adventure?",
    ],
  },
];
export default function handleChallenge(applicationState) {
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
  console.log(applicationState);
}
