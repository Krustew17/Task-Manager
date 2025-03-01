import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slices/TaskSlice";

const useDeleteTask = (taskId) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleDelete = () => {
        console.log(taskId);
        dispatch(deleteTask(taskId));
    };

    return {
        modalOpen,
        toggleModal,
        handleDelete,
    };
};

export default useDeleteTask;
