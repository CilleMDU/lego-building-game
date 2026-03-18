import Randomizer from "../../components/ramdomzier/randomizer";
import CountDown from "../../components/countDown/countDown";
import styles from "./randomizedWord.module.css";
import FinBtn from "../../assets/finish.svg"

export default function RandomizedWord() {
    return (
        <div className={styles.randomizedWord}>
            <Randomizer />
            <CountDown />
            <button className={styles.finBtn} onClick={() => window.location.href="/resetgame"}>
                <img src={FinBtn} alt="Finish"/>
            </button>
        </div>
    );
}