/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "28.75em",
    md: "37.5em",
    lg: "56.25em",
  },

  theme: {
    extend: {
      colors: {
        primary: "#3B4262",
        secondary: "#DB2E4D",
        grey: "#565468",
        blue: "#2A45C2",
        "border-color": "rgba(255, 255, 255, 0.29)",
        "game-bg": "#0000001a",
      },
      backgroundImage: {
        radiall:
          "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%);",
        score: "linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)",
        triangle: 'url("/images/bg-triangle.svg")',
        pentagon: 'url("/images/bg-pentagon.svg")',
        "hover-bg": 'url("/images/bg-hover.svg")',
      },
      dropShadow: {
        "text-sh": "0px 3px 3px rgba(0, 0, 0, 0.20)",
      },
      boxShadow: {
        "box-sh": "0px 3px 3px rgba(0, 0, 0, 0.20)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
