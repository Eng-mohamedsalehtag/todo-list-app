import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import Profile from "./pages/Profile";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onAdd={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <TaskDetail
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
