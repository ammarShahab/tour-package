import React from "react";
import { easeInOut, motion } from "motion/react";

const TextAnimation = () => {
  return (
    <motion.h1
      className="  text-gray-800 dark:text-white"
      initial={{ y: 20, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: easeInOut,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Our Featured Packages
    </motion.h1>
  );
};

export default TextAnimation;
