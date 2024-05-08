import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  const [dark, setDark] = useState(false);

  function handleToggle() {
    setDark(!dark);
  }

  return (
    <div id={dark ? "theme-dark" : "theme"}>
      <NavBar handleToggle={handleToggle} dark={dark} />
      <Home />
    </div>
  );
}

export default App;
