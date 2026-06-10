import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TravelTodoApp from "./components/TravelTodoApp";
import "./style/travel.css";

function App() {
  return (
    <div className="app">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main content (Travel Planner Todo App) */}
      <main>
        <TravelTodoApp />
      </main>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
