import { milestones } from "./data/milestones.data";

export const TRACK_SPACING = 28;
export const GRAPH_WIDTH = 116;
/** Graph + 4-column content grid (72 + 420 + 260 + 64) and column gaps */
export const TIMELINE_MIN_WIDTH =
  GRAPH_WIDTH + 72 + 420 + 260 + 64 + 12;
export const ROW_HEIGHT = 48;
export const NODE_SIZE = 12;
export const NODE_CENTER_Y = ROW_HEIGHT / 2;
export const CURVE_DELAY_Y = 10;
export const CURVE_START_Y = NODE_CENTER_Y + CURVE_DELAY_Y;
export const CURVE_TARGET_Y = CURVE_START_Y + 18;
export const BREAK_TOP_CAP_Y = CURVE_TARGET_Y;
export const BREAK_CENTER_Y = 28;
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

export const getX = (track: number) => track * TRACK_SPACING + 40;

export const buildBranchPath = (fromTrack: number, toTrack: number, endY: number) => {
  const startX = getX(fromTrack);
  const endX = getX(toTrack);

  return `M ${startX} ${NODE_CENTER_Y} L ${startX} ${CURVE_START_Y} C ${startX} ${
    CURVE_START_Y + CURVE_CONTROL_Y_OFFSET
  }, ${endX} ${endY - CURVE_CONTROL_Y_OFFSET}, ${endX} ${endY}`;
};
