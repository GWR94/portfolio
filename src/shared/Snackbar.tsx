import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";

export type SnackbarVariant = "success" | "error";

export interface SnackbarProps {
  message: string;
  variant: SnackbarVariant;
  onClose: () => void;
  durationMs?: number;
}

const variantStyles: Record<SnackbarVariant, string> = {
  success: "border-emerald-500/40 bg-emerald-950/90 text-emerald-50",
  error: "border-red-500/40 bg-red-950/90 text-red-50",
};

const Snackbar = ({ message, variant, onClose, durationMs = 4000 }: SnackbarProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, durationMs);
    return () => clearTimeout(timer);
  }, [message, variant, durationMs, onClose]);

  return createPortal(
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`fixed bottom-28 left-1/2 z-1300 flex w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2 items-start gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-md ${variantStyles[variant]}`}
    >
      {variant === "success" ? (
        <FiCheckCircle className="mt-0.5 shrink-0 text-lg text-emerald-400" aria-hidden />
      ) : (
        <FiAlertCircle className="mt-0.5 shrink-0 text-lg text-red-400" aria-hidden />
      )}
      <p className="flex-1 text-sm font-medium leading-snug">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="shrink-0 rounded p-0.5 opacity-70 transition hover:opacity-100"
      >
        <FiX className="text-lg" aria-hidden />
      </button>
    </motion.div>,
    document.body,
  );
};

export default Snackbar;
