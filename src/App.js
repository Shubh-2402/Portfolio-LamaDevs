import { useState } from "react";
import "./App.scss"
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Topbar from "./components/Topbar/Topbar";


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
