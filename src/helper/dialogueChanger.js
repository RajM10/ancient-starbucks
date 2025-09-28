function dialogueChanger(id, text) {
  const bubble = document.getElementById(`${id}-bubble`);
  if (bubble) {
    bubble.innerText = Text;
    bubble.classList.toggle("show");
  }
}
