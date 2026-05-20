import { AnimatePresence, motion } from "framer-motion";
import type { Milestone } from "../types/milestone";
import { INDEXES, trackColors } from "./layout";

interface MilestoneContentProps {
  milestone: Milestone;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const MilestoneContent = ({
  milestone,
  index,
  isExpanded,
  onToggle,
}: MilestoneContentProps) => {
  const color = trackColors[milestone.track] ?? "#94a3b8";

  return (
    <div
      className={`flex-1 cursor-pointer py-1.5 ${index >= INDEXES.fe2 ? "md:pr-8" : ""}`}
      onClick={onToggle}
    >
      <div
        className="
          grid min-h-12 w-full items-center gap-x-3 gap-y-1
          md:grid-cols-[72px_420px_260px_64px]
        "
      >
        <span
          className="w-[72px] px-2 py-0.5 text-center font-mono text-xs font-bold uppercase tabular-nums"
          style={{ color }}
        >
          {milestone.id.split("-")[1].toUpperCase()}
        </span>
        <span className="w-[420px] text-base font-extrabold text-white">
          {milestone.title}
        </span>
        <span
          className="w-full px-2 py-0.5 text-left font-mono text-[10px] font-bold tracking-[0.08em]"
          style={{ color }}
        >
          {milestone.subtitle.toUpperCase()}
        </span>
        <span className="w-full text-right font-mono text-xs text-white/45 tabular-nums">
          {milestone.year}
        </span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden", width: "100%" }}
          >
            <div
              className="mt-3 rounded-r bg-black/30 p-3"
              style={{ borderLeft: `2px solid ${color}` }}
            >
              <p className="mb-3 text-sm leading-relaxed text-white/75">
                {milestone.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {milestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold"
                    style={{ color: trackColors[1] }}
                  >
                    #{skill.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MilestoneContent;
