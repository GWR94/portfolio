import Badge from "@shared/Badge";
import type { Milestone } from "../types/milestone";
import { colorForTrack } from "../layout";

interface MilestoneDetailsProps {
  milestone: Milestone;
  isExpanded: boolean;
  accentColor?: string;
  accentWidth?: number;
  className?: string;
}

const MilestoneDetails = ({
  milestone,
  isExpanded,
  accentColor,
  accentWidth = 2,
  className = "",
}: MilestoneDetailsProps) => {
  const isBreak = milestone.track === 4;
  const color =
    accentColor ?? (isBreak ? "rgba(255, 255, 255, 0.35)" : colorForTrack(milestone.track));

  return (
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div
          className={`mt-3 rounded-r bg-black/30 p-3 ${className}`}
          style={
            accentWidth > 0
              ? { borderLeft: `${accentWidth}px solid ${color}` }
              : undefined
          }
        >
          <p
            className={`mb-3 text-xs leading-relaxed md:text-sm ${
              isBreak ? "text-white/55" : "text-white/75"
            }`}
          >
            {milestone.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {milestone.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-2 py-0.5 text-[10px] md:text-[11px]"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneDetails;
