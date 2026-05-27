import { FaFilePdf } from "react-icons/fa";
import { FiCornerRightDown, FiGithub, FiMail } from "react-icons/fi";

export const socialLinks = [
  {
    href: "https://github.com/GWR94",
    label: "View GitHub profile",
    Icon: FiGithub,
  },
  {
    href: "mailto:contact@jamesgower.dev",
    label: "Email Me",
    Icon: FiMail,
  },
  {
    href: "/jamesgower-cv.pdf",
    label: "View CV",
    Icon: FaFilePdf,
  },
] as const;

export { FiCornerRightDown };
