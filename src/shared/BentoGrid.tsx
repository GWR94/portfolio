import React, { type ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = "" }) => (
  <motion.div
    variants={gridVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className={`
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      auto-rows-fr gap-3
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export default BentoGrid;
