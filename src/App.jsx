import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";

function App() {
    return (
        <div className="max-w-3xl mx-auto h-screen min-h-screen">
            <div className="shadow-lg mt-10 flex flex-col p-4 gap-4 rounded-xl">
                <h1 className="text-center text-2xl font-semibold">
                    Task Manager
                </h1>
                <div className="w-full flex justify-between items-center">
                    <AddTask />
                    <FilterTasks />
                </div>
                <TaskList />
            </div>
        </div>
    );
}

export default App;
