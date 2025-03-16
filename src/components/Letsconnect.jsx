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
                style={{ 
                    x: translateX,
                    overflow: "hidden"
                 }} 
                className="letsconnect-first"
            >
                letsconnectletsconnect
            </motion.div>

            <motion.div
                style={{ 
                    x: translate,
                    overflow: "hidden"
                 }} 
                className="letsconnect-second"
            >
                letsconnectletsconnect
            </motion.div>
        </div>
    );
}

export default Letsconnect;