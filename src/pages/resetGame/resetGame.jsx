import styles from "./resetGame.module.css";

export default function ResetGame() {
    return (
        <div className={styles.resetGame}>
            <h1>Reset Game</h1>
            <p>Are you sure you want to reset the game? This action cannot be undone.</p>
            <button className={styles.replayBtn} onClick={() => window.location.href = "/languageSelect"}>Replay</button>
            <button className={styles.resetBtn} onClick={() => window.location.href = "/"}>Reset</button>
        </div>
    );
} 