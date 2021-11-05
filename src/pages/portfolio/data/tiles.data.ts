import chatterImage from "../images/chatter.jpg";
import simonImage from "../images/simon.jpg";
import pomodoroImage from "../images/pomodoro.jpg";
import ticTacToeImage from "../images/tictactoe.jpg";
import blogifyImage from "../images/blogify.jpg";
import wikipediaImage from "../images/wiki.jpg";
import indecisionImage from "../images/indecision.jpg";
import twitchImage from "../images/twitch.jpg";
import calculatorImage from "../images/calculator.jpg";
import letsWatchImage from "../images/lets-watch.jpg";

export default [
  {
    img: ticTacToeImage,
    title: "Tic-Tac-Toe with AI",
    subtitle: "Built with React, Redux (with Hooks!), TypeScript & SCSS",
    href: "https://tic-tac-toe-2p-minimax.netlify.app/",
    redirect: true,
    color: "#999285",
    class: "fas fa-gamepad",
    sourceCode: "https://github.com/jamesgower/tic-tac-toe",
  },
  {
    img: blogifyImage,
    title: "Blogify App",
    subtitle: "Built with React, Redux, React-Router, Webpack",
    featured: true,
    href: "https://master.d3vh9iezj1hmlb.amplifyapp.com/",
    redirect: true,
    color: "#2655A5",
    class: "fas fa-pencil-alt",
    sourceCode: "https://github.com/jamesgower/blogify",
  },
  {
    img: letsWatchImage,
    title: "Let's Watch",
    subtitle: "Built with React, TypeScript, Redux, TMDB API, Axios & SCSS",
    href: "https://master.d2qa9ouq71v6zu.amplifyapp.com/",
    redirect: true,
    featured: true,
    color: "#131319",
    class: "fas fa-video",
    sourceCode: "https://github.com/jamesgower/lets-watch",
  },
  {
    img: wikipediaImage,
    title: "Wikipedia API",
    subtitle: "Built with TypeScript, Fetch API & React",
    href: "https://wiki-api-search.netlify.app/",
    color: "#0114E4",
    class: "fab fa-wikipedia-w",
    sourceCode: "https://github.com/jamesgower/wikipedia-api",
  },
  {
    img: pomodoroImage,
    title: "Pomodoro Clock",
    subtitle: "Built with React, TypeScript & SCSS",
    href: "https://pomodoro-clock-v2.netlify.app/",
    redirect: true,
    color: "#303030",
    class: "far fa-clock",
    sourceCode: "https://github.com/jamesgower/pomodoro",
  },
  {
    img: chatterImage,
    title: "Chatter (Chat App)",
    subtitle: "Built with TypeScript, Socket.io, Axios, Express, React, Redux & SCSS",
    href: "https://node-chatter-app.herokuapp.com/",
    redirect: true,
    featured: true,
    color: "#2E5D82",
    class: "far fa-comments",
    sourceCode: "https://github.com/jamesgower/chatter",
  },

  {
    img: twitchImage,
    title: "Twitch API",
    subtitle: "Built with React, TypeScript, Fetch API & Twitch API",
    href: "https://twitch-streamer-api.netlify.app/",
    redirect: true,
    color: "#7c30ff",
    class: "fab fa-twitch",
    featured: true,
    sourceCode: "https://github.com/jamesgower/twitch-api",
  },
  {
    img: simonImage,
    title: "Simon Says",
    subtitle: "Built with React, TypeScript, SCSS & Howler",
    href: "https://play-simon-says.netlify.app/",
    redirect: true,
    color: "#1970a6",
    class: "fas fa-trophy",
    sourceCode: "https://github.com/jamesgower/simon-says",
  },

  {
    img: calculatorImage,
    title: "Calculator",
    subtitle: "Built with ReactModal, TypeScript, SCSS & Math.JS",
    color: "#00d397",
    class: "fas fa-calculator",
    click: true,
    sourceCode: "https://github.com/jamesgower/portfolio/tree/prod/src/pages/calculator",
  },
  {
    img: indecisionImage,
    title: "Indecision App",
    subtitle: "Built with React, TypeScript SCSS & Local Storage",
    href: "/indecision-app",
    color: "#8359CE",
    featured: true,
    class: "fas fa-question",
    sourceCode:
      "https://github.com/jamesgower/portfolio/tree/prod/src/pages/indecision-app",
  },
];
