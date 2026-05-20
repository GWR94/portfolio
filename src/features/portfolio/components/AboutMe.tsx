import { motion } from "framer-motion";
import { aboutPillars } from "../data/about.data";
import PillarCard from "./PillarCard";

const MotionGrid = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const AboutMe = () => (
  <section id="about-me" className="relative overflow-hidden py-12 md:py-20">
    <div className="mx-auto w-fit max-w-7xl px-6 md:px-12">
      <div className="mb-8 max-w-3xl md:mb-12">
        <p className="mb-2 block text-xs font-bold tracking-[0.18em] text-primary">
          THE MISSION
        </p>
        <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
          I architect digital ecosystems where logic meets elegance.
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          Specialising in the <strong>React and Node.js</strong> ecosystems, I architect
          scalable full-stack solutions that seamlessly bridge the gap between complex
          engineering and intuitive design.
        </p>
      </div>

      <MotionGrid
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {aboutPillars.map((pillar) => (
          <PillarCard
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </MotionGrid>
    </div>
  </section>
);

export default AboutMe;
