import chatterImage from "@assets/images/chatter.webp";
import simonImage from "@assets/images/simon.webp";
import pomodoroImage from "@assets/images/pomodoro.webp";
import ticTacToeImage from "@assets/images/tictactoe.webp";
import blogifyImage from "@assets/images/blogify.webp";
import wikipediaImage from "@assets/images/wiki.webp";
import twitchImage from "@assets/images/twitch.webp";
import calculatorImage from "@assets/images/calculator.webp";
import letsWatchImage from "@assets/images/lets-watch.webp";
import fjcBackground from "@assets/images/fjc-background.webp";
import fjcImage from "@assets/images/fjc.webp";
import golfImage from "@assets/images/theshortgrass.webp";
import golfBackground from "@assets/images/golf-simulator.webp";
import tradingBotImage from "@assets/images/tradingbot.png";
import tradingBotBackground from "@assets/images/tradingbg.jpg";
import type { ProjectTile } from "@shared/index";

/*
 * 4-column bento layout (lg):
 *   Row 1: [Blogify ——wide——] [Tic-Tac-Toe] [Let's Watch ——wide——]  → won't fit, wraps
 *
 * Intended pattern on 4-col grid:
 *   Row 1: [wide: Blogify     ] [normal] [normal]    → 2+1+1 = 4 ✓
 *   Row 2: [normal] [normal] [wide: Let's Watch     ] → 1+1+2 = 4 ✓
 *   Row 3: [wide: Chatter     ] [wide: Indecision    ] → 2+2 = 4 ✓
 *   Row 4: [normal] [normal] [normal] [normal]        → 1+1+1+1 = 4 ✓
 */

/** `_blank` = new tab (default). `_self` = same tab navigation. */
export type FeaturedLinkTarget = "_blank" | "_self";

export interface FeaturedItem {
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  descriptionDesktop: string;
  image: string;
  bgImage: string;
  imageAlt: string;
  primaryAction: {
    label: string;
    href: string;
    /** Defaults to `_blank`. */
    target?: FeaturedLinkTarget;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    disabled?: boolean;
    /** Defaults to `_blank`. */
    target?: FeaturedLinkTarget;
  };
  reverse?: boolean;
  tags: string[];
}

export const featuredItems: FeaturedItem[] = [
  {
    label: "Booking platform",
    title: "The Short Grass",
    subtitle: "Booking platform for golf simulators",
    description:
      "Golf simulator bookings with Stripe checkout and conflict-free scheduling.",
    descriptionDesktop:
      "A production-grade golf simulator booking platform designed for reliability at scale, with secure Stripe-powered payments, conflict-free scheduling, and a streamlined customer journey across booking, checkout, and account management.",
    image: golfImage,
    imageAlt: "The Short Grass golf simulator platform",
    bgImage: golfBackground,
    primaryAction: { label: "Live Site", href: "https://theshortgrass.jamesgower.dev" },
    secondaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/booking-system",
    },
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Vercel", "Material UI"],
  },
  {
    label: "Trading & alerts",
    title: "Trading Bot + Dashboard",
    subtitle: "Discord bot for market signals and trade alerts",
    description: "Discord bot for market signals, trade alerts, and position tracking.",
    descriptionDesktop:
      "Discord trading bot that ingests market data streams, executes rule-based signal logic, and publishes low-latency trade alerts to Discord channels. Includes command-driven workflows, position/state tracking, and modular services for extensibility.",
    image: tradingBotImage,
    bgImage: tradingBotBackground,
    imageAlt: "Trading Bot",
    primaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/trading-bot",
    },
    reverse: true,
    tags: ["Node.js", "TypeScript", "React", "PostgreSQL", "Hyperliquid API"],
  },
  {
    label: "Art & craft store",
    title: "Francesca Jade Creates",
    subtitle: "Art storefront with Stripe checkout",
    description: "Art storefront with galleries, accounts, and Stripe checkout.",
    descriptionDesktop:
      "Francesca Jade Creates is an online art and craft storefront where customers can browse collections, view rich image galleries, and buy pieces directly. The site includes secure accounts, dynamic content updates, and a streamlined Stripe checkout flow.",
    image: fjcImage,
    imageAlt: "Francesca Jade Creates e-commerce platform",
    bgImage: fjcBackground,
    primaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/francesca-jade-creates",
    },
    tags: ["React", "TypeScript", "AWS", "DynamoDB", "Stripe"],
  },
];

export const tiles: ProjectTile[] = [
  {
    img: blogifyImage as unknown as string,
    title: "Blogify",
    desc: "Blogging app for creating, sharing and reading blog posts on the latest technologies.",
    subtitle: "Full-Stack app built with AWS, React, TypeScript, Redux",
    featured: true,
    href: "https://master.d3vh9iezj1hmlb.amplifyapp.com/",
    color: "#2655A5",
    sourceCode: "https://github.com/GWR94/blogify",
    tags: ["React", "Redux", "AWS", "Webpack"],
    gridSpan: "wide",
  },
  {
    img: ticTacToeImage as unknown as string,
    title: "Tic-Tac-Toe with AI",
    desc: "Classic 1-2 player game of Tic-Tac-Toe with Minimax AI opponent.",
    subtitle: "Built with React, Redux (with Hooks!), TypeScript & SCSS",
    href: "https://tic-tac-toe-2p-minimax.netlify.app/",
    color: "#999285",
    sourceCode: "https://github.com/GWR94/tic-tac-toe",
    tags: ["React", "Redux", "TypeScript"],
    gridSpan: "normal",
  },
  {
    img: simonImage as unknown as string,
    title: "Simon Says",
    subtitle: "Built with React, TypeScript, SCSS & Howler",
    href: "https://play-simon-says.netlify.app/",
    desc: "The classic 'Simon Says' game from your childhood, brought to the browser.",
    color: "#1970a6",
    sourceCode: "https://github.com/GWR94/simon-says",
    tags: ["React", "Howler", "TypeScript"],
    gridSpan: "normal",
  },

  {
    img: chatterImage as unknown as string,
    title: "Chatter",
    subtitle: "Built with TypeScript, Socket.io, Axios, Express, React & Redux",
    href: "https://node-chatter-app.herokuapp.com/",
    desc: "Real time chatting application to keep in touch with like minded people.",
    featured: true,
    color: "#2E5D82",
    sourceCode: "https://github.com/GWR94/chatter",
    tags: ["Socket.io", "Express", "React", "Redux"],
    gridSpan: "wide",
  },
  {
    img: letsWatchImage as unknown as string,
    title: "Let's Watch",
    subtitle: "Built with React, TypeScript, Redux, TMDB API, Axios & SCSS",
    desc: "View trending or highly rated shows or movies based on their TMDB rating.",
    href: "https://master.d2qa9ouq71v6zu.amplifyapp.com/",
    featured: false,
    color: "#131319",
    sourceCode: "https://github.com/GWR94/lets-watch",
    tags: ["React", "TMDB API", "Redux"],
    gridSpan: "normal",
  },
  {
    img: twitchImage as unknown as string,
    title: "Twitch API",
    subtitle: "Built with React, TypeScript, Fetch API & Twitch API",
    href: "https://twitch-streamer-api.netlify.app/",
    desc: "Keep up to date with the status of your favourite streamers.",
    color: "#7c30ff",
    featured: false,
    sourceCode: "https://github.com/GWR94/twitch-api",
    tags: ["React", "Twitch API", "TypeScript"],
    gridSpan: "normal",
  },
];
