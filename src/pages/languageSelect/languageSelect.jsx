import { useNavigate } from "react-router";
import styles from "./languageSelect.module.css";

export default function LanguageSelect() {
    const navigate = useNavigate();

    const handleLanguageSelect = (language) => {
        localStorage.setItem("selectedLanguage", language);
        navigate("/randomizedword");
    };

    return (
        <div className={styles.languageSelect}>
            <h1>Select Your Language</h1>
            <p>Please choose your preferred language to continue.</p>
            <button 
                className={styles.languageButton}
                onClick={() => handleLanguageSelect("dutch")}
            >
                Dutch
            </button>
            <button 
                className={styles.languageButton}
                onClick={() => handleLanguageSelect("danish")}
            >
                Danish
            </button>
        </div>
    );
}