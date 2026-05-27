import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { gridVariants } from "./motion/variants";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

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
