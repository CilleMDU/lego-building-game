import styles from "./resetGame.module.css";
import Finished from "../../assets/FinishTitle.svg";
import Replay from "../../assets/replay.svg";
import Reset from "../../assets/reset.svg";

export default function ResetGame() {
    return (
        <div className={styles.resetGame}>
            <img src={Finished} alt="Finished" className={styles.finishedImage}/>
            <div className={styles.buttonsContainer}>
                <button className={styles.Btn} onClick={() => window.location.href="/languageselect"}>
                    <img src={Replay} alt="Replay" className={styles.replayBtn}/>
                </button>
                <button className={styles.Btn} onClick={() => window.location.href="/"}>
                    <img src={Reset} alt="Reset" className={styles.resetBtn}/>
                </button>
            </div>
        </div>
    );
} 