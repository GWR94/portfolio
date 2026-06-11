import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  bentoPlacementClass,
  type BentoPlacement,
} from "./bentoLayout";

export interface ProjectTile {
  img: string;
  title: string;
  desc: string;
  href?: string;
  color: string;
  sourceCode: string;
  tags: string[];
  bento: BentoPlacement;
}

interface ProjectCardProps {
  tile: ProjectTile;
}

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] as const },
  },
} as const;

const ProjectCard: React.FC<ProjectCardProps> = ({ tile }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleView = () => {
    if (tile.href) {
      window.open(tile.href, "_blank", "noopener,noreferrer");
    }
  };

  const handleSource = () => {
    window.open(tile.sourceCode, "_blank", "noopener,noreferrer");
  };

  const isHero = tile.bento.rowSpan === 2;

  return (
    <motion.article
      variants={cardVariants}
      className={`
        group relative flex flex-col overflow-hidden rounded-xl
        border border-zinc-800/90 bg-zinc-925/55
        transition-[border-color,box-shadow] duration-200
        hover:border-zinc-600 hover:shadow-ide-card
        h-full
        ${bentoPlacementClass(tile.bento)}
      `}
      whileHover={
        prefersReducedMotion
          ? {}
          : { y: -2, transition: { duration: 0.15, ease: "easeOut" } }
      }
    >
      <div
        className={`relative overflow-hidden border-b border-zinc-900/80 ${
          isHero ? "min-h-0 flex-1" : "h-40 shrink-0"
        }`}
        style={{ backgroundColor: tile.color }}
      >
        <img
          src={
            typeof tile.img === "string" ? tile.img : (tile.img as { src: string }).src
          }
          alt={`Screenshot of ${tile.title}`}
          className={`opacity-95 saturate-110 transition-transform duration-200 ease-out group-hover:scale-[1.02] ${
            isHero
              ? "absolute inset-0 h-full w-full object-cover object-top"
              : "h-full w-full object-cover object-center"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/75 via-zinc-950/20 to-transparent" />
      </div>

      <div className="flex shrink-0 flex-col p-3.5 sm:p-4">
        <h3 className="mb-1 line-clamp-1 text-sm font-semibold tracking-tight text-zinc-100">
          {tile.title}
        </h3>
        <p className="mb-2 min-h-10 line-clamp-2 text-xs leading-snug text-zinc-400">
          {tile.desc}
        </p>

        <p className="line-clamp-1 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-500">
          {tile.tags.slice(0, 4).join(" • ")}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center gap-2.5 border-t border-zinc-800/80 pt-2.5">
          {tile.href && (
            <button
              onClick={handleView}
              className="
                text-[11px] font-medium text-zinc-300 transition-colors hover:text-zinc-100
                focus-visible:outline-none focus-visible:underline
              "
              type="button"
            >
              View
            </button>
          )}
          <button
            onClick={handleSource}
            className="
              text-[11px] font-medium text-zinc-400 transition-colors hover:text-zinc-100
              focus-visible:outline-none focus-visible:underline
            "
            type="button"
          >
            Source
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
