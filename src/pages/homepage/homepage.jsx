import { useNavigate } from "react-router";
import styles from "./homepage.module.css";
import StartBtn from "../../assets/startBtn.svg";
import Logo from "../../assets/legoLogo.svg";

export default function Homepage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate("/languageselect");
    };

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
            <button className={styles.startBtn} onClick={handleStartClick}>
                <img src={StartBtn} alt="Start Game"/>
            </button>
        </div>
    );
}
