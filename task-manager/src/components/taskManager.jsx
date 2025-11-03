import React, { useState, useEffect } from "react";
import "../styles/taskManager.css";
import useLocalStorage from "../hooks/localStorage";

function TaskManager() {
  // 🧠 States
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("All"); // "All" | "Active" | "Completed"
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoaded, setShowLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  // 🟢 Load tasks when the app starts
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(saved);
    } catch (err) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
      setHasLoaded(true);
    }
  }, [setTasks]);

  // 🟡 Save tasks only after loading
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  // ✅ Show “Tasks loaded!” for a short time
  useEffect(() => {
    if (!loading && !error) {
      setShowLoaded(true);
      const timer = setTimeout(() => setShowLoaded(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading, error]);

  // ✅ Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), title: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  // ✅ Toggle completion
  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // ✅ Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // ✅ Filter tasks
  const getFilteredTasks = () => {
  let filtered = tasks;

  // Filter by completion status
  switch (filter) {
    case "Active":
      filtered = filtered.filter((t) => !t.completed);
      break;
    case "Completed":
      filtered = filtered.filter((t) => t.completed);
      break;
    default:
      break;
  }

  // Filter by search text
  if (searchTerm.trim() !== "") {
    filtered = filtered.filter((t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
};


  const filteredTasks = getFilteredTasks();

  // ⏳ Conditional UI
  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (showLoaded) return <p style={{ color: "green" }}>✅ Tasks loaded!</p>;

  // ✅ Main UI
  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      {/* Input Section */}
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Type a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="task-filters">
        {["All", "Active", "Completed"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Bar */}
<div className="task-search">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search tasks..."
  />
</div>




      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks found for this filter.</p>
        ) : (
          filteredTasks.map((t) => (
            <li key={t.id} className={t.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(t.id)}>
                {t.completed ? `👍 ${t.title}` : t.title}
              </span>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskManager;