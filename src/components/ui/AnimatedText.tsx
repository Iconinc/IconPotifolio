"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sentence =
  "Our works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.";

const words = sentence.split(" ");

const textContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AnimatedText = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <p className="text-[#7E869D] text-xl lg:text-3xl max-w-4xl">Loading...</p>
    );
  }

  return (
    <motion.p
      className="text-[#7E869D] text-xl lg:text-3xl max-w-4xl"
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;
