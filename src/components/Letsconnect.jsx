import { motion } from "framer-motion";


function Letsconnect() {
    return (      
        <div className="letsconnect">
            <motion.div
                className="letsconnect-first"
                initial={{ x: "-100%", opacity: 0 }}  // Moves it further off-screen
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Let's Connect // Let's Connect //
            </motion.div>

            <motion.div
                className="letsconnect-second"
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Let's Connect // Let's Connect //
            </motion.div>
        </div>
    )
}

export default Letsconnect
