import './App.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Letsconnect from './components/Letsconnect';
import { useEffect, useState } from "react"; // ✅ Add useState here
import Menu from './components/Menu';

function App() {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // ⬇️ Add sidebar state
  const [isOpen, setIsOpen] = useState(false);

  // ⬇️ Function to toggle sidebar open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <Header />
      <About />
      <Projects />
      <Letsconnect />
      <Contact />
    </>
  )
}

export default App;
