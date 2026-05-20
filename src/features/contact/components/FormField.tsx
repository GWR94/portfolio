import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

export const INPUT_CLASS =
  "w-full bg-transparent py-2 text-white outline-none placeholder:text-white/35";

const fieldShellBase =
  "relative block rounded-lg border px-3 pb-2 pt-3 transition-[border-color,background-color,box-shadow] duration-200";

const fieldShellDefault =
  "border-white/20 bg-black/20 focus-within:border-primary focus-within:shadow-[0_0_0_1px_rgba(99,102,241,0.25)]";

const fieldShellError =
  "border-danger/50 bg-danger/[0.06] focus-within:border-danger/70 focus-within:shadow-[0_0_0_1px_rgba(239,68,68,0.2)]";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ id, label, error, children }: FormFieldProps) => {
  const hasError = Boolean(error);
  const errorId = `${id}-error`;

  return (
    <div className="mb-5">
      <label
        className={`${fieldShellBase} ${hasError ? fieldShellError : fieldShellDefault}`}
        htmlFor={id}
      >
        <span
          className={`absolute -top-2 left-2 bg-background px-1 text-[11px] font-medium tracking-[0.04em] transition-colors ${
            hasError ? "text-danger-light" : "text-white/70"
          }`}
        >
          {label}
        </span>
        {children}
      </label>

      <AnimatePresence mode="popLayout">
        {hasError && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mt-2 flex items-start gap-2 overflow-hidden text-xs font-medium leading-snug text-danger-light"
          >
            <FiAlertCircle className="mt-0.5 shrink-0 text-sm text-danger" aria-hidden />
            <span>{error}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormField;
