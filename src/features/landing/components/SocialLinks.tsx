import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "../data/social.data";
import { landingItemVariants } from "@shared/motion/variants";

const SocialLinks = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div variants={landingItemVariants} className="mt-6 flex items-center gap-3">
      {socialLinks.map(({ href, label, Icon }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.08 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="
            group relative text-white/40 transition-colors duration-200 ease-out hover:text-primary
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm
          "
        >
          <Icon className="h-6 w-6 cursor-pointer" />
          <span
            role="tooltip"
            className="
              pointer-events-none absolute left-1/2 bottom-full z-20 mb-2 -translate-x-1/2
              rounded-md border border-white/10 bg-black/90 px-2 py-1
              text-[10px] font-medium text-white/80 whitespace-nowrap
              opacity-0 translate-y-[-4px] transition-all duration-150 ease-out
              [transition-delay:0ms] group-hover:[transition-delay:120ms]
              group-hover:opacity-100 group-hover:translate-y-[-6px]
              before:absolute before:left-1/2 before:top-full before:-translate-x-1/2
              before:border-l-5 before:border-r-5 before:border-t-5
              before:border-l-transparent before:border-r-transparent before:border-t-white/10
              after:absolute after:left-1/2 after:top-full after:-translate-x-1/2
              after:border-l-4 after:border-r-4 after:border-t-4
              after:border-l-transparent after:border-r-transparent after:border-t-black/90
            "
          >
            {label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
