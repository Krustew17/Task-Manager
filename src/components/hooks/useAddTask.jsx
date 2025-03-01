import { useState } from "react";
import { MAX_DESCRIPTION_LENGTH } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/TaskSlice";
import validateInput from "../../utils/validations";

const useAddTask = () => {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState({
        title: "",
        description: "",
        completed: false,
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [errors, setErrors] = useState("");
    const [descriptionCharactersLeft, setDescriptionCharactersLeft] = useState(
        MAX_DESCRIPTION_LENGTH
    );

    const toggleModal = () => {
        setErrors("");
        setData({
            title: "",
            description: "",
            completed: false,
        });
        setDescriptionCharactersLeft(MAX_DESCRIPTION_LENGTH);
        setModalOpen(!modalOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });

        const validationErrors = validateInput(
            name,
            value,
            setDescriptionCharactersLeft
        );

        const newErrors = {
            ...errors,
            [name]: validationErrors,
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some(Boolean)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    const handleAddTask = () => {
        dispatch(addTask(data));
        toggleModal();
        setData({
            title: "",
            description: "",
            completed: false,
        });
    };

    return {
        handleChange,
        handleAddTask,
        disabled,
        errors,
        toggleModal,
        modalOpen,
        data,
        descriptionCharactersLeft,
    };
};
export default useAddTask;
