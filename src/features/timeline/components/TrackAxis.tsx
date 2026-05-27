import { GRAPH_WIDTH, getX, trackColors } from "../layout";

const TRACK_LABELS = [
  { label: "EDU", track: 0 },
  { label: "PRO", track: 1 },
  { label: "XTRA", track: 2 },
] as const;

const TrackAxis = () => (
  <>
    <svg
      className="pointer-events-none absolute left-0 top-0 h-full overflow-visible"
      style={{ width: `${GRAPH_WIDTH}px` }}
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

    <div className="mb-3 hidden min-w-0 md:flex">
      <div className="relative shrink-0" style={{ width: `${GRAPH_WIDTH}px` }}>
        {TRACK_LABELS.map(({ label, track }) => (
          <span
            key={label}
            className="absolute -translate-x-1/2 font-mono text-[10px] font-extrabold tracking-[0.14em]"
            style={{ left: `${getX(track)}px`, color: trackColors[track] }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="min-w-0 flex-1" />
    </div>
  </>
);

export default TrackAxis;
