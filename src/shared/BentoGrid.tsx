import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { gridVariants } from "./motion/variants";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  /** Use when grid mounts inside a panel (skip scroll-triggered reveal). */
  animateOnMount?: boolean;
}

const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className = "",
  animateOnMount = false,
}) => (
  <motion.div
    variants={gridVariants}
    initial="hidden"
    {...(animateOnMount
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, margin: "-60px" } })}
    className={`
      grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-12
      auto-rows-min gap-3 md:auto-rows-[20rem] md:gap-4
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export default BentoGrid;
