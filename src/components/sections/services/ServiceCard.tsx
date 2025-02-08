import { motion } from "framer-motion";
import { ServiceCardProps } from "@/types";

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group cursor-pointer relative flex flex-col space-y-4 rounded-2xl p-6 transition-colors duration-300 hover:bg-slate-200"
    >
      <div className="absolute -top-4 left-0 h-[1px] w-full bg-[#E5E7EB]" />

      <span className="text-xl font-medium text-[#1E1E1E]">
        {service.number}
      </span>

      <h3 className="text-2xl md:text-3xl lg:text-4xl">
        <span className="font-medium text-[#1E1E1E]">
          {service.title.start}{" "}
        </span>
        <span className="text-[#2770F4]">{service.title.highlight} </span>
        <span className="font-medium text-[#1E1E1E]">{service.title.end}</span>
      </h3>

      <p className="text-[#647197] text-lg leading-relaxed">
        {service.description}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
};

export default ServiceCard;
