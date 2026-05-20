import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Badge from "./Badge";
import { FeaturedItem } from "@features/portfolio/data/tiles.data";

type ImageLike = string | { src?: string } | undefined | null;

const resolveImageSrc = (image: ImageLike): string =>
  typeof image === "string" ? image : (image?.src ?? "");

const FeaturedProject: React.FC<FeaturedItem> = ({
  label,
  title,
  description,
  image,
  bgImage,
  imageAlt,
  primaryAction,
  secondaryAction,
  reverse = false,
  tags,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="
        relative overflow-hidden rounded-2xl
        border border-white/6
        bg-white/2
        mb-6
      "
    >
      <img
        src={resolveImageSrc(bgImage)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.2] scale-105"
      />

      <div
        className={`
          absolute inset-0 z-1 pointer-events-none
          ${
            reverse
              ? "bg-linear-to-l from-background/95 via-background/70 to-transparent"
              : "bg-linear-to-r from-background/95 via-background/70 to-transparent"
          }
        `}
      />

      <div
        className={`
          relative z-2 flex min-h-[420px] md:min-h-[480px] flex-col
          px-6 md:px-12 py-12
        `}
      >
        <div
          className={`
            flex flex-1 items-center
            ${reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"}
            gap-8 md:gap-16
          `}
        >
          <div className={`flex-1 ${reverse ? "md:text-left" : ""} max-w-xl`}>
            <Badge variant="primary" className="mb-4">
              {label}
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.05] mb-4">
              {title}
            </h2>

            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={primaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-primary text-white text-sm font-medium
                  transition-all duration-300
                  hover:bg-primary-light hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
                "
              >
                {primaryAction.label}
                <FiArrowRight className="h-4 w-4" aria-hidden />
              </a>

              {secondaryAction && (
                <button
                  onClick={() =>
                    secondaryAction.href &&
                    window.open(secondaryAction.href, "_blank", "noopener,noreferrer")
                  }
                  disabled={secondaryAction.disabled}
                  className="
                    px-5 py-2.5 rounded-xl text-sm font-medium
                    text-white/70 border border-white/10
                    transition-all duration-300
                    hover:border-white/25 hover:text-white
                    disabled:opacity-30 disabled:cursor-not-allowed
                    focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
                  "
                  type="button"
                >
                  {secondaryAction.label}
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`
                w-full max-w-lg
                ${reverse ? "rotate-y-[8deg] rotate-x-3" : "-rotate-y-[8deg] rotate-x-3"}
              `}
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            >
              <div
                className="
                  bg-surface rounded-2xl p-2.5
                  border border-white/6
                  shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]
                "
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/8 z-10" />

                <div
                  className="
                    absolute inset-0 z-3 pointer-events-none rounded-2xl
                    bg-linear-to-br from-white/3 via-transparent to-transparent
                  "
                />

                <img
                  src={resolveImageSrc(image)}
                  alt={imageAlt}
                  className="w-full rounded-xl block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-auto flex w-full flex-wrap gap-3 pt-8">
          {tags.map((tag) => (
            <Badge key={tag} variant="primary" className="mb-2">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
