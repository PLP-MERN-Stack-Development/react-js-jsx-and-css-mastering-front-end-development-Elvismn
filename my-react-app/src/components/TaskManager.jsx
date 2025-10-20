import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        📝 Task Manager
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        {["All", "Active", "Completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded-lg ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 border rounded-lg ${
              task.completed ? "bg-green-50 line-through text-gray-500" : ""
            }`}
          >
            <span>{task.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                ✓
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}