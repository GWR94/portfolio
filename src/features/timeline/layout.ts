import { milestones } from "./data/milestones.data";

export const TRACK_SPACING_MOBILE = 28;
export const TRACK_SPACING_DESKTOP = 36;
/** Room for EDU label (centered on track 0) without clipping the left edge */
export const GRAPH_PADDING_MOBILE = 28;
export const GRAPH_PADDING_DESKTOP = 40;
export const TIMELINE_ROW_GAP = 20;
/** Max content column width (matches `max-w-[22rem]` in MilestoneContent) */
export const TIMELINE_CONTENT_MAX = 352;

export const ROW_HEIGHT = 48;
export const NODE_SIZE = 12;
export const NODE_CENTER_Y = ROW_HEIGHT / 2;
export const CURVE_DELAY_Y = 10;
export const CURVE_START_Y = NODE_CENTER_Y + CURVE_DELAY_Y;
export const CURVE_TARGET_Y = CURVE_START_Y + 18;
export const BREAK_TOP_CAP_Y = CURVE_TARGET_Y;
export const BREAK_CENTER_Y = NODE_CENTER_Y;
export const BREAK_GAP_HALF = 8;
export const BREAK_TO_CURVE_GAP = 8;
export const CURVE_CONTROL_Y_OFFSET = 12;

export const INDEXES = {
  fe2: milestones.findIndex((m) => m.id === "hash-fe2"),
};

export const trackColors: Record<number, string> = {
  0: "#94a3b8",
  1: "#6366f1",
  2: "#38bdf8",
};

/** Line and node color for a segment that ends on this track index */
export const colorForTrack = (track: number) =>
  trackColors[track] ?? "#94a3b8";

export interface GraphMetrics {
  graphWidth: number;
  nodeSize: number;
  strokeWidth: number;
  nodeCenterY: number;
  curveStartY: number;
  curveTargetY: number;
  curveControlYOffset: number;
  breakTopCapY: number;
  breakCenterY: number;
  breakGapHalf: number;
  breakToCurveGap: number;
  breakBarHalfWidth: number;
  getX: (track: number) => number;
  buildBranchPath: (fromTrack: number, toTrack: number, endY: number) => string;
  buildCurvePath: (fromTrack: number, toTrack: number, endY: number) => string;
}

const createGraphMetrics = (config: {
  trackSpacing: number;
  padding: number;
  rowHeight: number;
  nodeSize: number;
  strokeWidth: number;
  breakBarHalfWidth: number;
}): GraphMetrics => {
  const nodeCenterY = config.rowHeight / 2;
  const compactRow = config.rowHeight < 44;
  const curveStartY = nodeCenterY + (compactRow ? 6 : 10);
  const curveTargetY = compactRow
    ? config.rowHeight - 3
    : curveStartY + 18;
  const curveControlYOffset = compactRow ? 8 : 12;
  const breakTopCapY = curveTargetY;
  const rowScale = config.rowHeight / ROW_HEIGHT;
  const breakCenterY = BREAK_CENTER_Y * rowScale;
  const breakGapHalf = BREAK_GAP_HALF * rowScale;
  const breakToCurveGap = BREAK_TO_CURVE_GAP * rowScale;
  const getX = (track: number) => track * config.trackSpacing + config.padding;
  const graphWidth = getX(2) + config.padding;

  const buildBranchPath = (fromTrack: number, toTrack: number, endY: number) => {
    const startX = getX(fromTrack);
    const endX = getX(toTrack);
    return `M ${startX} ${nodeCenterY} L ${startX} ${curveStartY} C ${startX} ${
      curveStartY + curveControlYOffset
    }, ${endX} ${endY - curveControlYOffset}, ${endX} ${endY}`;
  };

  const buildCurvePath = (fromTrack: number, toTrack: number, endY: number) => {
    const startX = getX(fromTrack);
    const endX = getX(toTrack);
    return `M ${startX} ${curveStartY} C ${startX} ${
      curveStartY + curveControlYOffset
    }, ${endX} ${endY - curveControlYOffset}, ${endX} ${endY}`;
  };

  return {
    graphWidth,
    nodeSize: config.nodeSize,
    strokeWidth: config.strokeWidth,
    nodeCenterY,
    curveStartY,
    curveTargetY,
    curveControlYOffset,
    breakTopCapY,
    breakCenterY,
    breakGapHalf,
    breakToCurveGap,
    breakBarHalfWidth: config.breakBarHalfWidth,
    getX,
    buildBranchPath,
    buildCurvePath,
  };
};

export const mobileGraphMetrics = createGraphMetrics({
  trackSpacing: TRACK_SPACING_MOBILE,
  padding: GRAPH_PADDING_MOBILE,
  rowHeight: ROW_HEIGHT,
  nodeSize: NODE_SIZE,
  strokeWidth: 3,
  breakBarHalfWidth: 6,
});

export const desktopGraphMetrics = createGraphMetrics({
  trackSpacing: TRACK_SPACING_DESKTOP,
  padding: GRAPH_PADDING_DESKTOP,
  rowHeight: ROW_HEIGHT,
  nodeSize: NODE_SIZE,
  strokeWidth: 3,
  breakBarHalfWidth: 6,
});

export const GRAPH_WIDTH = desktopGraphMetrics.graphWidth;

export const isDesktopGraphMetrics = (metrics: GraphMetrics) =>
  metrics === desktopGraphMetrics;

/** Fixed stack width so expand/collapse does not shift horizontal center */
export const TIMELINE_STACK_WIDTH =
  GRAPH_WIDTH + TIMELINE_ROW_GAP + TIMELINE_CONTENT_MAX;

/** @deprecated Prefer desktopGraphMetrics.getX */
export const getX = (track: number) => desktopGraphMetrics.getX(track);

/** @deprecated Prefer desktopGraphMetrics.buildBranchPath */
export const buildBranchPath = desktopGraphMetrics.buildBranchPath;

/** @deprecated Prefer desktopGraphMetrics.buildCurvePath */
export const buildCurvePath = desktopGraphMetrics.buildCurvePath;
