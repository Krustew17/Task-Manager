import { createSlice } from "@reduxjs/toolkit";
import generateRandomID from "../../utils/generateRandomID.js";

const loadTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: loadTasksFromLocalStorage(),
        filter: "all",
    },
    reducers: {
        addTask: (state, action) => {
            const taskId = generateRandomID();
            const newTask = {
                ...action.payload,
                id: taskId,
                createdAt: new Date().toISOString(),
            };
            state.tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        toggleTaskCompletion: (state, action) => {
            const taskToUpdate = state.tasks.find(
                (task) => task.id === action.payload
            );
            if (taskToUpdate) {
                taskToUpdate.completed = !taskToUpdate.completed;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});
export const {
    addTask,
    deleteTask,
    toggleTaskCompletion,
    setFilter,
    clearCompletedTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
