export default function playSound(name, volume = 0.5) {
    const src = sounds[name];
    if (!src) return null;

    const audio = new Audio(src);
    audio.volume = Math.min(Math.max(volume, 0), 1);

    audio.play().catch(() => {

    });
}

const sounds = {
    start: "../sounds/game-start.mp3",
    slowMusic: "../sounds/slow-music.mp3",
    gameMusic: "../sounds/game-music.mp3",
    choose: "../sounds/choose.mp3",
    restart: "../sounds/restart.mp3",
    success: "../sounds/success"
};