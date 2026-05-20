import { useState } from "react";
import { milestones } from "../data/milestones.data";
import MilestoneRow from "./MilestoneRow";
import TrackAxis from "./TrackAxis";

const TechnicalJourney = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpanded(id || null);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10 md:pl-6">
        <p className="font-mono text-xs font-extrabold tracking-[0.16em] text-primary/70">
          ~/portfolio/technical-evolution --graph
        </p>
        <h2 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">
          Technical History
        </h2>
      </div>

      <div className="relative">
        <TrackAxis />

        {milestones.map((milestone, index) => (
          <MilestoneRow
            key={milestone.id}
            milestone={milestone}
            index={index}
            milestones={milestones}
            expanded={expanded}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnicalJourney;
