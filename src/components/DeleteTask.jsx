import React from "react";
import { GoTrash } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import useDeleteTask from "./hooks/useDeleteTask";

const DeleteTask = ({ taskId }) => {
    const { modalOpen, toggleModal, handleDelete } = useDeleteTask(taskId);
    return (
        <div className="flex items-center">
            <button
                className="text-red-500 hover:text-red-600 cursor-pointer"
                onClick={toggleModal}
            >
                <GoTrash />
            </button>
            {modalOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-center w-full font-semibold">
                                Delete Task
                            </h2>
                            <button onClick={toggleModal}>
                                <RxCross1 className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                            </button>
                        </div>
                        <p className="w-full text-center font-[200]">
                            Are you sure you want to delete this task?
                        </p>
                        <div className="flex flex-col gap-2 mt-4">
                            <button
                                onClick={handleDelete}
                                className={`bg-red-500 text-white py-2 rounded-md hover:bg-red-600 cursor-pointer`}
                            >
                                Delete Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteTask;
