import { motion } from "framer-motion";

function About() {
    
    return (
      <>
        <div id="about" className="container about">
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
                  I’m Nori, a frontend developer passionate about creating sleek, 
                  user-friendly web experiences. I love turning ideas into intuitive 
                  interfaces and continuously expanding my skills to stay ahead in modern web 
                  development. With certifications backing my growth, I’m always learning and 
                  refining my craft. I thrive in collaboration, enjoying the process of building and 
                  problem-solving with others.<br></br><br></br>

                  I get inspired by city walks—observing architecture, soaking in design, and 
                  letting music set the mood. 
                  Airports fascinate me—the movement, the energy, the sense of possibility. 
                  Outside of coding, I lift weights, and I’m always drawn to water. It moves, it rests—just like creativity.
              </h2>
          </motion.div>
        </div>
      </>
    )
  }
  
  export default About;