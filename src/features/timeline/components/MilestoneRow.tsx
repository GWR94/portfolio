import type { Milestone } from "../types/milestone";
import { TIMELINE_ROW_GAP, type GraphMetrics } from "../layout";
import MilestoneContent from "./MilestoneContent";
import MilestoneGraph from "./MilestoneGraph";

interface MilestoneRowProps {
  milestone: Milestone;
  index: number;
  milestones: Milestone[];
  expanded: string | null;
  onToggle: (id: string) => void;
  metrics: GraphMetrics;
}

const MilestoneRow = ({
  milestone,
  index,
  milestones,
  expanded,
  onToggle,
  metrics,
}: MilestoneRowProps) => {
  const isExpanded = expanded === milestone.id;
  const handleToggle = () => onToggle(isExpanded ? "" : milestone.id);

  return (
    <div
      className="relative flex w-full items-stretch transition hover:bg-white/2"
      style={{ gap: TIMELINE_ROW_GAP }}
    >
      <MilestoneGraph
        milestone={milestone}
        index={index}
        milestones={milestones}
        isExpanded={isExpanded}
        onToggle={handleToggle}
        metrics={metrics}
      />
      <MilestoneContent
        milestone={milestone}
        isExpanded={isExpanded}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default MilestoneRow;
