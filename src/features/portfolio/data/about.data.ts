import { FiBookOpen, FiCloud, FiDatabase, FiDollarSign } from "react-icons/fi";
import type { ComponentType } from "react";

export interface Pillar {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const aboutPillars: Pillar[] = [
  {
    icon: FiBookOpen,
    title: "Modern Frontend",
    description:
      "Build production frontends in React across Vite and Next.js, choosing server rendering, caching, and state tools based on product needs rather than trends.",
  },
  {
    icon: FiDatabase,
    title: "Backend Services",
    description:
      "Designing resilient APIs and domain models in Node.js, PostgreSQL, and TypeScript, with clear boundaries, validation, and observability for long-term maintainability.",
  },
  {
    icon: FiCloud,
    title: "Cloud & Ops",
    description:
      "Shipping production systems with CI/CD, containers, and platform services (AWS/Vercel/Render) emphasizing performance, uptime, and safe iteration.",
  },
  {
    icon: FiDollarSign,
    title: "Secure Commerce",
    description:
      "Implementing secure payment architectures with Stripe across checkout, subscriptions, and webhook-driven lifecycle events, built for trust and measurable business impact.",
  },
];
