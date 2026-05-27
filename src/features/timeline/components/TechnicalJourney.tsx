import { useState } from "react";
import { milestones } from "../data/milestones.data";
import { TIMELINE_MIN_WIDTH } from "../layout";
import MilestoneRow from "./MilestoneRow";
import TrackAxis from "./TrackAxis";

const TechnicalJourney = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpanded(id || null);
  };

  return (
    <section className="mx-auto max-w-6xl px-0 py-12 md:px-6 md:py-16">
      <div className="mb-10 px-6 md:pl-6 md:pr-0">
        <p className="font-mono text-xs font-extrabold tracking-[0.16em] text-primary/70">
          ~/portfolio/technical-evolution --graph
        </p>
        <h2 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">
          Technical History
        </h2>
      </div>

      <div
        className="overflow-x-auto overscroll-x-contain px-6 pb-1 [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
        aria-label="Technical history timeline — scroll horizontally to view all columns"
      >
        <div
          className="relative w-max min-w-full md:min-w-[var(--timeline-min)]"
          style={{ ["--timeline-min" as string]: `${TIMELINE_MIN_WIDTH}px` }}
        >
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
      </div>
    </section>
  );
};

export default TechnicalJourney;
