import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BentoGrid, ProjectCard } from "@shared/index";
import { tiles } from "../data/tiles.data";
import { FiChevronDown, FiGithub } from "react-icons/fi";
import { sectionHeader } from "@shared/motion/variants";

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const onToggle = () => setExpanded((open) => !open);

  return (
    <section className="mt-8 border-t border-white/8 pt-12" id="projects">
      <motion.div
        variants={sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-3 text-3xl font-bold tracking-tighter text-white md:text-4xl">
          Earlier Projects
        </h2>
        <p className="mb-6 text-base text-white/40">
          Older experiments and learning builds — useful for breadth, not the main focus
          of my current work.
        </p>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls="archived-projects-grid"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-primary/50 hover:text-white"
        >
          {expanded ? "Hide earlier projects" : "View earlier projects"}
          <FiChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        <p className="my-6 text-base text-white/40">
          Other projects can be found on my{" "}
          <a
            href="https://github.com/GWR94"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            <FiGithub className="w-4 h-4 inline-block" /> GitHub
          </a>
        </p>
      </motion.div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id="archived-projects-grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-10">
              <BentoGrid>
                {tiles.map((tile) => (
                  <ProjectCard key={tile.title} tile={tile} />
                ))}
              </BentoGrid>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
