import { trackColors, type GraphMetrics } from "../layout";

const TRACK_LABELS = [
  { label: "EDU", track: 0 },
  { label: "PRO", track: 1 },
  { label: "WEB3", track: 2 },
] as const;

interface TrackAxisProps {
  metrics: GraphMetrics;
}

/** Faint vertical guides — must sit inside a `relative` timeline wrapper */
export const TrackGuides = ({ metrics }: TrackAxisProps) => {
  const { graphWidth, getX } = metrics;

  return (
    <svg
      className="h-full w-full overflow-visible"
      style={{ width: `${graphWidth}px` }}
      aria-hidden="true"
    >
      {[0, 1, 2].map((track) => (
        <line
          key={`track-guide-${track}`}
          x1={getX(track)}
          y1="0"
          x2={getX(track)}
          y2="100%"
          stroke={trackColors[track]}
          strokeWidth="1.5"
          strokeOpacity="0.12"
        />
      ))}
    </svg>
  );
};

export const TrackLabels = ({ metrics }: TrackAxisProps) => {
  const { graphWidth, getX } = metrics;

  return (
    <div className="relative z-10 mb-3 flex min-w-0">
      <div className="relative h-4 shrink-0" style={{ width: `${graphWidth}px` }}>
        {TRACK_LABELS.map(({ label, track }) => (
          <span
            key={label}
            className="absolute -translate-x-1/2 font-mono text-[9px] font-extrabold tracking-[0.14em] md:text-[10px]"
            style={{ left: `${getX(track)}px`, color: trackColors[track] }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="min-w-0 flex-1" />
    </div>
  );
};

const TrackAxis = ({ metrics }: TrackAxisProps) => <TrackLabels metrics={metrics} />;

export default TrackAxis;
