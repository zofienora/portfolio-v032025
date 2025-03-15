import { motion } from "framer-motion";

function About() {
    
    return (
      <>
        <div className="container about">
          <motion.div 
            className="about-container"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1
              }
            }}
          
          >
              <p className="main_hi">About //</p>
              <h2 className="about-description">
                  Hi, I’m Nori, an aspiring frontend developer passionate about crafting sleek, 
                  user-friendly web experiences. I’m committed to lifelong learning, with certifications 
                  that showcase my dedication to growth and skill development. Always open to new learning experiences.
                  Beyond coding, city walks inspire me, airports and planes fascinate me, and the gym & water keep me 
                  balanced. I believe creativity comes from both movement and focus.
              </h2>
          </motion.div>
        </div>
      </>
    )
  }
  
  export default About;