import { useNavigate } from "react-router";
import styles from "./resetGame.module.css";
import Finished from "../../assets/FinishTitle.svg";
import Replay from "../../assets/replay.svg";
import Reset from "../../assets/reset.svg";
import playSound, {backgroundMusicStop} from "../../audio/audio";

export default function ResetGame() {
    const navigate = useNavigate();
    
    const handleDown = () => {
      playSound("choose", 0.6);
      backgroundMusicStop();
    };

    const handleReplay = () => {
        setTimeout(() => navigate("/languageselect", 120));
    }

    const handleReset = () => {
        setTimeout(() => navigate("/"), 120);
     }
    
    return (
        <div className={styles.resetGame}>
            <img src={Finished} alt="Finished" className={styles.finishedImage}/>
            <div className={styles.buttonsContainer}>
                <button className={styles.Btn} onPointerDown={handleDown} onClick={handleReplay}>
                    <img src={Replay} alt="Replay" className={styles.replayBtn}/>
                </button>
                <button className={styles.Btn} onPointerDown={handleDown} onClick={handleReset}>
                    <img src={Reset} alt="Reset" className={styles.resetBtn}/>
                </button>
            </div>
        </div>
    );
}