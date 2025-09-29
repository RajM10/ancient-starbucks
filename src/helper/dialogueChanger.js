import { dialogueSystem as characterConfig } from "../assets/dialogueConfig";
// Track dialogue state
const dialogueState = {
  currentCharacter: null,
  dialogueIndex: {},
  currentState: {},
  hideTimeout: null,
};

// Character configuration with text states and positions

// Show dialogue bubble for a character with specified state
export function showDialogue(characterId, state = "initial") {
  const config = characterConfig[characterId];

  if (!config) {
    console.error(`Character config not found: ${characterId}`);
    return;
  }

  const dialogues = config.text[state];

  if (!dialogues || dialogues.length === 0) {
    console.error(`No dialogues found for ${characterId} state: ${state}`);
    return;
  }

  // Hide previous character's bubble if different character
  if (
    dialogueState.currentCharacter &&
    dialogueState.currentCharacter !== characterId
  ) {
    hideBubble(dialogueState.currentCharacter);
  }

  // Clear any existing hide timeout
  if (dialogueState.hideTimeout) {
    clearTimeout(dialogueState.hideTimeout);
  }

  // Check if state changed - reset index if so
  const stateKey = `${characterId}_${state}`;
  if (dialogueState.currentState[characterId] !== state) {
    dialogueState.dialogueIndex[stateKey] = 0;
    dialogueState.currentState[characterId] = state;
  }

  // Initialize index if not exists
  if (dialogueState.dialogueIndex[stateKey] === undefined) {
    dialogueState.dialogueIndex[stateKey] = 0;
  }

  // Get current dialogue index
  const index = dialogueState.dialogueIndex[stateKey];
  const dialogue = dialogues[index];

  // Get or create bubble element
  let bubble = document.getElementById(`${characterId}-bubble`);
  if (!bubble) {
    bubble = createBubbleElement(characterId, config.position);
    const container = document.getElementById(`${characterId}-container`);
    if (container) {
      container.appendChild(bubble);
    } else {
      console.error(`Container not found: ${characterId}-container`);
      return;
    }
  }

  // Update bubble text and show
  bubble.textContent = dialogue;
  bubble.classList.add("show");

  // Update state
  dialogueState.currentCharacter = characterId;

  // Advance to next dialogue (loop back to start if at end)
  dialogueState.dialogueIndex[stateKey] = (index + 1) % dialogues.length;

  // Auto-hide after 5 seconds
  dialogueState.hideTimeout = setTimeout(() => {
    hideBubble(characterId);
  }, 5000);
}

// Create bubble element
function createBubbleElement(characterId, position) {
  const bubble = document.createElement("div");
  bubble.className = "dialogue-bubble";
  bubble.id = `${characterId}-bubble`;
  bubble.style.top = position.top;
  bubble.style.right = position.right;
  bubble.style.transform = "translateX(59%)";
  bubble.style.zIndex = 20;
  return bubble;
}

// Hide bubble for a character
function hideBubble(characterId) {
  const bubble = document.getElementById(`${characterId}-bubble`);
  if (bubble) {
    bubble.classList.remove("show");
  }
  if (dialogueState.currentCharacter === characterId) {
    dialogueState.currentCharacter = null;
  }
}

// Usage examples:
/*
import { showDialogue, characterConfig } from './dialogue.js';

// Show initial state
document.getElementById('heidiAndExplorpheus').addEventListener('click', () => {
  showDialogue('heidiAndExplorpheus', 'initial');
});

// Switch to in-progress state when quest starts
showDialogue('heidiAndExplorpheus', 'inProgress');

// Switch to completed state when quest done
showDialogue('heidiAndExplorpheus', 'completed');

// Add more characters to characterConfig
characterConfig.newCharacter = {
  text: {
    initial: ["Hello!", "Welcome!"],
    angry: ["Leave me alone!"]
  },
  position: { top: "-7rem", right: "-1.5rem" }
};
*/
