import { useAppContext } from "../../../../rooks/useAppContext"
import styles from "./ItemList.module.css"

export function ItemList({ name, id }) {

    const { removeTask } = useAppContext()

    function handleRemove() {
        removeTask(id);
    }

    return (
        <li className={styles.container}>
            <strong>{name}</strong>
            <button onClick={handleRemove}>-</button>
        </li>
    )
}