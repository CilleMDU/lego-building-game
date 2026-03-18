import styles from "./homepage.module.css";
import StartBtn from "../../assets/startBtn.svg";
import Logo from "../../assets/legoLogo.svg";
import playSound, {backgroundMusic, backgroundMusicStop} from "../../audio/audio";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Homepage() {
    const navigate = useNavigate();

    const handleStartDown = () => {
        playSound("choose", 0.6);
    }
    const handleStartClick = () => {
        setTimeout(() => navigate("/languageselect"), 120);
    };

    useEffect(() => {
        backgroundMusic("slowMusic", 0.2);
    }, []);

    return (
        <div className={styles.homepage}>
            <div className={styles.titleContainer}>
                <img src={Logo} alt="Lego Logo" className={styles.logo}/>
                <h1 className={styles.title}>Building <br /> Competition</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>Denmark VS Netherlands</p>
                <p className={styles.edition}>EDITION</p>
            </div>
            <button className={styles.startBtn} onPointerDown={handleStartDown} onClick={handleStartClick}>
                <img src={StartBtn} alt="Start Game"/>
            </button>
        </div>
    );
}
