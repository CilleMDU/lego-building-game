import Randomizer from "../../components/ramdomzier/randomizer";
import CountDown from "../../components/countDown/countDown";
import styles from "./randomizedWord.module.css";

export default function RandomizedWord() {
    return (
        <div className={styles.randomizedWord}>
            <h1>Randomized Word</h1>
            <Randomizer />
            <CountDown />
            <button className={styles.finBtn} onClick={() => window.location.href="/resetgame"}>
                Finished
            </button>
        </div>
    );
}