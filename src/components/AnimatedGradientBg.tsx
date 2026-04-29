import { motion } from "framer-motion";

const AnimatedGradientBg = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute -inset-[50%] opacity-30"
      animate={{
        background: [
          "radial-gradient(circle at 20% 50%, hsl(217 91% 50% / 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 50%, hsl(200 95% 48% / 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 50% 20%, hsl(217 91% 50% / 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 20% 50%, hsl(217 91% 50% / 0.4) 0%, transparent 50%)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -inset-[50%] opacity-20"
      animate={{
        background: [
          "radial-gradient(circle at 80% 20%, hsl(200 95% 48% / 0.3) 0%, transparent 40%)",
          "radial-gradient(circle at 20% 80%, hsl(217 91% 60% / 0.3) 0%, transparent 40%)",
          "radial-gradient(circle at 80% 20%, hsl(200 95% 48% / 0.3) 0%, transparent 40%)",
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

export default AnimatedGradientBg;
