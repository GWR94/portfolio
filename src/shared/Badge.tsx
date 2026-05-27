import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-white/[0.06] text-white/60 border border-white/[0.08]",
  primary:
    "bg-primary/10 text-primary-light border border-primary/20",
  secondary:
    "bg-secondary/10 text-secondary-light border border-secondary/20",
  outline:
    "bg-transparent text-white/50 border border-white/10",
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => (
  <span
    className={`
      inline-flex items-center px-2.5 py-0.5 rounded-md
      text-xs font-medium font-mono tracking-wide
      ${variantStyles[variant]}
      ${className}
    `}
  >
    {children}
  </span>
);

export default Badge;
