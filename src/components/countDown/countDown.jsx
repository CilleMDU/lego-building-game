import styles from "./countDown.module.css";

export default function CountDown() {
    return (
        <div className={styles.countDown}>
            <h1>Count Down</h1>
            <p>This page will display a countdown timer for the game.</p>
        </div>
    );
}