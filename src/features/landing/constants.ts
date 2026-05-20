import { FiCornerRightDown, FiGithub, FiMail } from "react-icons/fi";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
} as const;

export const socialLinks = [
  {
    href: "https://github.com/jamesgower",
    label: "View GitHub profile",
    Icon: FiGithub,
  },
  {
    href: "mailto:contact@jamesgower.dev",
    label: "Email Me",
    Icon: FiMail,
  },
] as const;

export { FiCornerRightDown };
