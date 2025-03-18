import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import closeGrey from "../assets/close-grey.png";
import closeWhite from "../assets/close-white.png";

function Menu({ isOpen, toggleMenu }) {
  const [navLogo, setnavLogo] = useState(closeWhite);

  return (
    <>
      <div className={`navbarSlide ${isOpen ? "show" : ""}`}>
        <img 
          className="close" 
          src={navLogo}
          alt="Close Navigation" 
          onMouseEnter={() => setnavLogo(closeGrey)}
          onMouseLeave={() => setnavLogo(closeWhite)}
          onClick={toggleMenu} // Close sidebar on click
        />

<ul className="navList">
          <li className="listItems">
            <Link smooth to="#header" className="linkItems" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="listItems">
            <Link smooth to="#about" className="linkItems" onClick={toggleMenu}>About</Link>
          </li>
          <li className="listItems">
            <Link smooth to="#projects" className="linkItems" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="listItems">
            <Link smooth to="#contact" className="linkItems" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="listItems">
            <Link smooth to="#" className="linkItems" onClick={toggleMenu}>Code Laboratory</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
