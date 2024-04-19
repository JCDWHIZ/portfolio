/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darknavy: "#020c1b",
        lightnavy: "#112240",
        lightestnavy: "#233554",
        slate: "#8892b0",
        lightslate: "#a8b2d1",
        lightestslate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        greentint: "rgba(100,255,218,0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
      screens: {
        sm: "200px",
      },
    },
  },
  plugins: [],
};
