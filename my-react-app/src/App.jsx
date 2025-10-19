import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import TaskManager from "./components/taskManager";
import ApiData from "./components/ApiData"; // ✅ New import

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-100 transition-colors">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-6 gap-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4 transition-colors">
          Welcome to My React App 🚀
        </h2>

        {/* Button */}
        <Button text="Click Me" color="green" onClick={handleClick} />

        {/* ✅ Task Manager section */}
        <TaskManager />

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Card
            title="Learning React"
            description="React helps you build reusable UI components efficiently."
            image="../src/assets/React.jpg"
          />
          <Card
            title="Styling with Tailwind"
            description="Tailwind CSS allows rapid styling with utility-first classes."
            image="../src/assets/tailwind.jpg"
          />
          <Card
            title="Reusable Components"
            description="Components make your app easier to maintain and scale."
            image="../src/assets/React-JS-component-1.png"
          />
        </div>

        {/* ✅ API Data Section */}
        <ApiData />
      </main>

      <Footer />
    </div>
  );
}

export default App;
