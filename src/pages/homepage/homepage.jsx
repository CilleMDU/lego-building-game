import styles from "./homepage.module.css";
import StartBtn from "../../assets/StartBtn.svg";

export default function Homepage() {
    return (
        <div className={styles.homepage}>
            <h1 className={styles.title}>Building Competition</h1>
            <p className={styles.description}>Denmark VS Netherlands</p>
            <button className={styles.startBtn} onClick={() => window.location.href="/languageselect"}>
                <img src={StartBtn} alt="Start Game"/>
            </button>
        </div>
    );
}
