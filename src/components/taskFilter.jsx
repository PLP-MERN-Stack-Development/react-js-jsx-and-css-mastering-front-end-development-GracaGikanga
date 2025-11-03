// src/components/TaskFilter.js (example path)
import React from "react";

function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filter">
      <button
        className={currentFilter === "All" ? "active" : ""}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>

      <button
        className={currentFilter === "Active" ? "active" : ""}
        onClick={() => onFilterChange("Active")}
      >
        Active
      </button>

      <button
        className={currentFilter === "Completed" ? "active" : ""}
        onClick={() => onFilterChange("Completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;

