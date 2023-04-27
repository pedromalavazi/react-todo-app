import styles from "./ItemList.module.css"

export function ItemList(props) {

    function removeItem() {

    }

    return (
        <li className={styles.container}>
            <strong>{props.name}</strong>
            <button onClick={removeItem}>-</button>
        </li>
    )
}