import "./App.css";
import Header from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CardStack from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardStack />
    </div>
  );
}

export default App;
