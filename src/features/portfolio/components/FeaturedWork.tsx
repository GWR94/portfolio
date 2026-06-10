import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { featuredItems, tiles } from "../data/tiles.data";
import { BentoGrid, FeaturedProject, ProjectCard } from "@shared/index";
import { sectionHeader } from "@shared/motion/variants";

const FeaturedWork = () => (
  <section
    id="current-work"
    aria-label="Projects"
    className="bg-background pb-16 md:pb-24"
  >
    <div className="mx-auto max-w-7xl px-6 pt-8 md:px-12">
      {featuredItems.map((item) => (
        <FeaturedProject
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          image={item.image}
          bgImage={item.bgImage}
          imageAlt={item.imageAlt}
          primaryAction={item.primaryAction}
          secondaryAction={item.secondaryAction}
          reverse={item.reverse}
          tags={item.tags}
        />
      ))}

      <div className="mt-12 border-t border-white/8 pt-10 md:mt-16 md:pt-12">
        <BentoGrid>
          {tiles.map((tile) => (
            <ProjectCard key={tile.title} tile={tile} />
          ))}
        </BentoGrid>

        <motion.p
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-1 text-base text-white/40 md:mt-10"
        >
          <span>More projects on my</span>
          <a
            href="https://github.com/GWR94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary transition-colors hover:underline"
          >
            <FiGithub className="h-4 w-4 shrink-0" aria-hidden />
            <span>GitHub</span>
          </a>
        </motion.p>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
