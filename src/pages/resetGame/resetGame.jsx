import { useNavigate } from "react-router";
import styles from "./resetGame.module.css";
import playSound from "../../audio/audio";

export default function ResetGame() {
    const navigate = useNavigate();
    
    const handleDown = () => {
      playSound("choose", 0.6);
    };

    const handleReplay = () => {
        setTimeout(() => navigate("/languageselect", 120));
    }

    const handleReset = () => {
        setTimeout(() => navigate("/"), 120);
     }

    return (
        <div className={styles.resetGame}>
            <h1>Reset Game</h1>
            <p>Are you sure you want to reset the game? This action cannot be undone.</p>
            <button className={styles.replayBtn} onPointerDown={handleDown} onClick={handleReplay}>Replay</button>
            <button className={styles.resetBtn} onPointerDown={handleDown} onClick={handleReset}>Reset</button>
        </div>
    );
} 