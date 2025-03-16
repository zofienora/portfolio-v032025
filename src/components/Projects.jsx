import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";


function Projects() {
    const { scrollYProgress } = useScroll(); // Tracks vertical scroll progress
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        console.log(val);
    })  

    const scale = useTransform(scrollYProgress, [0.5, 0.65], [0.1, 1]);
    const scalet = useTransform(scrollYProgress, [0.55, 0.7], [0.1, 1]);
    const scaleh = useTransform(scrollYProgress, [0.6, 0.75], [0.1, 1]);
    
    return (
      <>
      <div className="container project-container">
        <div className="project-subcontainer">
            <p className="main_hi">Projects //</p>
            
            <div className="pro-img-container">
                <a className="pro-img-link" href="">
                    <img className="pro-img" src="" alt="" />
                </a>
                <div className="project-block">
                    <a href="project">Daily To-Dos</a>
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
                    <a href="project">Weather App</a>
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
                    <a href="project">Calculator</a>
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