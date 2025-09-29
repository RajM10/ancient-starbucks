export const music = new Audio();
export default function handleMusic() {
  music.src = "/music/normal.mp3";
  music.play();
  music.volume = 0.4;
  music.loop = true;
}
