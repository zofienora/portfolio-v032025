import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";


function Projects() {
    const { scrollYProgress } = useScroll(); // Tracks vertical scroll progress
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        console.log(val);
    })  

    const scale = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    const scalet = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    const scaleh = useTransform(scrollYProgress, [0.4, 0.65], [0.1, 1]);
    
    return (
      <>
      <div id="projects" className="container project-container">
        <div className="project-subcontainer">
            <p className="main_hi">Projects //</p>
            
            <div className="pro-img-container">
                <a className="pro-img-link" href="">
                    <img className="pro-img" src="" alt="" />
                </a>
                <div className="project-block">
                    <a href="https://todolistv1-smoky.vercel.app/" target="_blank" rel="noopener noreferrer">Daily To-Dos</a>
                    <div className="project-num">01</div>
                </div>
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