import { motion } from "framer-motion";
import { ProcessItemProps } from "@/types";

const ProcessItem = ({ item, index }: ProcessItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full relative"
    >
      <div className="md:hidden">
        <div className="absolute left-4 top-6 bottom-0 w-[1px] bg-[#2770F4]/10">
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full bg-[#2770F4]"
          />
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute left-2.5 h-6 w-6 rounded-full border-2 border-[#2770F4] bg-white flex items-center justify-center z-10"
        >
          {item.status === "completed" && (
            <div className="h-3 w-3 rounded-full bg-[#2770F4]" />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="ml-12 mt-4"
        >
          <div className="rounded-xl bg-white p-4 duration-300">
            <h3 className="mb-3 text-lg font-medium text-[#2770F4]">
              {item.title}
            </h3>
            <p className="mb-4 text-[#647197] text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="space-y-2">
              {item.tasks.map((task, taskIndex) => (
                <motion.div
                  key={taskIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + taskIndex * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1.5 h-2 w-2 rounded-full border border-[#2770F4] bg-white p-0.5">
                    <div className="h-full w-full rounded-full bg-[#2770F4]" />
                  </div>
                  <span className="text-[#647197] text-xs">{task}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden md:block">
        <div className="absolute left-1/2 top-10 bottom-0 w-[2px] bg-[#2770F4]/10 -translate-x-1/2">
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full bg-[#2770F4]"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="h-8 w-8 rounded-full border-2 border-[#2770F4] bg-white flex items-center justify-center z-10"
          >
            {item.status === "completed" && (
              <div className="h-4 w-4 rounded-full bg-[#2770F4]" />
            )}
          </motion.div>
        </div>

        <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
          <div
            className={`w-[calc(50%-2rem)] ${
              isEven ? "pr-12 lg:pr-16" : "pl-12 lg:pl-16"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl bg-white p-6 duration-300 mt-10"
            >
              <h3 className="mb-4 text-xl md:text-2xl font-medium text-[#2770F4]">
                {item.title}
              </h3>
              <p className="mb-6 text-[#647197] text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
              <div className="space-y-3">
                {item.tasks.map((task, taskIndex) => (
                  <motion.div
                    key={taskIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + taskIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-3 w-3 rounded-full border border-[#2770F4] bg-white p-0.5">
                      <div className="h-full w-full rounded-full bg-[#2770F4]" />
                    </div>
                    <span className="text-[#647197]">{task}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessItem;
