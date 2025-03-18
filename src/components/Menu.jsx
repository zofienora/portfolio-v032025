import { useState } from "react";
import closeGrey from "../assets/close-grey.png";
import closeWhite from "../assets/close-white.png";


function Menu() {
  const [navLogo, setnavLogo] = useState(closeWhite);
    
    return (
      <>
      <div className="navbarSlide">
        <img 
            className="close" 
            src={navLogo}
            alt="Close Navgation" 
            onMouseEnter={() => {
                setnavLogo(closeGrey);
            }}
            onMouseLeave={() => {
                setnavLogo(closeWhite);
            }}
        
        />


        <ul className="navList">
            <li className="listItems"><a href="#" className="linkItems">Home</a></li>
            <li className="listItems"><a href="#" className="linkItems">About</a></li>
            <li className="listItems"><a href="#" className="linkItems">Projects</a></li>
            <li className="listItems"><a href="#" className="linkItems">Contact</a></li>
            <li className="listItems"><a href="#" className="linkItems">Code Laboratory</a></li>
        </ul>
      </div>
      </>
    )
  }
  
  export default Menu;