export default class StoryTeller {
  constructor() {
    this.currentDialogueIndex = 0;
    this.currentMessageIndex = 0;
    this.isActive = false;
    this.dialogueData = null;
    this.typewriterInterval = null;
    this.isTyping = false;
    this.typewriterSpeed = 50; // milliseconds per character
  }

  // Initialize story teller with dialogue data
  init(dialogueData) {
    this.dialogueData = dialogueData;
    this.currentDialogueIndex = 0;
    this.currentMessageIndex = 0;
    this.isActive = true;
    this.render();
  }
  // Typewriter effect for dialogue text
  startTypewriter(text) {
    // Clear any existing typewriter
    this.stopTypewriter();

    const container = document.getElementById("dialogue-text-id");
    if (!container) return;

    container.innerText = "";
    this.isTyping = true;

    let i = 0;
    this.typewriterInterval = setInterval(() => {
      if (i < text.length) {
        // Use textContent instead of innerText to preserve spaces
        container.textContent += text[i];
        i++;
      } else {
        this.stopTypewriter();
        this.isTyping = false;
        // Don't auto-advance, wait for user click
      }
    }, this.typewriterSpeed);
  }

  // Stop typewriter effect
  stopTypewriter() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
      this.typewriterInterval = null;
    }
    this.isTyping = false;
  }

  // Skip typewriter and show full text
  skipTypewriter() {
    if (this.isTyping) {
      this.stopTypewriter();
      const currentDialogue = this.dialogueData[this.currentDialogueIndex];
      const currentMessage =
        currentDialogue.dialogues[this.currentMessageIndex];
      const container = document.getElementById("dialogue-text-id");
      if (container) {
        container.textContent = currentMessage;
      }
    }
  }

  // Render the story teller interface
  render() {
    if (!this.dialogueData || !this.isActive) return;

    const currentDialogue = this.dialogueData[this.currentDialogueIndex];
    const currentMessage = currentDialogue.dialogues[this.currentMessageIndex];

    const storyTellerHTML = `
      <div class='story-teller-overlay' id='story-teller'>
        <div class='story-teller-container'>
        <div class='story-character-container'>
          <!-- Left side - Player/You -->
          <div class='character-left ${currentDialogue.speaker === "you" ? "active" : ""}'>
            <div class='character-image '>
              <img src='${currentDialogue.images[currentDialogue.speaker]}' alt='${currentDialogue.speaker}' />
            </div>
          </div>

          <!-- Right side - Other character -->
          <div class='character-right ${currentDialogue.speaker === "you" ? "" : "active"}'>
            <div class='character-image'>
              <img src='${currentDialogue.images[currentDialogue.speaker]}' alt='other' />
            </div>
          </div>
        </div>
          <!-- Dialogue box -->
          <div class='dialogue-box'>
            <div class='dialogue-content'>
              <div class='speaker-name'>${currentDialogue.speaker === "you" ? "You" : currentDialogue.speaker}</div>
              <button class='skip-btn' onclick='storyTeller.skipAll()'>Skip>></button>
            </div>
            
            <!-- Navigation controls -->
            <div class='dialogue-controls' onclick='storyTeller.handleDialogueClick()'>
              <div id="dialogue-text-id" class='dialogue-text' ></div>
              <button class='next-btn' onclick='storyTeller.nextMessage()' style='display: none;' id='next-btn'>Next</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing story teller if any
    const existing = document.getElementById("story-teller");
    if (existing) existing.remove();

    // Add to body
    document.body.insertAdjacentHTML("beforeend", storyTellerHTML);

    // Start typewriter effect
    this.startTypewriter(currentMessage);
  }

  // Handle dialogue text click
  handleDialogueClick() {
    if (this.isTyping) {
      // If currently typing, skip to show full text
      this.skipTypewriter();
    } else {
      // If not typing, advance to next message
      this.nextMessage();
    }
  }

  // Go to next message
  nextMessage() {
    if (!this.dialogueData) return;

    // Stop any ongoing typewriter
    this.stopTypewriter();

    const currentDialogue = this.dialogueData[this.currentDialogueIndex];

    // Check if there are more messages in current dialogue
    if (this.currentMessageIndex < currentDialogue.dialogues.length - 1) {
      this.currentMessageIndex++;
    } else {
      // Move to next dialogue
      if (this.currentDialogueIndex < this.dialogueData.length - 1) {
        this.currentDialogueIndex++;
        this.currentMessageIndex = 0;
      } else {
        // End of story
        this.end();
        return;
      }
    }

    this.render();
  }

  // Skip all dialogues
  skipAll() {
    this.end();
  }

  // End story teller
  end() {
    this.isActive = false;
    this.stopTypewriter();
    const storyTeller = document.getElementById("story-teller");
    if (storyTeller) {
      storyTeller.remove();
    }
  }
}
