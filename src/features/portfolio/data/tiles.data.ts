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

export interface FeaturedItem {
  label: string;
  title: string;
  description: string;
  image: string;
  bgImage: string;
  imageAlt: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href?: string; disabled?: boolean };
  reverse?: boolean;
  tags: string[];
}

export const featuredItems: FeaturedItem[] = [
  {
    label: "PRODUCTION BOOKING SYSTEM",
    title: "THE SHORT GRASS",
    description:
      "A production-grade golf simulator booking platform designed for reliability at scale, with secure Stripe-powered payments, conflict-free scheduling, and a streamlined customer journey across booking, checkout, and account management.",
    image: golfImage,
    imageAlt: "The Short Grass golf simulator platform",
    bgImage: golfBackground,
    primaryAction: { label: "Live Site", href: "https://theshortgrass.jamesgower.dev" },
    secondaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/booking-system",
    },
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Stripe",
      "Prisma ORM",
      "Vercel",
    ],
  },
  {
    label: "FINANCIAL TECHNOLOGY",
    title: "TRADING BOT + DASHBOARD",
    description:
      "Discord trading bot that ingests market data streams, executes rule-based signal logic, and publishes low-latency trade alerts to Discord channels. Includes command-driven workflows, position/state tracking, and modular services for extensibility",
    image: tradingBotImage,
    bgImage: tradingBotBackground,
    imageAlt: "Trading Bot",
    primaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/trading-bot",
    },
    reverse: true,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Hyperliquid API",
      "Binance API",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    label: "LOCAL FAMILY BUSINESS E-COMMERCE",
    title: "FRANCESCA JADE CREATES",
    description:
      "Francesca Jade Creates is an online art and craft storefront where customers can browse collections, view rich image galleries, and buy pieces directly. The site includes secure accounts, dynamic content updates, and a streamlined Stripe checkout flow.",
    image: fjcImage,
    imageAlt: "Francesca Jade Creates e-commerce platform",
    bgImage: fjcBackground,
    primaryAction: {
      label: "View Source",
      href: "https://github.com/GWR94/francesca-jade-creates",
    },
    tags: ["React", "TypeScript", "AWS", "DynamoDB", "Material UI", "Stripe"],
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
    sourceCode: "https://github.com/jamesgower/blogify",
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
    sourceCode: "https://github.com/jamesgower/tic-tac-toe",
    tags: ["React", "Redux", "TypeScript"],
    gridSpan: "normal",
  },
  {
    img: wikipediaImage as unknown as string,
    title: "Wikipedia Search",
    subtitle: "Built with TypeScript, Fetch API & React",
    desc: "Browse through the world of Wikipedia with this searching tool.",
    href: "https://wiki-api-search.netlify.app/",
    color: "#0114E4",
    sourceCode: "https://github.com/jamesgower/wikipedia-api",
    tags: ["React", "Fetch API"],
    gridSpan: "normal",
  },
  {
    img: pomodoroImage as unknown as string,
    title: "Pomodoro Clock",
    subtitle: "Built with React, TypeScript & SCSS",
    desc: "An adjustable pomodoro clock to take control of your work/break balance.",
    href: "https://pomodoro-clock-v2.netlify.app/",
    color: "#303030",
    sourceCode: "https://github.com/jamesgower/pomodoro",
    tags: ["React", "TypeScript"],
    gridSpan: "normal",
  },
  {
    img: twitchImage as unknown as string,
    title: "Twitch API",
    subtitle: "Built with React, TypeScript, Fetch API & Twitch API",
    href: "https://twitch-streamer-api.netlify.app/",
    desc: "Keep up to date with the status of your favourite streamers.",
    color: "#7c30ff",
    featured: true,
    sourceCode: "https://github.com/jamesgower/twitch-api",
    tags: ["React", "Twitch API", "TypeScript"],
    gridSpan: "normal",
  },
  {
    img: letsWatchImage as unknown as string,
    title: "Let's Watch",
    subtitle: "Built with React, TypeScript, Redux, TMDB API, Axios & SCSS",
    desc: "View trending or highly rated shows or movies based on their TMDB rating.",
    href: "https://master.d2qa9ouq71v6zu.amplifyapp.com/",
    featured: true,
    color: "#131319",
    sourceCode: "https://github.com/jamesgower/lets-watch",
    tags: ["React", "TMDB API", "Redux"],
    gridSpan: "wide",
  },
  {
    img: chatterImage as unknown as string,
    title: "Chatter",
    subtitle: "Built with TypeScript, Socket.io, Axios, Express, React & Redux",
    href: "https://node-chatter-app.herokuapp.com/",
    desc: "Real time chatting application to keep in touch with like minded people.",
    featured: true,
    color: "#2E5D82",
    sourceCode: "https://github.com/jamesgower/chatter",
    tags: ["Socket.io", "Express", "React", "Redux"],
    gridSpan: "wide",
  },
  {
    img: simonImage as unknown as string,
    title: "Simon Says",
    subtitle: "Built with React, TypeScript, SCSS & Howler",
    href: "https://play-simon-says.netlify.app/",
    desc: "The classic 'Simon Says' game from your childhood, brought to the browser.",
    color: "#1970a6",
    sourceCode: "https://github.com/jamesgower/simon-says",
    tags: ["React", "Howler", "TypeScript"],
    gridSpan: "normal",
  },
  {
    img: calculatorImage as unknown as string,
    title: "Calculator",
    subtitle: "Built with ReactModal, TypeScript, SCSS & Math.JS",
    color: "#00d397",
    desc: "A simple operational calculator.",
    href: "https://github.com/jamesgower/portfolio/tree/prod/src/pages/calculator",
    sourceCode: "https://github.com/jamesgower/portfolio/tree/prod/src/pages/calculator",
    tags: ["React", "Math.js"],
    gridSpan: "normal",
  },
];
