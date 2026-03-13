import styles from "randomizedWord.module.css";

export default function randomizedWord() {
    return (
        <div className={styles.randomizedWord}>
            <h1>Randomized Word</h1>
            <p>This page will display a randomized word for the game.</p>
        </div>
    );
}