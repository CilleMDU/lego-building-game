import Randomizer from "../../components/ramdomzier/randomizer";
import CountDown from "../../components/countDown/countDown";
import styles from "./randomizedWord.module.css";
import FinBtn from "../../assets/finish.svg"
import {backgroundMusicVolume} from "../../audio/audio";
import { useState } from "react";

export default function RandomizedWord() {
    const [volume, setVolume] = useState(50);

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
          onClick={() => (window.location.href = "/resetgame")}
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