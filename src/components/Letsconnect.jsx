import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";


function Letsconnect() {
    const { scrollYProgress } = useScroll(); // Tracks vertical scroll progress
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        console.log(val);
    })  

    const translateX = useTransform(scrollYProgress, [0.7, 0.9], ["-100%", "0%"]);
    const translate = useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]);

    return (      
        <div className="letsconnect">
            <motion.div
                style={{ x: translateX }} 
                className="letsconnect-first"
            >
                Let's Connect //
            </motion.div>

            <motion.div
                style={{ x: translate }} 
                className="letsconnect-second"
            >
                // Let's Connect
            </motion.div>
        </div>
    );
}

export default Letsconnect;