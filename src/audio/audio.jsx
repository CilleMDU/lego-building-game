const soundBase = `${import.meta.env.BASE_URL}sounds/`;

export default function playSound(name, volume = 0.5) {
  const src = sounds[name];
  if (!src) return null;

  let activeSound = null;
  activeSound = new Audio(src);
  activeSound.volume = Math.min(Math.max(volume, 0), 1);

  activeSound.play().catch(() => {});
  return activeSound;
}

let bgMusic = null;

export function backgroundMusic(name = "gameMusic", volume = 0.5) {
  const src = sounds[name];
  if (!src) return null;

  if (bgMusic) {
    return bgMusic;
  }

  bgMusic = new Audio(src);
  bgMusic.loop = true;
  bgMusic.volume = Math.min(Math.max(volume, 0), 1);

  bgMusic.play().catch(() => {});
  return bgMusic;
}

export function backgroundMusicStop() {
  if (!bgMusic) return;
  bgMusic.pause();
  bgMusic.currentTime = 0;
  bgMusic = null;
}

export function backgroundMusicVolume(volume) {
  if (!bgMusic) return;
  bgMusic.volume = Math.min(Math.max(volume, 0), 1);
}

const sounds = {
  start: `${soundBase}game-start.mp3`,
  slowMusic: `${soundBase}slow-music.mp3`,
  gameMusic: `${soundBase}game-music.mp3`,
  choose: `${soundBase}choose.mp3`,
  success: `${soundBase}success.mp3`,
  countdown: `${soundBase}tick.mp3`,
};
