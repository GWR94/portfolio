import type { Milestone } from "../types/milestone";
import { colorForTrack } from "../layout";
import MilestoneDetails from "./MilestoneDetails";

interface MilestoneContentProps {
  milestone: Milestone;
  isExpanded: boolean;
  onToggle: () => void;
}

const MilestoneContent = ({ milestone, isExpanded, onToggle }: MilestoneContentProps) => {
  const isBreak = milestone.track === 4;
  const track = isBreak ? 1 : milestone.track;
  const color = colorForTrack(track);

  return (
    <div className="min-w-0 flex-1 cursor-pointer py-1.5" onClick={onToggle}>
      <div className="flex min-h-12 flex-col justify-center gap-0">
        <div className="flex items-baseline gap-x-2 leading-none md:gap-x-2.5">
          <span
            className={`min-w-0 text-sm font-extrabold leading-snug md:text-base ${
              isBreak ? "text-white/40" : "text-white"
            }`}
          >
            {milestone.title}
          </span>
        </div>
        {milestone.subtitle ? (
          <p
            className={`mt-0.5 font-mono text-[9px] font-bold leading-tight tracking-[0.08em] md:text-[10px] ${
              isBreak ? "text-white/35" : ""
            }`}
            style={isBreak ? undefined : { color }}
          >
            {milestone.subtitle.toUpperCase()}
            <span
              className={`shrink-0 font-mono text-[9px] tabular-nums ${
                isBreak ? "text-white/30" : "text-white/45"
              }`}
            >
              • {milestone.year}
            </span>
          </p>
        ) : null}
      </div>

      <MilestoneDetails milestone={milestone} isExpanded={isExpanded} />
    </div>
  );
};

export default MilestoneContent;
