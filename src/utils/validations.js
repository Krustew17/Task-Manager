import {
    MAX_DESCRIPTION_LENGTH,
    MAX_NAME_LENGTH,
    MIN_NAME_LENGTH,
} from "../constants/constants";
const validateInput = (name, value, setDescriptionCharactersLeft) => {
    let error = "";

    if (name === "title") {
        if (value.trim() === "") {
            error = "Title is required.";
        } else if (value.length < 3) {
            error = `Title must be at least ${MIN_NAME_LENGTH} characters.`;
        } else if (value.length > MAX_NAME_LENGTH) {
            error = `Title must be less than ${MAX_NAME_LENGTH} characters.`;
        }
    }

    if (name === "description") {
        setDescriptionCharactersLeft(MAX_DESCRIPTION_LENGTH - value.length);
        if (value.trim() === "") {
            error = "Description is required.";
        } else if (value.length > MAX_DESCRIPTION_LENGTH) {
            error = `Description must be less than ${MAX_DESCRIPTION_LENGTH} characters.`;
        }
    }

    return error;
};
export default validateInput;
