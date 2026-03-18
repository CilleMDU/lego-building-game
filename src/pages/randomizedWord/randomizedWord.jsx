import { useNavigate } from "react-router";
import Randomizer from "../../components/ramdomzier/randomizer";
import CountDown from "../../components/countDown/countDown";
import styles from "./randomizedWord.module.css";
import FinBtn from "../../assets/finish.svg"
import playSound, {backgroundMusic, backgroundMusicVolume} from "../../audio/audio";
import { useState, useEffect } from "react";

export default function RandomizedWord() {
    const [volume, setVolume] = useState(50);

    useEffect(() => {
        backgroundMusic("gameMusic", 0.5);
    }, []);

    const navigate = useNavigate();
    const finish = () => {
        playSound("success");
        navigate("/resetgame");
    }

    const handleVolumeChange = (e) => {
      const next = Number(e.target.value);
      setVolume(next);
      backgroundMusicVolume(next / 100);
    };

    return (
      <div className={styles.randomizedWord}>
        <Randomizer />
        <CountDown />
        <button
          className={styles.finBtn}
          onClick={finish}
        >
          <img src={FinBtn} alt="Finish" />
        </button>
        <label className={styles.volumeWrap}>
          Music volume: {volume}%
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
        </label>
      </div>
    );
}