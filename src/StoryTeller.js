export default class StoryTeller {
  constructor() {
    this.currentDialogueIndex = 0;
    this.currentMessageIndex = 0;
    this.isActive = false;
    this.dialogueData = null;
  }

  // Initialize story teller with dialogue data
  init(dialogueData) {
    this.dialogueData = dialogueData;
    this.currentDialogueIndex = 0;
    this.currentMessageIndex = 0;
    this.isActive = true;
    this.render();
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
          <div class='character-left'>
            <div class='character-image ${currentDialogue.speaker === 'you' ? 'active' : ''}'>
              <img src='${currentDialogue.speaker === 'you' ? currentDialogue.images.you : currentDialogue.images.other}' alt='${currentDialogue.speaker}' />
            </div>
          </div>

          <!-- Right side - Other character -->
          <div class='character-right'>
            <div class='character-image ${currentDialogue.speaker === 'you' ? '' : 'active'}'>
              <img src='${currentDialogue.speaker === 'you' ? currentDialogue.images.other : currentDialogue.images.you}' alt='other' />
            </div>
          </div>
        </div>
          <!-- Dialogue box -->
          <div class='dialogue-box'>
            <div class='dialogue-content'>
              <div class='speaker-name'>${currentDialogue.speaker === 'you' ? 'You' : currentDialogue.speaker}</div>
              <div class='dialogue-text'>${currentMessage}</div>
            </div>
            
            <!-- Navigation controls -->
            <div class='dialogue-controls'>
              <button class='skip-btn' onclick='storyTeller.skipAll()'>Skip All</button>
              <button class='next-btn' onclick='storyTeller.nextMessage()'>Next</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing story teller if any
    const existing = document.getElementById('story-teller');
    if (existing) existing.remove();

    // Add to body
    document.body.insertAdjacentHTML('beforeend', storyTellerHTML);
  }

  // Go to next message
  nextMessage() {
    if (!this.dialogueData) return;

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
    const storyTeller = document.getElementById('story-teller');
    if (storyTeller) {
      storyTeller.remove();
    }
  }
}
