import styles from "./languageSelect.module.css";

export default function languageSelect() {
    return (
        <div className={styles.languageSelect}>
            <h1>Select Your Language</h1>
            <p>Please choose your preferred language to continue.</p>
            <button className={styles.languageButton}>English</button>
            <button className={styles.languageButton}>Spanish</button>
            <button className={styles.languageButton}>French</button>
        </div>
    );
}