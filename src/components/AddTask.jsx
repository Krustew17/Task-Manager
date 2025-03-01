import React from "react";
import { RxCross1 } from "react-icons/rx";
import { MAX_DESCRIPTION_LENGTH } from "../constants/constants";
import useAddTask from "./hooks/useAddTask.jsx";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
    const {
        data,
        handleChange,
        toggleModal,
        modalOpen,
        handleAddTask,
        disabled,
        errors,
        descriptionCharactersLeft,
    } = useAddTask();

    return (
        <div>
            <button
                className="bg-blue-500 max-w-[50px] hover:bg-blue-600 py-2 text-white font-bold px-4 rounded cursor-pointer"
                onClick={toggleModal}
            >
                <FaPlus />
            </button>

            {modalOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-center w-full font-semibold">
                                Add New Task
                            </h2>
                            <button onClick={toggleModal}>
                                <RxCross1 className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="text"
                                placeholder="Task Title"
                                value={data.title}
                                name="title"
                                onChange={handleChange}
                                className="border p-2 rounded-md w-full"
                            />
                            <div className="flex flex-col gap-0">
                                <textarea
                                    placeholder="Task Description"
                                    value={data.description}
                                    name="description"
                                    onChange={handleChange}
                                    className="border p-2 rounded-md w-full"
                                ></textarea>
                                <p
                                    className={`self-end ${
                                        descriptionCharactersLeft < 0
                                            ? "text-red-500"
                                            : "text-gray-400"
                                    } text-sm`}
                                >
                                    {descriptionCharactersLeft}/
                                    {MAX_DESCRIPTION_LENGTH}
                                </p>
                            </div>
                            {errors &&
                                Object.entries(errors).map(([key, value]) => (
                                    <p
                                        key={key}
                                        className="text-red-500 text-sm"
                                    >
                                        {value}
                                    </p>
                                ))}
                            <button
                                onClick={handleAddTask}
                                className={`bg-green-500 text-white py-2 rounded-md hover:bg-green-600 ${
                                    disabled
                                        ? "cursor-not-allowed bg-green-600"
                                        : "cursor-pointer"
                                }`}
                                disabled={disabled}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTask;
