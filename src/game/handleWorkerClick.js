const workerFollowUp = [
  {
    id: "player_asks_worker",
    speaker: "you",
    images: {
      you: "/character/you.png",
      worker: "/character/worker.png",
    },
    dialogues: ["Looks like hard work."],
  },
  {
    id: "worker_response",
    speaker: "worker",
    images: {
      you: "/character/you.png",
      worker: "/character/worker.png",
    },
    dialogues: [
      "Worker: (Wipes his brow) It's good work.",
      "Someone's gotta make sure paradise stays paradise, right?",
      "Can't have heroes tripping over misplaced seashells.",
    ],
  },
];
function handleWorkerClick(applicationState) {
  console.log("worker");
  if (applicationState === "inital") {
    startStory(exampleStory);
    applicationState = "progress";
  }
  if (applicationState === "progress") {
  }
  if (applicationState === "completed") {
  }
}

export default handleWorkerClick;
