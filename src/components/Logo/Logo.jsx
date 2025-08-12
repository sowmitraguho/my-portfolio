// src/components/Logo.jsx
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer select-none"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-10 h-10"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#grad)"
          stroke="white"
          strokeWidth="4"
        />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fontSize="36"
          fontWeight="bold"
          fill="white"
          dy=".3em"
        >
          S
        </text>
      </svg>
     
    </motion.div>
  );
}
