import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useState } from "react";
import toDoImage from "../assets/todo.png";
import weatherImage from "../assets/weather.png";
import calcImage from "../assets/calculator.png";



function Projects() {
    const { scrollYProgress } = useScroll(); // Tracks vertical scroll progress
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        console.log(val);
    });  
    const [hovered, setHovered] = useState(false);

    const scale = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    const scalet = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    const scaleh = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    
    return (
      <>
      <div id="projects" className="container project-container">
        <div className="project-subcontainer">
            <p className="main_hi">Projects //</p>
            
            <div className="pro-img-container">
                {/* Wrap everything in a motion.div to detect hover */}
                <motion.div 
                    className="hover-area"
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    style={{ position: "relative", zIndex: 2 }}
                >
                    {/* Image that appears on hover */}
                    <motion.img 
                        className="pro-img" 
                        src={toDoImage}
                        alt="" 
                        initial={{ rotate: -20, scale: 0, opacity: 0 }}
                        animate={hovered ? { rotate: -10, scale: 1, opacity: 1 } : { rotate: -20, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            top: "-50%",
                            right: "0%",
                            transform: "translate(-50%, -50%)",
                            zIndex: -100, 
                            pointerEvents: "none", // So it doesn't block hover events
                            width: "250px",  /* Change width */
                            height: "auto" 
                        }}
                    />

                    {/* Project block triggers the hover effect */}
                    <div className="project-block">
                        <a href="https://todolistv1-smoky.vercel.app/" target="_blank" rel="noopener noreferrer">Daily To-Dos</a>
                        <div className="project-num">01</div>
                    </div>
                </motion.div>

                {/* Separator animation */}
                <motion.div 
                    style={{ scale: scale }}
                    className="seperator">
                </motion.div>
            </div>














            <div className="pro-img-container">
                <a className="pro-img-link" href="">
                    <img className="pro-img" src="" alt="" />
                </a>
                <div className="project-block">
                    <a href="https://weatherapp-react-one.vercel.app/" target="_blank" rel="noopener noreferrer">Weather App</a>
                    <div className="project-num">02</div>
                </div>
                <motion.div 
                    style={{ scale: scalet }}
                    className="seperator">
                </motion.div>
            </div>

            <div className="pro-img-container">
                <a className="pro-img-link" href="">
                    <img className="pro-img" src="" alt="" />
                </a>
                <div className="project-block">
                    <a href="https://calculator-taupe-zeta-28.vercel.app/" target="_blank" rel="noopener noreferrer">Calculator</a>
                    <div className="project-num">03</div>
                </div>
                <motion.div 
                    style={{ scale: scaleh }}
                    className="seperator">
                </motion.div>
            </div>
            
        </div>
      </div>
      
      
      </>
    )
  }
  
  export default Projects;