import { useNavigate } from "react-router";
import styles from "./languageSelect.module.css";
import ChooseBtn from "../../assets/Choose.svg"
import Danish from "../../assets/danish.svg";
import Dutch from "../../assets/dutch.svg";

export default function LanguageSelect() {
    const navigate = useNavigate();

    const handleLanguageSelect = (language) => {
        localStorage.setItem("selectedLanguage", language);
        navigate("/randomizedword");
    };

    return (
        <div className={styles.languageSelect}>
            <img src={ChooseBtn} alt="Choose Language" className={styles.choose}/>
            <div className={styles.buttonsContainer}>
                <button 
                  className={styles.languageButton}
                   onClick={() => handleLanguageSelect("dutch")}
               >
                 <img src={Dutch} alt="Dutch" className={styles.dutchFlag}/>
             </button>
             <button 
                 className={styles.languageButton}
                 onClick={() => handleLanguageSelect("danish")}
             >
                  <img src={Danish} alt="Danish" className={styles.danishFlag}/>
              </button>
            </div>
        </div>
    );
}