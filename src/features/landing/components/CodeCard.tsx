import React from "react";
import { motion } from "framer-motion";
import { FiCloud, FiCode } from "react-icons/fi";

const stack = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "Express"],
  database: ["PostgreSQL", "Prisma"],
  tests: ["Vitest", "Playwright", "Testing Library"],
  deploy: ["Vercel", "AWS", "Docker"],
  payments: ["Stripe", "Webhooks", "PayPal"],
  ai: ["OpenAI API", "Prompt Engineering", "RAG"],
  quality: 100,
} as const;

const CodeCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 40, rotateY: -8 }}
    animate={{ opacity: 1, x: 0, rotateY: -8 }}
    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
  >
    <div
      className="
        glass-strong rounded-2xl p-6
        shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]
      "
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-white/30 font-mono">stack.config.ts</span>
      </div>

      <div className="font-mono text-sm leading-relaxed">
        <div className="text-white/30 mb-1">
          <span className="text-[#c678dd]">const</span>{" "}
          <span className="text-[#e5c07b]">stack</span>{" "}
          <span className="text-white/50">=</span>{" "}
          <span className="text-white/40">{"{"}</span>
        </div>
        {Object.entries(stack).map(([key, value]) => (
          <div key={key} className="pl-5 text-white/50">
            <span className="text-[#e06c75]">{key}</span>
            <span className="text-white/60">: </span>
            {Array.isArray(value) ? (
              value.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="text-[#98c379]">&quot;{item}&quot;</span>
                  {index < value.length - 1 ? (
                    <span className="text-white/60">, </span>
                  ) : null}
                </React.Fragment>
              ))
            ) : (
              <span className="text-[#d19a66]">{value}</span>
            )}
            <span className="text-white/60">,</span>
          </div>
        ))}
        <div className="text-white/40">
          {"}"} <span className="text-[#c678dd]">as const</span>;
        </div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="
        absolute -top-6 -right-6 p-3 rounded-xl
        bg-surface-light border border-white/8
        shadow-lg 
      "
    >
      <FiCloud className="size-5" aria-hidden />
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="
        absolute -bottom-4 -left-4 p-3 rounded-xl
        bg-surface-light border border-white/8
        shadow-lg
      "
    >
      <FiCode className="size-5" aria-hidden />
    </motion.div>
  </motion.div>
);

export default CodeCard;
