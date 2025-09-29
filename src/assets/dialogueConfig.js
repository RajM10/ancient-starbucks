export const dialogueSystem = {
  // --- MAIN QUEST GIVERS ---
  heidiAndExplorpheusCalm: {
    text: {
      initial: [
        "Heidi: (Muttering to the map) The shoals should be here, but the coastline doesn't match...",
        "Explorpheus: Patience, my dear. We're surveyors, not magicians. Let's get another coffee.",
        "Heidi: This isn't a coffee break, Explorpheus, it's a navigational crisis!",
        "Explorpheus: Every crisis is better with caffeine. That's the first rule of adventuring.",
      ],
      inProgress: [
        "Heidi: Blast it all! Without a key landmark, sailing into those currents is a suicide mission.",
        "Explorpheus: She's right. We're completely stuck here until we solve this chart.",
        "Heidi: If you see anything, anything at all that looks like a missing map piece, let us know.",
        "Explorpheus: Yes, we'd be eternally grateful! Now, about that coffee...",
      ],
      completed: [
        "Heidi: (Beaming, holding the complete map) The way is clear! I can't thank you enough.",
        "Explorpheus: A true hero! Your next coffee is on us, whenever we figure out who the barista is.",
        "Heidi: The boat is yours to command. Just say the word!",
        "Explorpheus: To adventure!",
      ],
    },
    position: { top: "-8.5rem", right: "-2rem" },
    bubbleColor: "#FFD700",
  },
  heidiAndExplorpheusPanic: {
    text: {
      initial: [
        "Heidi: (Muttering to the map) The shoals should be here, but the coastline doesn't match...",
        "Explorpheus: Patience, my dear. We're surveyors, not magicians. Let's get another coffee.",
        "Heidi: This isn't a coffee break, Explorpheus, it's a navigational crisis!",
        "Explorpheus: Every crisis is better with caffeine. That's the first rule of adventuring.",
      ],
      inProgress: [
        "Heidi: Blast it all! Without a key landmark, sailing into those currents is a suicide mission.",
        "Explorpheus: She's right. We're completely stuck here until we solve this chart.",
        "Heidi: If you see anything, anything at all that looks like a missing map piece, let us know.",
        "Explorpheus: Yes, we'd be eternally grateful! Now, about that coffee...",
      ],
      completed: [
        "Heidi: (Beaming, holding the complete map) The way is clear! I can't thank you enough.",
        "Explorpheus: A true hero! Your next coffee is on us, whenever we figure out who the barista is.",
        "Heidi: The boat is yours to command. Just say the word!",
        "Explorpheus: To adventure!",
      ],
    },
    position: { top: "-8.5rem", right: "-2rem" },
    bubbleColor: "#FFD700",
  },

  // --- CLUE GIVERS ---
  finder: {
    text: {
      initial: [
        "Found a sand dollar, a conch shell, and a... suspiciously well-made button.",
        "This beach is a treasure trove if you've got a good eye for details.",
        "You'd be surprised what people leave behind.",
        "Always pays to look closely at what's right in front of you.",
      ],
      inProgress: [
        "I've cataloged every shell on this beach. They all make sense.",
        "But the pattern on that placemat map the heroes are using...",
        "...that's not a coastline I recognize. It's something else.",
        "Looks almost like a... coffee stain? Peculiar.",
      ],
      completed: [
        "Ha! I knew it! The answer was right on the table.",
        "See? Details! That's what separates the finders from the... not-finders.",
        "Glad those two can finally get on their way.",
        "Now, about this button...",
      ],
    },
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#008000",
  },
  fisher: {
    text: {
      initial: [
        "Nope. Not a nibble. Not a bite.",
        "The sea's in a strange mood today. Holding its secrets close.",
        "Patience is the only bait that works on a day like this.",
        "Just gotta wait for the ocean to decide what it wants to show you.",
      ],
      inProgress: [
        "Those two adventurers? Heard 'em complaining from here. Lost their way.",
        "They're always staring out at the horizon, looking for a sign.",
        "Amateurs. They forget the best catch is sometimes hidden in the shallow water, right under your feet.",
        "Stop looking for the mountain, and you might just find the pebble that shows you the path.",
      ],
      completed: [
        "Hmph. Looks like the currents have calmed down.",
        "Someone must have finally figured out which way the water's flowing.",
        "Funny how that works. All you had to do was look down.",
        "Now if only a fish would figure that out.",
      ],
    },
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#457B9D",
  },

  // --- KEY PUZZLE CHARACTER ---
  thief: {
    text: {
      initial: [
        "Just... admiring the... local foliage. Yes.",
        "Nothing to see here. Definitely not hiding anything.",
        "Why are you looking at me like that?",
        "Move along.",
      ],
      inProgress: [
        "Thief: (A sly grin spreads across their face) Heh. Funny you should ask about maps.",
        "I saw those two adventurers using a priceless piece of cartography as a coaster. A true crime!",
        "I thought it was a treasure map, so I... liberated the other half for safekeeping.",
        "Turns out it's not a treasure map at all. Just some boring coastline. Here, you can have it.",
      ],
      completed: [
        "Glad I could be of service. Ahem.",
        "It's amazing what people leave just lying around on tables.",
        "Now, if you'll excuse me, I think I saw a knight with a very heavy-looking coin purse...",
        "Purely for observation, of course.",
      ],
    },
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#2d6a4f",
  },

  // --- WORLD BUILDERS ---
  starbugs: {
    text: {
      initial: ["..."],
      inProgress: ["..."],
      completed: ["..."],
    },
    position: { top: "1rem", right: "10rem" },
    bubbleColor: "#6c757d",
  },
  sipper: {
    text: {
      initial: [
        "Ahhh... that's the stuff.",
        "Don't know who the barista is. Don't care.",
        "This coffee tastes like a memory you'd forgotten you had.",
        "Best on the island, hands down.",
      ],
      inProgress: [
        "Those two heroes look stressed. They should have another cup.",
        "Nothing clarifies a map like a good, strong brew.",
        "It's like... liquid patience.",
        "Yep. Definitely liquid patience.",
      ],
      completed: [
        "See? They look much happier now.",
        "Told you the coffee would solve their problems.",
        "It always does.",
        "Time for another round, I think.",
      ],
    },
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#5a189a",
  },
  gunMan: {
    text: {
      initial: [
        "Great. Just what I need. A line.",
        "Some of us have bounties to collect, you know.",
        "Time is money, and this knight is costing me a fortune.",
        "Move it, tin can.",
      ],
      inProgress: [
        "What are you looking at?",
        "Unless you've got a lead on a one-eyed pirate named 'Grumble,' scram.",
        "This isn't a social club.",
        "It's a pre-mission fueling station.",
      ],
      completed: [
        "Finally, the heroes are moving.",
        "Maybe now Sir Clanks-a-Lot will get his coffee and get out of my way.",
        "Some of us have work to do.",
        "Serious work.",
      ],
    },
    position: { top: "-7.375rem", right: "0" },
    bubbleColor: "#a4161a",
  },
  knight: {
    text: {
      initial: [
        "Patience, ruffian. A noble quest requires a noble brew.",
        "One must be properly fortified before facing dragons. Or, you know, paperwork.",
        "This is a crucial part of the process.",
        "You'll get your turn.",
      ],
      inProgress: [
        "A true hero knows the value of observation.",
        "One cannot simply rush into a quest without a clear map.",
        "It seems those two are learning that lesson the hard way.",
        "A cautionary tale, indeed.",
      ],
      completed: [
        "Ah, excellent! The adventurers have solved their predicament.",
        "Now the barista's attention can return to what is truly important.",
        "My coffee.",
        "A victory for all, I say!",
      ],
    },
    position: { top: "-7.375rem", right: "-1rem" },
    bubbleColor: "#1d3557",
  },
  surfer: {
    text: {
      initial: [
        "Whoa, mellow vibes today.",
        "The ocean's just... chillin'.",
        "You can't force a wave to appear, you know?",
        "Just gotta be ready when it decides to show up.",
      ],
      inProgress: [
        "Those hero types look totally lost. Bummer.",
        "You can't just ride the waves, man. You gotta *feel* where the ocean wants to go.",
        "It's all about the landmarks. The little things that tell you where you are.",
        "Guess they lost their landmark.",
      ],
      completed: [
        "Righteous! The vibe just shifted.",
        "Feels like a big wave just crested, you know?",
        "Looks like they found their direction. Totally tubular.",
        "Now the ocean can chill again.",
      ],
    },
    position: { top: "-7.375rem", right: "0" },
    bubbleColor: "#00b4d8",
  },
  worker: {
    text: {
      initial: [
        "Trying to build a retaining wall here.",
        "This sand just doesn't want to stay put.",
        "Needs a solid foundation, you know?",
        "Everything does, I suppose.",
      ],
      inProgress: [
        "Those heroes look like their plans are built on sand.",
        "No solid landmark to hold their course.",
        "It's all gonna wash away if they're not careful.",
        "A lesson I'm learning with this wall, believe me.",
      ],
      completed: [
        "Well, look at that. They seem to have found their foundation.",
        "See? Once you know where you're anchored, everything else is easy.",
        "Maybe there's hope for this wall yet.",
        "Or maybe it's time for a coffee break.",
      ],
    },
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#a0522d",
  },
  cocopheus: {
    text: {
      initial: [
        "Did... did the moon just ask me for a latte?",
        "It seemed very polite about it.",
        "I told it the barista was busy.",
        "I think it understood.",
      ],
      inProgress: [
        "The map... it's made of coconut milk!",
        "Someone needs to tell the heroes before it melts!",
        "This is a navigational emergency!",
        "Why is no one listening to me?!",
      ],
      completed: [
        "The sky's letter has been delivered!",
        "The coconut has fulfilled its purpose.",
        "The heroes are free.",
        "Now... time for a celebratory nap.",
      ],
    },
    position: { top: "-6.375rem", right: "0" },
    bubbleColor: "#FFD700",
  },
  flea: {
    text: {
      initial: [
        "*bzzzt* So many giant, fleshy ankles...",
        "A veritable feast!",
        "But which to choose? A difficult decision.",
        "*bzzzt* The pressure is immense...",
      ],
      inProgress: [
        "The big ones... they seem stressed.",
        "Stressed ankles are always so... salty.",
        "A delicacy!",
        "*bzzzt* I must be patient... plan my attack...",
      ],
      completed: [
        "Ah, the tension has lifted!",
        "The ankles are relaxed. A much smoother vintage.",
        "A good day for a flea.",
        "*bzzzt* A very good day indeed.",
      ],
    },
    position: { top: "-5rem", right: "0" },
    bubbleColor: "#7f7f7f",
  },
  music: {
    text: {
      initial: [
        "♪ ♫ ...sittin' on the dock of the bay... ♫ ♪",
        "♪ ♫ ...wastin' time... ♫ ♪",
        "A slow day. A thoughtful tune.",
        "Just right.",
      ],
      inProgress: [
        "♪ ♫ ...I still haven't found what I'm looking for... ♫ ♪",
        "The mood's shifted. A little more tension.",
        "A searching song, for a searching time.",
        "Hope they find it soon.",
      ],
      completed: [
        "♪ ♫ ...here comes the sun, doo-doo-doo-doo... ♫ ♪",
        "And there it is! A happy ending.",
        "Time for a triumphant tune!",
        "Perfect.",
      ],
    },
    position: { top: "-6rem", right: "-2rem" },
    bubbleColor: "#ffc300",
  },
};
