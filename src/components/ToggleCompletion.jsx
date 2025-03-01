import React from "react";
import { GoCircle, GoCheckCircle } from "react-icons/go";
import useTaskCompletion from "./hooks/useTaskCompletion";

const ToggleCompletion = ({ id, completed }) => {
    const { toggleCompletion } = useTaskCompletion(id);
    return (
        <button onClick={toggleCompletion} className="cursor-pointer">
            {completed ? (
                <GoCheckCircle className="text-green-500 hover:text-green-600" />
            ) : (
                <GoCircle className="text-gray-500 hover:text-gray-700" />
            )}
        </button>
    );
};
export default ToggleCompletion;
