"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import ToolsShowcase from "./ToolsShowcase";

export default function Hero() {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
      background: "linear-gradient(90deg, #4D7FFF, #E387FF)",
      color: "#ffffff",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-44 md:pt-44 lg:pt-44 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(47.79deg, #F7F9FF 50.95%, rgba(163, 183, 247, 0.67) 61.87%, #E1B1DB 73.31%, #EBD5EE 84.57%)",
        }}
      />

      <div
        className="absolute top-0 left-0 h-full hidden md:block"
        style={{
          width: "20%",
          backgroundColor: "#FFFFFF",
        }}
      />

      <div className="container mx-auto flex-1 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.h1
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight"
            >
              Design.
            </motion.h1>
            <motion.h1
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
            >
              <span className="bg-gradient-to-r from-[#4D7FFF] to-[#E387FF] bg-clip-text font-normal text-transparent">
                Prototype.
              </span>
            </motion.h1>
            <motion.h1
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight"
            >
              Collaborate.
            </motion.h1>

            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg lg:text-xl text-gray-800 max-w-lg mx-auto lg:mx-0"
            >
              Create beautiful designs for websites, apps, and more, directly in
              your browser.
            </motion.p>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium mx-auto lg:mx-0 block lg:inline-block"
            >
              Let's Talk
            </motion.button>
          </div>
          <DashboardPreview />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.8,
            duration: 0.8,
            ease: "easeOut",
          },
        }}
        className="relative z-10 "
      >
        <ToolsShowcase />
      </motion.div>
    </section>
  );
}
