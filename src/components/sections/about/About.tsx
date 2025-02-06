"use client";

import ExploreButton from "@/components/ui/ExploreButton";
import contentData from "@/lib/content";
import { motion } from "framer-motion";

const About = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="about" className="pt-20 overflow-hidden">
      <div className="container mx-auto px-8 md:px-6 relative">
        <div className="mb-6 md:mb-10">
          <ExploreButton text="All about us" />
        </div>

        <div className="mb-6 md:mb-10">
          <div className="max-w-full md:max-w-[90%] lg:max-w-[85%]">
            <div className="flex flex-wrap leading-snug">
              {contentData.about.map((item, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={headingVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`mr-1 sm:mr-2 ${item.color} ${
                    item.weight || ""
                  } text-lg sm:text-2xl md:text-3xl lg:text-4xl`}
                >
                  {item.text}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-40 right-0 w-[80vw] max-w-[400px] h-[80vw] max-h-[400px] 
          rounded-full bg-gradient-to-r from-[#2770F4]/10 to-[#FF5BE1]/10 blur-3xl -z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default About;
