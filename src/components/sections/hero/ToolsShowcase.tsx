import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import contentData from "@/lib/content";

const ToolsShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const controls = useAnimation();

  const repeatedTools = [
    ...contentData.tools,
    ...contentData.tools,
    ...contentData.tools,
  ];

  const startScrolling = () => {
    controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    startScrolling();
  }, []);

  const handleToolClick = (index: number) => {
    setSelectedTool(selectedTool === index ? null : index);
    controls.stop();
  };

  return (
    <div className="w-full mt-8 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-14 md:py-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <motion.div
            className="flex"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="flex space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16"
              animate={controls}
              style={{ whiteSpace: "nowrap" }}
            >
              {repeatedTools.map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => {
                    setHoveredItem(index);
                    if (selectedTool === null) controls.stop();
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    if (selectedTool === null) startScrolling();
                  }}
                  onClick={() => handleToolClick(index)}
                >
                  <motion.div
                    className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        selectedTool === index
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
                          : "bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                      }`}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                    animate={{
                      boxShadow:
                        selectedTool === index
                          ? "0 10px 40px rgba(147, 51, 234, 0.3)"
                          : hoveredItem === index
                          ? "0 8px 30px rgba(0, 0, 0, 0.15)"
                          : "0 4px 20px rgba(0, 0, 0, 0.08)",
                      scale: selectedTool === index ? 1.1 : 1,
                      y: selectedTool === index ? -8 : 0,
                    }}
                  >
                    {tool.icon ? (
                      <motion.img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        animate={{
                          scale: selectedTool === index ? 1.1 : 1,
                          rotate: selectedTool === index ? 360 : 0,
                        }}
                        transition={{
                          rotate: { duration: 0.5 },
                          scale: { duration: 0.2 },
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-icon.svg";
                        }}
                      />
                    ) : (
                      <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600">
                        {tool.name}
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded md:rounded-lg text-xs sm:text-sm shadow-xl pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity:
                        hoveredItem === index || selectedTool === index ? 1 : 0,
                      y:
                        hoveredItem === index || selectedTool === index
                          ? 0
                          : 10,
                      scale: selectedTool === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tool.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black rotate-45" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsShowcase;
