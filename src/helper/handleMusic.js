export const music = new Audio();
let musicInitialized = false;

export default function handleMusic() {
  if (musicInitialized) return;
  musicInitialized = true;

  music.src = "/music/normal.mp3";
  music.volume = 0.4;
  music.loop = true;

  const tryPlay = () => {
    music
      .play()
      .catch(() => {
        /* Autoplay still blocked; will retry on next interaction */
      });
  };

  // Attempt immediate play; if blocked, attach one-time interaction listeners
  music.play().catch(() => {
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("click", onFirstGesture, true);
      window.removeEventListener("keydown", onFirstGesture, true);
      window.removeEventListener("touchstart", onFirstGesture, true);
    };
    window.addEventListener("click", onFirstGesture, { once: true, capture: true });
    window.addEventListener("keydown", onFirstGesture, { once: true, capture: true });
    window.addEventListener("touchstart", onFirstGesture, { once: true, capture: true });
  });
}
