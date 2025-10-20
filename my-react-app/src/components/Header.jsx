import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-600 text-white p-4 text-center shadow-md dark:bg-gray-900 dark:text-gray-100 transition">
      <h1 className="text-2xl font-bold">My React App</h1>
      <p className="text-sm text-blue-100 dark:text-gray-300">
        Building with reusable components ⚛️
      </p>

      <button
        onClick={toggleTheme}
        className="mt-3 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;