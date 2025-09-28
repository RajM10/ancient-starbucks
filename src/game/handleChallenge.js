import startStory from "../helper/startStory";

const heidiExplorpheusQuest = [
  // --- Phase 1: The Introduction ---
  {
    id: "player_greeting",
    speaker: "you",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "This looks like a nice spot to rest.",
      "You two seem like you're on an important mission.",
    ],
  },
  {
    id: "heidi_intro",
    speaker: "heidi",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Heidi: (Looks up from her coffee) You could say that!",
      "We're Heidi and Explorpheus.",
      "We're conducting a grand survey of this entire island continent.",
    ],
  },
  {
    id: "player_question",
    speaker: "you",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "A grand survey? That sounds ambitious.",
      "What's your next heading?",
    ],
  },
  // --- Phase 2: The Discovery ---
  {
    id: "explorpheus_explains",
    speaker: "explorpheus",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Explorpheus: (Unrolls a large sea chart) Funny you should ask!",
      "We're about to head for the treacherous eastern islands.",
      "We just need to plot our course around the... wait a minute.",
    ],
  },
  {
    id: "heidi_realization",
    speaker: "heidi",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Heidi: (Leans in closer) Wait a minute is right.",
      "Explorpheus... where's the rest of the coastline?",
      "This chart... it's incomplete!",
    ],
  },
  // --- Phase 3: The Panic & The Quest ---
  {
    id: "explorpheus_panic",
    speaker: "explorpheus",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Explorpheus: Blast it all! She's right!",
      "Without a key landmark, sailing into those currents is a suicide mission.",
      "We're completely stuck!",
    ],
  },
  {
    id: "player_offers_help",
    speaker: "you",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Stuck? Maybe not.",
      "Sometimes the answer is right in front of you, but you're too close to see it.",
      "Mind if I take a look?",
    ],
  },
  {
    id: "task_accepted",
    speaker: "heidi",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Heidi: Please do!",
      "If you can figure out what we're missing from this chart, you'd be doing the whole survey a massive favor.",
    ],
  },
];

const questCompletion = [
  {
    id: "player_gives_map",
    speaker: "you",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: ["I believe this is the piece of the chart you're missing."],
  },
  {
    id: "explorpheus_thanks",
    speaker: "explorpheus",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Explorpheus: (Gasps, taking the map piece and fitting it to their chart) By my spyglass! You found it!",
      "The missing coastline... and the landmark! It fits perfectly!",
    ],
  },
  {
    id: "heidi_concludes",
    speaker: "heidi",
    images: {
      you: "/character/you.png",
      heidi: "/character/heidi.png",
      explorpheus: "/character/explorpheus.png",
    },
    dialogues: [
      "Heidi: (Rolls up the completed chart with a look of triumph) Incredible work. We were completely blind to it.",
      "The chart is complete! The way is clear.",
      "The boat is yours to command. Thank you, adventurer. Just tell us where you need to go.",
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
