import styles from "./Header.module.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <Link to="/">
                    <h3>vnt<span>/school</span></h3>
                </Link>
                <Link to="/about">About</Link>
            </div>
        </header>
    )
}