import React from "react";
import { TASK_FILTERS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/TaskSlice";

const FilterTasks = () => {
    const dispatch = useDispatch();
    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div>
            <select
                className="p-2 rounded-md focus-visible:outline-none"
                onChange={handleFilterChange}
            >
                {TASK_FILTERS.map((filter) => (
                    <option key={filter.label} value={filter.value}>
                        {filter.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterTasks;
