import { useState } from "react";


function Menu() {
  const [navLogo, setnavLogo] = useState();
    
    return (
      <>
      <div className="navbarSlide">
        <img 
            className="close" 
            src="" 
            alt="" 
        
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