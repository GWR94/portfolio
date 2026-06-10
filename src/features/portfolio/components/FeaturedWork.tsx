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
      <div className="flex flex-col gap-3 md:gap-4">
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
        <BentoGrid>
          {tiles.map((tile) => (
            <ProjectCard key={tile.title} tile={tile} />
          ))}
        </BentoGrid>
      </div>
    </div>
    <motion.div
      variants={sectionHeader}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mx-auto mt-8 max-w-2xl text-center md:mt-10"
    >
      <p className="text-base text-white/40">
        Other projects available on my{" "}
        <a
          href="https://github.com/GWR94"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          <FiGithub className="inline-block h-4 w-4" /> GitHub
        </a>
      </p>
    </motion.div>
  </section>
);

export default FeaturedWork;
