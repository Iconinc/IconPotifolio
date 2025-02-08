"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ExploreButtonProps extends HTMLMotionProps<"button"> {
  text?: string;
  showDot?: boolean;
}

const ExploreButton = ({
  text = "Explore Case studies",
  showDot = true,
  className = "",
  ...props
}: ExploreButtonProps) => {
  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(39,112,244,1)] via-[rgba(255,91,225,0.3)] to-[rgba(185,207,247,1)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.button
        className={`
          relative rounded-full
          bg-[#F7F9FF]
          px-6 py-3
          text-base font-medium text-[#2770F4]
          m-[2px]
          ${className}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          <span>{text}</span>
          {showDot && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#2770F4] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2770F4]" />
            </span>
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default ExploreButton;
