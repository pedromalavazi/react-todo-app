import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get("/tasks").then(resp => setTasks(resp.data));
    }, []);

    async function addTask(taskName) {
        if (taskName === '') return;

        const { data: newTask } = await api.post("/tasks", { name: taskName });

        setTasks(prev => [...prev, newTask]);
    }

    async function removeTask(id) {
        await api.delete(`/tasks/${id}`);
        setTasks(prev => prev.filter((task) => task.id !== id));
    }

    return (
        <AppContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </AppContext.Provider>
    )
}