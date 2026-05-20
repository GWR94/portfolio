import React from "react";
import { motion } from "framer-motion";

interface PillarCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const PillarCard: React.FC<PillarCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="
        h-full rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm
        transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40
        hover:shadow-[0_20px_40px_-20px_rgb(var(--color-secondary-rgb)/0.35)]
      "
    >
      <div className="mb-3 flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-extrabold tracking-tight text-white text-center">
        {title}
      </h3>
      <p className="leading-relaxed text-white/65 text-center">{description}</p>
    </motion.div>
  );
};

export default PillarCard;
