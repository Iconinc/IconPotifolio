"use client";

import { motion } from "framer-motion";
import ExploreButton from "@/components/ui/ExploreButton";
import { contentData } from "@/lib/content";
import ProcessItem from "./ProcessItem";

const Process = () => {
  return (
    <section
      id="process"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 md:mb-20 space-y-6 sm:space-y-8">
          <ExploreButton text="Our process" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#647197] max-w-6xl"
          >
            The project life cycle section delineates the pivotal phases a
            project traverses
          </motion.h2>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {contentData.process.map((item, index) => (
            <ProcessItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          className="absolute right-0 top-1/3 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-gradient-to-r from-[#2770F4]/5 to-[#FF5BE1]/5 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: 0,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute left-0 bottom-1/3 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-gradient-to-r from-[#FF5BE1]/5 to-[#2770F4]/5 blur-3xl -z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: 0,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default Process;
