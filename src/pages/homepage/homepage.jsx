import styles from "./homepage.module.css";
import StartBtn from "../../assets/startBtn.svg";
import playSound from "../../audio/audio";
import { useNavigate } from "react-router";

export default function Homepage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        playSound("start");
        navigate("/languageselect");
    };

    return (
        <div className={styles.homepage}>
            <h1 className={styles.title}>Building Competition</h1>
            <p className={styles.description}>Denmark VS Netherlands</p>
            <button className={styles.startBtn} onClick={handleStartClick}>
                <img src={StartBtn} alt="Start Game"/>
            </button>
        </div>
    );
}
