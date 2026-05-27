export type NavIcon = "home" | "user" | "briefcase" | "mail";

export interface NavItem {
  id: string;
  label: string;
  icon: NavIcon;
  target: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "home", target: "landing-page", path: "/" },
  { id: "about", label: "About", icon: "user", target: "about-me", path: "/#about-me" },
  {
    id: "portfolio",
    label: "Work",
    icon: "briefcase",
    target: "current-work",
    path: "/#current-work",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "mail",
    target: "contact-form",
    path: "/#contact-form",
  },
];
