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
      xl: "1200px",
      lg: "1080px",
      sm: "600px",
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
        lowcontrast3: "var(--lowcontrast3)",
        lowcontrast4: "var(--lowcontrast4)",

        highcontrast: "var(--highcontrast)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
