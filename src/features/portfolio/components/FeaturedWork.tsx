import { featuredItems } from "../data/tiles.data";
import { FeaturedProject } from "@shared/index";
import { motion } from "framer-motion";
import { sectionHeader } from "@shared/motion/variants";

const FeaturedWork = () => (
  <section
    id="current-work"
    aria-label="Projects"
    className="bg-background pb-16 md:pb-24"
  >
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
      <motion.div
        variants={sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-10 w-full md:mb-14 text-center"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-primary">
          SELECTED WORK
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Production projects I&apos;ve shipped
        </h2>
        <p className="text-base leading-relaxed text-white/70 md:hidden">
          Live products built with React, Node, and Stripe.
        </p>
        <p className="hidden text-lg leading-relaxed text-white/70 md:block">
          Full-stack builds — booking flows, Stripe commerce, and Node backends deployed
          for production.
        </p>
      </motion.div>

      {featuredItems.map((item) => (
        <FeaturedProject
          key={item.title}
          label={item.label}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          descriptionDesktop={item.descriptionDesktop}
          image={item.image}
          bgImage={item.bgImage}
          imageAlt={item.imageAlt}
          primaryAction={item.primaryAction}
          secondaryAction={item.secondaryAction}
          reverse={item.reverse}
          tags={item.tags}
        />
      ))}
    </div>
  </section>
);

export default FeaturedWork;
