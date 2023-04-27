import styles from "./List.module.css"
import { ItemList } from "./components/ItemList"

export function List() {
    return (
        <ul className={styles.container}>
            <ItemList name="Study React" />
            <ItemList name="Study JS" />
            <ItemList name="Study .NET" />
        </ul>
    )
}