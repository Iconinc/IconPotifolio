"use client";

import { motion } from "framer-motion";
import ExploreButton from "@/components/ui/ExploreButton";
import { contentData } from "@/lib/content";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="pt-10 overflow-hidden">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="mb-10 space-y-8">
          <ExploreButton text="Our services" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[#647197] max-w-3xl"
          >
            Unlock your business's full potential
          </motion.h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pt-4 w-full overflow-hidden">
          {contentData.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="absolute left-0 top-1/2 w-full overflow-hidden -z-10">
          <motion.div
            className="mx-auto max-w-[80vw] sm:max-w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#2770F4]/5 to-[#FF5BE1]/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
