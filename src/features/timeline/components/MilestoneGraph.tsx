import type { Milestone } from "../types/milestone";
import {
  colorForTrack,
  desktopGraphMetrics,
  type GraphMetrics,
} from "../layout";

interface MilestoneGraphProps {
  milestone: Milestone;
  index: number;
  milestones: Milestone[];
  isExpanded: boolean;
  onToggle: () => void;
  metrics?: GraphMetrics;
}

const MilestoneGraph = ({
  milestone,
  index,
  milestones,
  isExpanded,
  onToggle,
  metrics = desktopGraphMetrics,
}: MilestoneGraphProps) => {
  const {
    graphWidth,
    nodeSize,
    strokeWidth,
    nodeCenterY,
    curveStartY,
    curveTargetY,
    curveControlYOffset,
    breakTopCapY,
    breakCenterY,
    breakGapHalf,
    breakToCurveGap,
    breakBarHalfWidth,
    getX,
    buildBranchPath,
    buildCurvePath,
  } = metrics;

  const isLast = index === milestones.length - 1;
  const isFirst = index === 0;
  const nextMilestone = milestones[index + 1];
  const isBreakRow = milestone.track === 4;
  const nextIsBreak = nextMilestone?.track === 4;
  const nodeColor = colorForTrack(milestone.track === 4 ? 1 : milestone.track);
  const currentX = getX(milestone.track === 4 ? 1 : milestone.track);

  const yJoin = -1;
  const yDown = "101%";
  const yDownBreak = "100%";

  return (
    <div className="relative shrink-0 self-stretch" style={{ width: `${graphWidth}px` }}>
      <svg className="absolute left-0 top-0 h-full w-full overflow-visible">
        {!isBreakRow && !isFirst && (
          <line
            x1={getX(milestone.track)}
            y1={yJoin}
            x2={getX(milestone.track)}
            y2={nodeCenterY}
            stroke={nodeColor}
            strokeWidth={strokeWidth}
          />
        )}
        {(milestone.id === "hash-int" ||
          milestone.id === "hash-web3" ||
          milestone.id === "hash-link") && (
          <line
            x1={getX(0)}
            y1={yJoin}
            x2={getX(0)}
            y2={milestone.id === "hash-int" ? nodeCenterY : yDown}
            stroke={colorForTrack(0)}
            strokeWidth={strokeWidth}
          />
        )}

        {!isLast && !isBreakRow && nextMilestone && (
          <>
            {milestone.id === "hash-link" && nextMilestone.id === "hash-int" ? (
              <line
                x1={getX(2)}
                y1={nodeCenterY}
                x2={getX(2)}
                y2={yDown}
                stroke={colorForTrack(1)}
                strokeWidth={strokeWidth}
              />
            ) : milestone.id === "hash-int" && nextMilestone.id === "hash-end" ? (
              <>
                <line
                  x1={getX(0)}
                  y1={nodeCenterY}
                  x2={getX(0)}
                  y2={curveStartY}
                  stroke={colorForTrack(0)}
                  strokeWidth={strokeWidth}
                />
                <line
                  x1={getX(2)}
                  y1={yJoin}
                  x2={getX(2)}
                  y2={curveStartY}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                />
                <path
                  d={buildCurvePath(0, 1, breakTopCapY)}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={buildCurvePath(2, 1, breakTopCapY)}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(1)}
                  y1={breakTopCapY}
                  x2={getX(1)}
                  y2={yDown}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                />
              </>
            ) : nextIsBreak ? (
              milestone.track === 1 ? (
                <line
                  x1={getX(1)}
                  y1={nodeCenterY}
                  x2={getX(1)}
                  y2={yDown}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                />
              ) : (
                <path
                  d={buildBranchPath(milestone.track, 1, breakTopCapY)}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
              )
            ) : nextMilestone.track === milestone.track ? (
              <line
                x1={getX(milestone.track)}
                y1={nodeCenterY}
                x2={getX(milestone.track)}
                y2={yDown}
                stroke={colorForTrack(milestone.track)}
                strokeWidth={strokeWidth}
              />
            ) : (
              <>
                <path
                  d={buildBranchPath(
                    milestone.track,
                    nextMilestone.track,
                    curveTargetY,
                  )}
                  stroke={colorForTrack(nextMilestone.track)}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(nextMilestone.track)}
                  y1={curveTargetY}
                  x2={getX(nextMilestone.track)}
                  y2={yDown}
                  stroke={colorForTrack(nextMilestone.track)}
                  strokeWidth={strokeWidth}
                />
              </>
            )}
          </>
        )}

      </svg>

      {isBreakRow ? (
        <>
        <svg
          className="absolute left-0 top-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {(() => {
            const breakNextTrack =
              nextMilestone && nextMilestone.track !== 4 ? nextMilestone.track : null;
            const shouldCurveOutOfBreak = breakNextTrack !== null && breakNextTrack !== 1;
            const breakExitY = breakCenterY + breakGapHalf;
            const isCareerChangeBreak = milestone.id === "hash-fe2";
            const breakCurveStartY =
              breakExitY + breakToCurveGap + (isCareerChangeBreak ? 6 : 0);
            const breakCurveTargetY =
              breakCurveStartY + (curveTargetY - curveStartY);
            const breakExitColor =
              breakNextTrack !== null ? colorForTrack(breakNextTrack) : colorForTrack(1);

            const branchFromBreak = (toTrack: number) => (
              <>
                <path
                  d={`M ${getX(1)} ${breakCurveStartY} C ${getX(1)} ${
                    breakCurveStartY + curveControlYOffset
                  }, ${getX(toTrack)} ${breakCurveTargetY - curveControlYOffset}, ${getX(
                    toTrack,
                  )} ${breakCurveTargetY}`}
                  stroke={colorForTrack(toTrack)}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1={getX(toTrack)}
                  y1={breakCurveTargetY}
                  x2={getX(toTrack)}
                  y2={yDown}
                  stroke={colorForTrack(toTrack)}
                  strokeWidth={strokeWidth}
                />
              </>
            );

            return (
              <>
                <line
                  x1={getX(1)}
                  y1={yJoin}
                  x2={getX(1)}
                  y2={breakCenterY - breakGapHalf}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                />
                <line
                  x1={getX(1) - breakBarHalfWidth}
                  y1={breakCenterY - breakGapHalf}
                  x2={getX(1) + breakBarHalfWidth}
                  y2={breakCenterY - breakGapHalf}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
                <line
                  x1={getX(1) - breakBarHalfWidth}
                  y1={breakCenterY + breakGapHalf}
                  x2={getX(1) + breakBarHalfWidth}
                  y2={breakCenterY + breakGapHalf}
                  stroke={colorForTrack(1)}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
                {isCareerChangeBreak ? (
                  <>
                    <line
                      x1={getX(1)}
                      y1={breakExitY}
                      x2={getX(1)}
                      y2={breakCurveStartY}
                      stroke={colorForTrack(1)}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                    />
                    {branchFromBreak(0)}
                    {branchFromBreak(2)}
                  </>
                ) : shouldCurveOutOfBreak && breakNextTrack !== null ? (
                  <>
                    <path
                      d={`M ${getX(1)} ${breakExitY} L ${getX(1)} ${breakCurveStartY} C ${getX(1)} ${
                        breakCurveStartY + curveControlYOffset
                      }, ${getX(breakNextTrack)} ${breakCurveTargetY - curveControlYOffset}, ${getX(
                        breakNextTrack,
                      )} ${breakCurveTargetY}`}
                      stroke={breakExitColor}
                      strokeWidth={strokeWidth}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <line
                      x1={getX(breakNextTrack)}
                      y1={breakCurveTargetY}
                      x2={getX(breakNextTrack)}
                      y2={yDownBreak}
                      stroke={breakExitColor}
                      strokeWidth={strokeWidth}
                    />
                  </>
                ) : (
                  <line
                    x1={getX(1)}
                    y1={breakCenterY + breakGapHalf}
                    x2={getX(1)}
                    y2={yDownBreak}
                    stroke={colorForTrack(1)}
                    strokeWidth={strokeWidth}
                  />
                )}
              </>
            );
          })()}
        </svg>
        <button
          type="button"
          onClick={onToggle}
          className="absolute z-10 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          style={{
            top: breakCenterY - breakGapHalf - 4,
            left: getX(1) - breakBarHalfWidth - 4,
            width: breakBarHalfWidth * 2 + 8,
            height: breakGapHalf * 2 + 8,
          }}
          aria-label={`Toggle ${milestone.title}`}
          aria-expanded={isExpanded}
        />
        </>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className="absolute z-10 rounded-full border-2 border-white/45 transition hover:scale-125"
          style={{
            left: `${currentX - nodeSize / 2}px`,
            top: `${nodeCenterY - nodeSize / 2}px`,
            width: `${nodeSize}px`,
            height: `${nodeSize}px`,
            backgroundColor: nodeColor,
            boxShadow: `0 0 10px ${nodeColor}`,
          }}
          aria-label={`Toggle ${milestone.title}`}
          aria-expanded={isExpanded}
        />
      )}
    </div>
  );
};

export default MilestoneGraph;
