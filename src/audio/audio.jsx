export default function playSound(name, volume = 0.5) {
    const src = sounds[name];
    if (!src) return null;

    let activeSound = null;
    activeSound = new Audio(src);
    activeSound.volume = Math.min(Math.max(volume, 0), 1);

    activeSound.play().catch(() => {
    });
    return activeSound;
}

export function backgroundMusic(name = "gameMusic") {
    const src = sounds[name];
    if (!src) return null;

    let bgMusic = null;
    if (bgMusic) {
         return bgMusic;
    }

    bgMusic = new Audio(src);
    bgMusic.loop = true;
    
    bgMusic.play().catch(() => {});
    return bgMusic;
}

const sounds = {
    start: "/sounds/game-start.mp3",
    slowMusic: "/sounds/slow-music.mp3",
    gameMusic: "/sounds/game-music.mp3",
    choose: "/sounds/choose.mp3",
    restart: "/sounds/restart.mp3",
    success: "/sounds/success.mp3"
};