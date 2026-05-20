/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          925: "#111318",
          950: "#090a0d",
        },
        brand: {
          DEFAULT: "#6366f1",
          soft: "#818cf8",
          muted: "#a5b4fc",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "ide-card":
          "0 8px 22px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
        "brand-glow": "0 0 0 1px rgba(99, 102, 241, 0.35), 0 0 40px rgba(99, 102, 241, 0.18)",
      },
      backgroundImage: {
        "ide-grid":
          "linear-gradient(to right, rgba(113, 113, 122, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(113, 113, 122, 0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "ide-grid": "28px 28px",
      },
      letterSpacing: {
        "terminal": "0.16em",
      },
      maxWidth: {
        "reading": "72ch",
      },
    },
  },
  plugins: [],
};
