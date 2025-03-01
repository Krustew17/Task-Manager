import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import sortTasksByDate from "../utils/sortTasksByDate.js";

const TaskList = () => {
    const { tasks, filter } = useSelector((state) => state.task);
    const filteredTasks =
        filter === "all"
            ? tasks
            : filter === "completed"
            ? tasks.filter((task) => task.completed)
            : tasks.filter((task) => !task.completed);

    if (filteredTasks.length === 0) {
        return <p className="text-center text-lg">No tasks found.</p>;
    }

    const sortedTasks = sortTasksByDate(filteredTasks);

    return (
        <div>
            <ul className="flex flex-col gap-4">
                {sortedTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
