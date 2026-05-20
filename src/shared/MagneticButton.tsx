import React, { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { BUTTON_VARIANTS, type ButtonVariant } from "@/styles/button.style";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  variant?: ButtonVariant;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  strength = 0.3,
  variant = "primary",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const variantClasses = BUTTON_VARIANTS[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-xl
        border text-sm font-semibold
        transition-colors duration-300
        ${variantClasses}
        focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
        cursor-pointer select-none
        ${className}
      `}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline">
        {content}
      </a>
    );
  }

  return content;
};

export default MagneticButton;
