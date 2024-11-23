/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1080px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        orange: "#e07a5f",
        buttonGreen: "#81b29a",
        lowcontrast: "var(--lowcontrast)",
        lowcontrast2: "var(--lowcontrast2)",
        highcontrast: "var(--highcontrast)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
