import type { Milestone } from "../types/milestone";
import {
  BREAK_CENTER_Y,
  BREAK_GAP_HALF,
  BREAK_TO_CURVE_GAP,
  BREAK_TOP_CAP_Y,
  buildBranchPath,
  CURVE_CONTROL_Y_OFFSET,
  CURVE_START_Y,
  CURVE_TARGET_Y,
  getX,
  GRAPH_WIDTH,
  NODE_CENTER_Y,
  NODE_SIZE,
  trackColors,
} from "./layout";

interface MilestoneGraphProps {
  milestone: Milestone;
  index: number;
  milestones: Milestone[];
  isExpanded: boolean;
  onToggle: () => void;
}

const MilestoneGraph = ({
  milestone,
  index,
  milestones,
  isExpanded,
  onToggle,
}: MilestoneGraphProps) => {
  const isLast = index === milestones.length - 1;
  const isFirst = index === 0;
  const nextMilestone = milestones[index + 1];
  const isBreakRow = milestone.track === 4;
  const nextIsBreak = nextMilestone?.track === 4;
  const color = trackColors[milestone.track] ?? "#94a3b8";
  const currentX = getX(milestone.track);

  return (
    <div className="relative shrink-0" style={{ width: `${GRAPH_WIDTH}px` }}>
      <svg className="absolute left-0 top-0 h-full w-full overflow-visible">
        {!isBreakRow && !isFirst && (
          <line
            x1={getX(milestone.track)}
            y1="-1"
            x2={getX(milestone.track)}
            y2={NODE_CENTER_Y}
            stroke={color}
            strokeWidth="3"
          />
        )}
        {milestone.id === "hash-link" && (
          <line
            x1={getX(0)}
            y1="-1"
            x2={getX(0)}
            y2="101%"
            stroke={trackColors[0]}
            strokeWidth="3"
          />
        )}

        {!isLast && !isBreakRow && nextMilestone && (
          <>
            {milestone.id === "hash-fe1" ? (
              <>
                <path
                  d={buildBranchPath(1, 0, CURVE_TARGET_Y)}
                  stroke={trackColors[0]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(0)}
                  y1={CURVE_TARGET_Y}
                  x2={getX(0)}
                  y2="101%"
                  stroke={trackColors[0]}
                  strokeWidth="3"
                />
                <path
                  d={buildBranchPath(1, 2, CURVE_TARGET_Y)}
                  stroke={trackColors[2]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(2)}
                  y1={CURVE_TARGET_Y}
                  x2={getX(2)}
                  y2="101%"
                  stroke={trackColors[2]}
                  strokeWidth="3"
                />
              </>
            ) : milestone.id === "hash-link" ? (
              <line
                x1={getX(2)}
                y1={NODE_CENTER_Y}
                x2={getX(2)}
                y2="101%"
                stroke={trackColors[1]}
                strokeWidth="3"
              />
            ) : milestone.id === "hash-int" && nextIsBreak ? (
              <>
                <line
                  x1={getX(2)}
                  y1="-1"
                  x2={getX(2)}
                  y2={NODE_CENTER_Y}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                />
                <path
                  d={buildBranchPath(0, 1, CURVE_TARGET_Y)}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={buildBranchPath(2, 1, CURVE_TARGET_Y)}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(1)}
                  y1={CURVE_TARGET_Y}
                  x2={getX(1)}
                  y2="101%"
                  stroke={trackColors[1]}
                  strokeWidth="3"
                />
              </>
            ) : nextIsBreak ? (
              milestone.track === 1 ? (
                <line
                  x1={getX(1)}
                  y1={NODE_CENTER_Y}
                  x2={getX(1)}
                  y2="101%"
                  stroke={trackColors[1]}
                  strokeWidth="3"
                />
              ) : (
                <path
                  d={buildBranchPath(milestone.track, 1, BREAK_TOP_CAP_Y)}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              )
            ) : nextMilestone.track === milestone.track ? (
              <line
                x1={getX(milestone.track)}
                y1={NODE_CENTER_Y}
                x2={getX(milestone.track)}
                y2="101%"
                stroke={color}
                strokeWidth="3"
              />
            ) : (
              <>
                <path
                  d={buildBranchPath(
                    milestone.track,
                    nextMilestone.track,
                    CURVE_TARGET_Y,
                  )}
                  stroke={trackColors[nextMilestone.track]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(nextMilestone.track)}
                  y1={CURVE_TARGET_Y}
                  x2={getX(nextMilestone.track)}
                  y2="101%"
                  stroke={trackColors[nextMilestone.track]}
                  strokeWidth="3"
                />
              </>
            )}
          </>
        )}
      </svg>

      {isBreakRow ? (
        <svg
          className="absolute left-0 top-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {(() => {
            const breakNextTrack =
              nextMilestone && nextMilestone.track !== 4 ? nextMilestone.track : null;
            const shouldCurveOutOfBreak = breakNextTrack !== null && breakNextTrack !== 1;
            const breakExitY = BREAK_CENTER_Y + BREAK_GAP_HALF;
            const breakCurveStartY = breakExitY + BREAK_TO_CURVE_GAP;
            const breakCurveTargetY = breakCurveStartY + (CURVE_TARGET_Y - CURVE_START_Y);
            const breakColor =
              breakNextTrack !== null ? trackColors[breakNextTrack] : trackColors[1];

            return (
              <>
                <line
                  x1={getX(1)}
                  y1="0"
                  x2={getX(1)}
                  y2={BREAK_CENTER_Y - BREAK_GAP_HALF}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                />
                <line
                  x1={getX(1) - 6}
                  y1={BREAK_CENTER_Y - BREAK_GAP_HALF}
                  x2={getX(1) + 6}
                  y2={BREAK_CENTER_Y - BREAK_GAP_HALF}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(1) - 6}
                  y1={BREAK_CENTER_Y + BREAK_GAP_HALF}
                  x2={getX(1) + 6}
                  y2={BREAK_CENTER_Y + BREAK_GAP_HALF}
                  stroke={trackColors[1]}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {shouldCurveOutOfBreak && breakNextTrack !== null ? (
                  <>
                    <path
                      d={`M ${getX(1)} ${breakExitY} L ${getX(1)} ${breakCurveStartY} C ${getX(1)} ${
                        breakCurveStartY + CURVE_CONTROL_Y_OFFSET
                      }, ${getX(breakNextTrack)} ${breakCurveTargetY - CURVE_CONTROL_Y_OFFSET}, ${getX(
                        breakNextTrack,
                      )} ${breakCurveTargetY}`}
                      stroke={breakColor}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <line
                      x1={getX(breakNextTrack)}
                      y1={breakCurveTargetY}
                      x2={getX(breakNextTrack)}
                      y2="100%"
                      stroke={breakColor}
                      strokeWidth="3"
                    />
                  </>
                ) : (
                  <line
                    x1={getX(1)}
                    y1={BREAK_CENTER_Y + BREAK_GAP_HALF}
                    x2={getX(1)}
                    y2="100%"
                    stroke={trackColors[1]}
                    strokeWidth="3"
                  />
                )}
              </>
            );
          })()}
        </svg>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className="absolute z-10 rounded-full border-2 border-white/45 transition hover:scale-125"
          style={{
            left: `${currentX - NODE_SIZE / 2}px`,
            top: `${NODE_CENTER_Y - NODE_SIZE / 2}px`,
            width: `${NODE_SIZE}px`,
            height: `${NODE_SIZE}px`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
          aria-label={`Toggle ${milestone.title}`}
          aria-expanded={isExpanded}
        />
      )}
    </div>
  );
};

export default MilestoneGraph;
