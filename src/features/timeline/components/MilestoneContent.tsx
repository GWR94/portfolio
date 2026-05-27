import { AnimatePresence, motion } from "framer-motion";
import type { Milestone } from "../types/milestone";
import { INDEXES, trackColors } from "../layout";

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
      className={`min-w-max flex-1 cursor-pointer py-1.5 md:min-w-0 ${index >= INDEXES.fe2 ? "md:pr-8" : ""}`}
      onClick={onToggle}
    >
      <div
        className="
          grid min-h-12 w-full min-w-0 items-center gap-x-3 gap-y-0.5
          grid-cols-[1fr_auto]
          md:grid-cols-[72px_420px_260px_64px] md:gap-x-3 md:gap-y-0
        "
      >
        <span
          className="hidden px-2 py-0.5 text-center font-mono text-xs font-bold uppercase tabular-nums md:block md:col-start-1 md:row-start-1"
          style={{ color }}
        >
          {milestone.id.split("-")[1].toUpperCase()}
        </span>
        <span className="col-start-1 row-start-1 min-w-0 text-sm font-extrabold leading-snug text-white md:col-start-2 md:text-base">
          {milestone.title}
        </span>
        {milestone.subtitle ? (
          <span
            className="col-span-2 col-start-1 row-start-2 min-w-0 font-mono text-[10px] font-bold leading-snug tracking-[0.06em] md:col-span-1 md:col-start-3 md:row-start-1 md:px-2 md:text-[10px] md:tracking-[0.08em]"
            style={{ color }}
          >
            {milestone.subtitle.toUpperCase()}
          </span>
        ) : null}
        <span className="col-start-2 row-start-1 shrink-0 text-right font-mono text-[10px] text-white/45 tabular-nums md:col-start-4 md:text-xs">
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
