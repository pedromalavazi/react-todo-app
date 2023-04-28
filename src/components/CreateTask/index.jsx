import { useState } from "react"
import styles from "./CreateTask.module.css"
import { useAppContext } from "../../rooks/useAppContext";

export function CreateTask() {
    const [taskName, setTaskName] = useState("");

    const { addTask } = useAppContext();

    function handleSubmit(event) {
        event.preventDefault();
        addTask(taskName);
        setTaskName('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={event => setTaskName(event.target.value)}
                />
                <button type="submit">+</button>
            </form>
        </div>

    )
}