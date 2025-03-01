const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 100;

const TASK_FILTERS = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "completed",
        label: "Completed",
    },
    {
        value: "not-completed",
        label: "Not Completed",
    },
];

export {
    MIN_NAME_LENGTH,
    MAX_NAME_LENGTH,
    MAX_DESCRIPTION_LENGTH,
    TASK_FILTERS,
};
