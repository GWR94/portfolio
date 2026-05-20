export const BUTTON_VARIANTS = {
  primary:
    "border-primary/50 bg-primary text-white shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:border-primary hover:bg-primary-light",
  secondary:
    "border-secondary/60 bg-secondary/10 text-secondary-foreground shadow-[0_8px_24px_rgba(236,72,153,0.2)] hover:border-secondary-light hover:bg-secondary/20",
  ghost: "border-white/20 bg-transparent text-white/85 hover:border-white/45 hover:bg-white/5",
  danger:
    "border-danger/60 bg-danger/10 text-danger-foreground shadow-[0_8px_24px_rgba(239,68,68,0.22)] hover:border-danger-light hover:bg-danger/20",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
