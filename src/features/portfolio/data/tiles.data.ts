import chatterImage from "@assets/images/chatter.webp";
import simonImage from "@assets/images/simon.webp";
import ticTacToeImage from "@assets/images/tictactoe.webp";
import blogifyImage from "@assets/images/blogify.webp";
import fjcImage from "@assets/images/fjc.webp";
import golfImage from "@assets/images/theshortgrass.webp";
import golfBackground from "@assets/images/golf-simulator.webp";
import chessReviewImage from "@assets/images/chess-review.webp";
import tradingBotImage from "@assets/images/tradingbot.png";
import type { ProjectTile } from "@shared/index";

/*
 * 12-column bento mosaic (lg) — order matters:
 *   [ FJC (6×2)       ][ Chatter (6)                ]
 *   [                 ][ Trading Bot (6)            ]
 *   [ Tic-Tac-Toe (4) ][ Simon (3)     ][ Blogify (5×2) ]
 *   [ Chess Review (7)                                ]
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
];

export const tiles: ProjectTile[] = [
  {
    title: "Francesca Jade Creates",
    subtitle: "Art storefront with Stripe checkout",
    desc: "Art storefront with galleries, accounts, and Stripe checkout.",
    img: fjcImage as unknown as string,
    href: "https://francesca-jade-creates.vercel.app/",
    color: "#131319",
    sourceCode: "https://github.com/GWR94/francesca-jade-creates",
    tags: ["React", "TypeScript", "AWS", "DynamoDB", "Stripe"],
    bento: { colSpan: 6, rowSpan: 2 },
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
    bento: { colSpan: 6 },
  },
  {
    img: tradingBotImage as unknown as string,
    title: "Trading Bot + Dashboard",
    subtitle: "Discord bot for market signals and trade alerts",
    desc: "Discord bot for market signals, trade alerts, and position tracking.",
    color: "#0f172a",
    sourceCode: "https://github.com/GWR94/trading-bot",
    tags: ["Node.js", "TypeScript", "React", "PostgreSQL"],
    bento: { colSpan: 6 },
  },
  {
    img: ticTacToeImage as unknown as string,
    title: "Tic-Tac-Toe with AI",
    desc: "Classic 1-2 player game of Tic-Tac-Toe with Minimax AI opponent.",
    subtitle: "Built with React, Redux, TypeScript & SCSS",
    href: "https://tic-tac-toe-2p-minimax.netlify.app/",
    color: "#999285",
    sourceCode: "https://github.com/GWR94/tic-tac-toe",
    tags: ["React", "Redux", "TypeScript"],
    bento: { colSpan: 4 },
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
    bento: { colSpan: 3 },
  },
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
    bento: { colSpan: 5, rowSpan: 2 },
  },
  {
    img: chessReviewImage as unknown as string,
    title: "Chess Review",
    subtitle: "Real-time chess analysis overlay for digital boards",
    desc: "Screen-watching chess overlay with Stockfish engine analysis and move suggestions.",
    color: "#131319",
    sourceCode: "https://github.com/GWR94/chess-review",
    tags: ["Python", "PyTorch", "OpenCV", "Stockfish"],
    bento: { colSpan: 7 },
  },
];
