import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Badge from "./Badge";
import { FeaturedItem } from "@features/portfolio/data/tiles.data";

type ImageLike = string | { src?: string } | undefined | null;

const resolveImageSrc = (image: ImageLike): string =>
  typeof image === "string" ? image : (image?.src ?? "");

const MOBILE_TAG_LIMIT = 4;

const openFeaturedHref = (
  href: string,
  target: FeaturedItem["primaryAction"]["target"] = "_blank",
) => {
  if (target === "_self") {
    window.location.assign(href);
  } else {
    window.open(href, "_blank", "noopener,noreferrer");
  }
};

type FeaturedProjectProps = Pick<
  FeaturedItem,
  | "title"
  | "subtitle"
  | "description"
  | "image"
  | "bgImage"
  | "imageAlt"
  | "primaryAction"
  | "secondaryAction"
  | "reverse"
  | "tags"
>;

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  subtitle,
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
  const primaryTarget = primaryAction.target ?? "_blank";
  const secondaryTarget = secondaryAction?.target ?? "_blank";

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/6 bg-white/2"
    >
      <img
        src={resolveImageSrc(bgImage)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.3]"
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
          relative z-2 flex min-h-[360px] flex-col px-6 py-10 md:min-h-[420px] md:px-12 md:py-12
          ${reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"}
          items-center gap-8 md:gap-12
        `}
      >
        <div className="flex w-full flex-1 flex-col md:max-w-lg">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary">
            FEATURED
          </p>
          <h2 className="mb-2 text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mb-4 text-sm font-medium tracking-wide text-white/50 md:mb-5 md:text-base">
              {subtitle}
            </p>
          ) : null}

          <p className="mb-6 max-w-md text-base leading-relaxed text-white/60">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href={primaryAction.href}
              target={primaryTarget === "_blank" ? "_blank" : undefined}
              rel={primaryTarget === "_blank" ? "noopener noreferrer" : undefined}
              className="
                inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5
                text-sm font-medium text-white transition-all duration-200
                hover:bg-primary-light hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
              "
            >
              {primaryAction.label}
              <FiArrowRight className="h-4 w-4" aria-hidden />
            </a>

            {secondaryAction && (
              <button
                onClick={() =>
                  secondaryAction.href &&
                  openFeaturedHref(secondaryAction.href, secondaryTarget)
                }
                disabled={secondaryAction.disabled}
                className="
                  rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium
                  text-white/70 transition-all duration-200
                  hover:border-white/25 hover:text-white
                  disabled:cursor-not-allowed disabled:opacity-30
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                "
                type="button"
              >
                {secondaryAction.label}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {tags.map((tag, index) => (
              <Badge
                key={tag}
                variant="primary"
                className={`w-fit shrink-0${index >= MOBILE_TAG_LIMIT ? " hidden md:inline-flex" : ""}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="hidden w-full flex-1 items-center justify-center md:flex">
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`
              relative w-full max-w-lg
              ${reverse ? "rotate-y-[8deg] rotate-x-3" : "-rotate-y-[8deg] rotate-x-3"}
            `}
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          >
            <div
              className="
                relative rounded-2xl border border-white/6 bg-surface p-2.5
                shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]
              "
            >
              <div className="absolute top-2.5 left-1/2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/8" />

              <div
                className="
                  pointer-events-none absolute inset-0 z-3 rounded-2xl
                  bg-linear-to-br from-white/3 via-transparent to-transparent
                "
              />

              <img
                src={resolveImageSrc(image)}
                alt={imageAlt}
                className="block w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
