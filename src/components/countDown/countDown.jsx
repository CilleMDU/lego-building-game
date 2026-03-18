import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./countDown.module.css";

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(120);
    const navigate = useNavigate();

    useEffect(() => {
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
            <p className={styles.timer}>{formattedTime}</p>
        </div>
    );
}