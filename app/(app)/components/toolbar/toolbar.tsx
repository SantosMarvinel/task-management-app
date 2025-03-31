import React from "react";
import AddTask from "./add-task";

const ToolBar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-black/80">Task Management</h1>
      <AddTask />
    </div>
  );
};

export default ToolBar;
