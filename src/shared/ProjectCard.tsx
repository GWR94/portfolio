import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface TechNarrative {
  challenge: string;
  viteReactLogic: string;
  nextAppRouterBridge: string;
  engineeringPrinciple: string;
}

export interface ProjectTile {
  img: string;
  title: string;
  desc: string;
  subtitle: string;
  href?: string;
  color: string;
  sourceCode: string;
  featured?: boolean;
  click?: boolean;
  tags: string[];
  gridSpan: "wide" | "normal";
  technicalNarrative?: TechNarrative;
}

interface ProjectCardProps {
  tile: ProjectTile;
  onClickAction?: () => void;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ tile, onClickAction }) => {
  const prefersReducedMotion = useReducedMotion();
  const [showTechLogic, setShowTechLogic] = useState(false);

  const handleView = () => {
    if (tile.click && onClickAction) {
      onClickAction();
    } else if (tile.href) {
      window.open(tile.href, "_blank", "noopener,noreferrer");
    }
  };

  const handleSource = () => {
    window.open(tile.sourceCode, "_blank", "noopener,noreferrer");
  };

  const isWide = tile.gridSpan === "wide";
  const hasNarrative = Boolean(tile.technicalNarrative);

  const narrativeItems = useMemo(() => {
    if (!tile.technicalNarrative) {
      return [];
    }

    return [
      { label: "Challenge", value: tile.technicalNarrative.challenge },
      { label: "Vite/React Logic", value: tile.technicalNarrative.viteReactLogic },
      {
        label: "Next.js App Router Bridge",
        value: tile.technicalNarrative.nextAppRouterBridge,
      },
      {
        label: "Principle",
        value: tile.technicalNarrative.engineeringPrinciple,
      },
    ];
  }, [tile.technicalNarrative]);

  return (
    <motion.article
      variants={cardVariants}
      className={`
        group relative flex flex-col overflow-hidden rounded-2xl
        border border-zinc-800/90 bg-zinc-925/55
        transition-[border-color,box-shadow,transform] duration-300
        hover:border-zinc-600 hover:shadow-ide-card
        ${isWide ? "sm:col-span-2" : ""}
      `}
      whileHover={prefersReducedMotion ? {} : { y: -3 }}
      transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="relative overflow-hidden border-b border-zinc-900/80">
        <img
          src={typeof tile.img === "string" ? tile.img : (tile.img as { src: string }).src}
          alt={`Screenshot of ${tile.title}`}
          className="h-56 w-full object-cover opacity-90 saturate-110 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-zinc-950/25 to-transparent" />
        <div className="absolute left-3 top-2 rounded border border-zinc-800 bg-zinc-950/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-terminal text-zinc-400">
          {tile.subtitle}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-base font-semibold tracking-tight text-zinc-200">{tile.title}</h3>
        <p className="mb-2 line-clamp-1 text-[11px] text-zinc-500">{tile.subtitle}</p>
        <p className="mb-3 line-clamp-2 flex-1 text-xs leading-relaxed text-zinc-400">{tile.desc}</p>

        <p className="mb-3 line-clamp-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
          {tile.tags.slice(0, isWide ? 4 : 3).join(" • ")}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-900 pt-2">
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
          {hasNarrative && (
            <button
              onClick={() => setShowTechLogic((prev) => !prev)}
              className="
                ml-auto text-[11px] font-medium text-brand-soft/90 transition-colors hover:text-brand-soft
                focus-visible:outline-none focus-visible:underline
              "
              type="button"
              aria-expanded={showTechLogic}
            >
              {showTechLogic ? "Hide Tech Logic" : "Tech Logic"}
            </button>
          )}
        </div>

        {hasNarrative && showTechLogic && (
          <div className="mt-3 space-y-3 rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
            {narrativeItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-terminal text-zinc-500">
                  {item.label}
                </p>
                <p className="text-xs leading-relaxed text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        {!hasNarrative && (
          <p className="mt-4 text-[11px] text-zinc-500">
            Technical narrative coming soon.
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
