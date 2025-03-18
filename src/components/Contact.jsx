
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

      <div id="contact" className="container connect-container">
        <p className="main_hi">Contact //</p>
    
        <div>
            <p className="contact-text">I’m always open to exciting opportunities and collaborations. Let’s talk!</p>
            <div className="mail">
                <a href="mailto:sophienora92@gmail.com" className="mail-link">sophienora92@gmail.com →</a>
                
            </div>

            <ul className="connect-list">
                <li className="connect-item">
                    <div>
                        <a href="https://codepen.io/zofienora" className="connect-link" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="img-logo"
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
                                padding: ".5em"
                            }}
                            />
                        </a>
                    </div>
                </li>

                <li className="connect-item">
                    <div>
                        <a href="https://github.com/zofienora" className="connect-link" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="img-logo"
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
                                padding: ".5em"
                            }}
                            />
                        </a>
                    </div>
                </li>

                <li className="connect-item">
                    <div>
                        <a href="https://www.linkedin.com/in/sophie-nora-keil-39332a325/" className="connect-link" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="img-logo"
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
                                padding: ".5em"
                            }}
                            />
                        </a>
                    </div>
                </li>
                
            </ul>

            <p className="footerDetails">&copy; Sophie Nora Keil<br/>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>

      </div>
      
      </>
    )
  }
  
  export default Contact