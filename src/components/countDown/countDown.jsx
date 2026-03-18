import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./countDown.module.css";

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(120);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            navigate("/resetgame");
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return (
        <div className={styles.countDown}>
            <h2>Time Left</h2>
            <p className={styles.timer}>{formattedTime}</p>
        </div>
    );
}