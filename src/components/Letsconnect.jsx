import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useState } from "react";


function Letsconnect() {
    const { scrollYProgress } = useScroll(); // Tracks vertical scroll progress
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        console.log(val);
    })

  /*   const scale = useTransform(scrollYProgress, [0.65, 0.85], [0.5, 1]); */

    // Moves from -100% (offscreen left) to 0% (fully visible)
    const xTransform = useTransform(scrollYProgress, [0.3, 0.6], ["-100%", "0%"]);

    return (      
        <div className="letsconnect">
            <motion.div
                style={{ xTransform }}
                className="letsconnect-first"
            >
                Let's Connect //
            </motion.div>

            <motion.div
                style={{ xTransform }}
                className="letsconnect-second"
            >
                // Let's Connect
            </motion.div>
        </div>
    );
}

export default Letsconnect;