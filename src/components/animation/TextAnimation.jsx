import React from "react";
import { easeInOut, motion } from "motion/react";
import useSystemTheme from "../../assets/hooks/useSystemTheme";

const TextAnimation = () => {
  useSystemTheme();
  return (
    <motion.h1
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
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
