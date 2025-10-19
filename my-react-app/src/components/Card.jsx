// src/components/Card.jsx
function Card({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-xl overflow-hidden w-72 transition">
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Learn More
    </button>
  </div>
</div>
  );
}

export default Card;

