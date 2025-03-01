import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../../redux/slices/TaskSlice";

const useTaskCompletion = (id) => {
    const dispatch = useDispatch();

    const toggleCompletion = () => {
        dispatch(toggleTaskCompletion(id));
    };

    return {
        toggleCompletion,
    };
};
export default useTaskCompletion;
