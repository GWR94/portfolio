import { motion, useReducedMotion } from "framer-motion";
import { Badge, MagneticButton } from "@shared/index";
import SocialLinks from "./SocialLinks";
import { containerVariants, landingItemVariants } from "@shared/motion/variants";
import { FiCornerRightDown } from "react-icons/fi";

const LandingHero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={landingItemVariants}>
        <Badge variant="primary" className="mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
          Full-Stack Engineer
        </Badge>
      </motion.div>

      <motion.h1
        variants={landingItemVariants}
        className="
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          font-bold tracking-tighter leading-[0.9]
          text-gradient mb-6
        "
      >
        JAMES
        <br />
        GOWER.
      </motion.h1>

      <motion.div
        variants={landingItemVariants}
        className="border-l-2 border-primary/40 pl-4 mb-10"
      >
        <p className="text-lg text-white/60 font-medium mb-1">
          Production software across the stack.
        </p>
        <p className="text-base text-white/40">Interfaces, APIs, infrastructure.</p>
      </motion.div>

      <motion.div
        variants={landingItemVariants}
        className="flex flex-wrap items-center gap-4"
      >
        <MagneticButton href="/#current-work" variant="secondary">
          View Selected Works
          <FiCornerRightDown className="w-4 h-4" />
        </MagneticButton>

        <MagneticButton href="/#contact-form" variant="ghost">
          Get in Touch
        </MagneticButton>
      </motion.div>

      <SocialLinks />

      <motion.div
        variants={landingItemVariants}
        className="flex items-center gap-3 mt-12 text-xs text-white/25 font-mono"
      >
        <motion.span
          className="inline-block w-2 h-2 rounded-full"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  backgroundColor: [
                    "rgba(6, 78, 59, 0.8)",
                    "rgba(16, 185, 129, 0.9)",
                    "rgba(6, 78, 59, 0.8)",
                  ],
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
        Open to full-time roles · UK based
      </motion.div>
    </motion.div>
  );
};

export default LandingHero;
