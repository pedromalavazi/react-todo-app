import { CreateTask } from "../../components/CreateTask"
import { List } from "../../components/List"
import styles from "./Home.module.css"

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <CreateTask />
                <List />
            </div>
        </div>
    )
}