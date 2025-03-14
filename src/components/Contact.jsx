
import { useState } from "react";
import codepenWhite from "../assets/codepen-white.png";
import codepenBlack from "../assets/codepen-black.png";
import githubWhite from "../assets/github-white.png";
import githubBlack from "../assets/github-black.png";
import linkedinWhite from "../assets/linkedin-white.png";
import linkedinBlack from "../assets/linkedin-black.png";

function Contact() {
    const [codepenlogo, setCodepenLogo] = useState(codepenWhite);
    const [githublogo, setGithubLogo] = useState(githubWhite);
    const [linkedinlogo, setLinkedinLogo] = useState(linkedinWhite);
    const [cpbackground, setCpBackground] = useState("grey");
    const [ghbackground, setGhBackground] = useState("grey");
    const [libackground, setLiBackground] = useState("grey");
    
    return (
      <>
      <div className="letsconnect">
        <div className="letsconnect-first">Let's Connect // Let's Connect // </div>
        <div className="letsconnect-second">Let's Connect // Let's Connect // </div>
      </div>

      <div className="container connect-container">
        <p className="main_hi">Contact //</p>
    
        <div>
            <div className="mail">
                <a href="mailto:sophienora92@gmail.com" className="mail-link">sophienora92@gmail.com →</a>
                
            </div>

            <ul className="connect-list">
                <li className="connect-item">
                    <div >
                        <a href="#" className="connect-link">
                            <img 
                            src={codepenlogo}
                            alt="codepen"
                            onMouseEnter={() => {
                                setCodepenLogo(codepenBlack),
                                setCpBackground("white");
                                
                            }} 
                            onMouseLeave={() => {
                                setCodepenLogo(codepenWhite)
                                setCpBackground("grey")
                            }}
                            style={{
                                backgroundColor: cpbackground,
                                borderRadius: "50%",
                                padding: "1em"
                            }}
                            />
                        </a>
                    </div>
                </li>

                <li className="connect-item">
                    <div>
                        <a href="#" className="connect-link">
                            <img 
                            src={githublogo} 
                            alt="GitHub" 
                            onMouseEnter={() => {
                                setGithubLogo(githubBlack),
                                setGhBackground("white");
                            }}
                            onMouseLeave={() => {
                                setGithubLogo(githubWhite),
                                setGhBackground("grey");
                            }}
                            style={{
                                backgroundColor: ghbackground,
                                borderRadius: "50%",
                                padding: "1em"
                            }}
                            />
                        </a>
                    </div>
                </li>

                <li className="connect-item">
                    <div>
                        <a href="#" className="connect-link">
                            <img 
                            src={linkedinlogo} 
                            alt="LinkedIn" 
                            onMouseEnter={() => {
                                setLinkedinLogo(linkedinBlack),
                                setLiBackground("white");
                            }}
                            onMouseLeave={() => {
                                setLinkedinLogo(linkedinWhite),
                                setLiBackground("grey");
                            }}
                            style={{
                                backgroundColor: libackground,
                                borderRadius: "50%",
                                padding: "1em"
                            }}
                            />
                        </a>
                    </div>
                </li>
                
            </ul>
        </div>

      </div>
      
      </>
    )
  }
  
  export default Contact;