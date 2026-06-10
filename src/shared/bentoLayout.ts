/** Tailwind class maps for the 12-column bento grid at `lg` and up. */
export const BENTO_COL_SPAN: Record<number, string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
};

export interface BentoPlacement {
  /** Column span on the 12-column desktop grid. */
  colSpan: number;
  /** Optional row span for hero tiles (from `md` up). */
  rowSpan?: number;
}

export const bentoPlacementClass = ({ colSpan, rowSpan }: BentoPlacement) =>
  [
    "col-span-1",
    BENTO_COL_SPAN[colSpan] ?? "lg:col-span-4",
    rowSpan === 2 ? "md:row-span-2 lg:row-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");
