import { Outlet } from "react-router-dom";
import { Header } from "../components/Header"
import styles from "./DefaultLayout.module.css"

export function DefaultLayout() {
    return (
        <div>
            <div className={styles.container}>
                <Header />
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}