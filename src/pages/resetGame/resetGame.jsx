import styles from "./resetGame.module.css";

export default function ResetGame() {
    return (
        <div className={styles.resetGame}>
            <h1>Reset Game</h1>
            <p>Are you sure you want to reset the game? This action cannot be undone.</p>
            <button className={styles.resetButton}>Yes, Reset Game</button>
            <button className={styles.cancelButton}>No, Keep Playing</button>
        </div>
    );
} 