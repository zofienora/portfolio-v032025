import { useState } from "react";
import menuWhite from "../assets/menu-white.png";
import menuGrey from "../assets/menu-grey.png";

function Navbar() {
  const [menuLogo, setMenuLogo] = useState(menuWhite);
    
    return (
      


      <>
      <div className="menubar">
        <img 
        src={menuLogo}
        onMouseEnter={() => {
          setMenuLogo(menuGrey);
        }}
        onMouseLeave={() => {
          setMenuLogo(menuWhite);
        }}
        className="menu-logo"
        alt="menu" />

        
     

      </div>
      
      </>
    )
  }
  
  export default Navbar;