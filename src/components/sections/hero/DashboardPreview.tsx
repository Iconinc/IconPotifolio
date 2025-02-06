"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const DashboardPreview = () => {
  const floatingAnimation: Variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const topDecorativeAnimation: Variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotate: -10,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 1.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const leftDecorativeAnimation: Variants = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.6,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative mt-0 md:mt-32 order-first lg:order-last"
    >
      <motion.div
        variants={topDecorativeAnimation}
        className="absolute -top-12 sm:-top-20 right-0 w-full z-0 hidden md:block"
      >
        <Image
          src="/images/Frame 12.svg"
          alt="Decorative Top Image"
          width={1000}
          height={500}
          className="object-contain max-w-full"
        />
      </motion.div>
      <motion.div
        variants={leftDecorativeAnimation}
        className="absolute -left-12 sm:-left-24 w-24 sm:w-48 h-24 sm:h-48 z-0 hidden md:block"
      >
        <Image
          src="/images/Frame 11.svg"
          alt="Decorative Left Image"
          width={50}
          height={200}
          className="absolute object-contain max-w-full"
        />
      </motion.div>

      <motion.div
        variants={floatingAnimation}
        className="relative z-10 transform-gpu"
      >
        <motion.div
          className="backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
          whileHover={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            y: -8,
          }}
        >
          <Image
            src="/images/image.svg"
            alt="Dashboard Preview"
            width={800}
            height={500}
            className="rounded-xl w-full max-w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPreview;
