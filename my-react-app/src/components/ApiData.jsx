// src/components/ApiData.jsx
import { useState, useEffect } from "react";

function ApiData() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Pagination logic
  const indexOfLastTodo = page * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(
    todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())).length /
      todosPerPage
  );

  if (loading)
    return <p className="text-center text-blue-500 font-semibold">Loading todos...</p>;
  if (error)
    return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        ✅ Todos from API
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Todo List */}
      <ul className="space-y-2">
        {currentTodos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 rounded-lg ${
              todo.completed
                ? "bg-green-100 dark:bg-green-700"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <span className="font-medium dark:text-white">{todo.title}</span>
            {todo.completed && (
              <span className="ml-2 text-green-600 dark:text-green-300 text-sm">
                (Completed)
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiData;
