import './App.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Letsconnect from './components/Letsconnect';
import { useEffect } from "react";
import Menu from './components/Menu';

function App() {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Menu />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Letsconnect />
      <Contact />
    </>
  )
}

export default App;
