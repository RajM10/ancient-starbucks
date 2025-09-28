import StoryTeller from "../StoryTeller";

const storyTeller = new StoryTeller();

window.storyTeller = storyTeller;
window.startStory = startStory;
export default function startStory(storyData) {
  storyTeller.init(storyData);
}
