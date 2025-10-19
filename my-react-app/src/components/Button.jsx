// src/components/Button.jsx
function Button({ text, onClick, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`text-white font-semibold py-2 px-4 rounded-lg transition ${colorClasses[color]} focus:outline-none`}
    >
      {text}
    </button>
  );
}

export default Button;
