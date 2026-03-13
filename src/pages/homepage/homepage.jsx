import styles from "./homepage.module.css";

export default function Homepage() {
    return (
        <div className={styles.homepage}>
            <h1>Welcome to our game!</h1>
            <p>Discover our wide range of products and enjoy shopping with us.</p>
        </div>
    );
}