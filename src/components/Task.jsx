import React from "react";
import { formatDate } from "../utils/formatDate";
import DeleteTask from "./DeleteTask.jsx";
import ToggleCompletion from "./ToggleCompletion.jsx";

const Task = ({ task }) => {
    const formattedDate = formatDate(task.createdAt);

    return (
        <li
            className={`w-full bg-gray-50 p-2 rounded-lg flex justify-between items-center shadow-sm ${
                task.completed ? "shadow-green-300/25" : "shadow-red-300/25"
            }`}
        >
            <div className="max-w-xl">
                <h2 className="font-[500]">{task.title}</h2>
                <p className="text-sm font-[200] max-w-lg text-gray-800 break-all">
                    {task.description}
                </p>
                <p>
                    <span className="font-[100] text-[12px]">
                        {formattedDate}
                    </span>
                </p>
            </div>
            <div className="flex gap-4 text-xl px-2">
                <ToggleCompletion id={task.id} completed={task.completed} />
                <DeleteTask taskId={task.id} />
            </div>
        </li>
    );
};

export default Task;
