import { useState } from "react";
import { milestones } from "../data/milestones.data";
import { useTimelineGraphMetrics } from "../hooks/useTimelineGraphMetrics";
import { isDesktopGraphMetrics, TIMELINE_STACK_WIDTH } from "../layout";
import MilestoneRow from "./MilestoneRow";
import { TrackGuides, TrackLabels } from "./TrackAxis";

const TechnicalJourney = () => {
  const metrics = useTimelineGraphMetrics();
  const isDesktop = isDesktopGraphMetrics(metrics);
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpanded(id || null);
  };

  return (
    <section className="mx-auto max-w-6xl py-12 md:px-6 md:py-16">
      <div className="mb-10 px-6 text-center">
        <p className="font-mono text-xs font-extrabold tracking-[0.16em] text-primary/70">
          ~/portfolio/technical-evolution --graph
        </p>
        <h2 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">
          Technical History
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
          Click any node on the timeline to see more detail about that stage.
        </p>
      </div>

      <div
        className="overflow-x-auto pb-1 md:overscroll-x-contain [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
        aria-label="Technical history timeline"
      >
        <div
          key={isDesktop ? "desktop" : "mobile"}
          className="mx-auto flex flex-col"
          style={{
            width: isDesktop ? TIMELINE_STACK_WIDTH : "max-content",
            maxWidth: "100%",
          }}
        >
          <TrackLabels metrics={metrics} />

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 left-0 z-0"
              style={{ width: `${metrics.graphWidth}px` }}
              aria-hidden="true"
            >
              <TrackGuides metrics={metrics} />
            </div>

            {milestones.map((milestone, index) => (
              <MilestoneRow
                key={milestone.id}
                milestone={milestone}
                index={index}
                milestones={milestones}
                expanded={expanded}
                onToggle={handleToggle}
                metrics={metrics}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalJourney;
