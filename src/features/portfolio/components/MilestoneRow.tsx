import type { Milestone } from "../types/milestone";
import MilestoneContent from "./MilestoneContent";
import MilestoneGraph from "./MilestoneGraph";

interface MilestoneRowProps {
  milestone: Milestone;
  index: number;
  milestones: Milestone[];
  expanded: string | null;
  onToggle: (id: string) => void;
}

const MilestoneRow = ({ milestone, index, milestones, expanded, onToggle }: MilestoneRowProps) => {
  const isExpanded = expanded === milestone.id;
  const handleToggle = () => onToggle(isExpanded ? "" : milestone.id);

  return (
    <div className="relative flex min-h-12 items-stretch transition hover:bg-white/2">
      <MilestoneGraph
        milestone={milestone}
        index={index}
        milestones={milestones}
        isExpanded={isExpanded}
        onToggle={handleToggle}
      />
      <MilestoneContent
        milestone={milestone}
        index={index}
        isExpanded={isExpanded}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default MilestoneRow;
