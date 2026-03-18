import { useState, useEffect } from "react";
import styles from "./randomizer.module.css";
import Data from "../../../public/data.json";

export default function Randomizer() {
    const [randomWord, setRandomWord] = useState("");
    const [language, setLanguage] = useState("");

    useEffect(() => {
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        setLanguage(selectedLanguage);
        getRandomWord(selectedLanguage);
    }, []);

    const getRandomWord = (lang) => {
        const filteredWords = Data.filter(item => item.language === lang);
        if (filteredWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredWords.length);
            setRandomWord(filteredWords[randomIndex].word);
        }
    };

    return (
        <div className={styles.randomizer}>
            <p className={styles.currentWord}>{randomWord}</p>
        </div>
    );
}