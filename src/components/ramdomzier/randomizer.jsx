import styles from "./randomizer.module.css";
import Data from "../../../public/data.json"

export default function Randomizer() {
    return (
        <div className={styles.randomizer}>
            <h1>Randomizer</h1>
            <p>This page will display a randomized item for the game.</p>
        </div>
    );
}