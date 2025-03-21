/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["var(--font-oxanium)"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
    preflight: false,
  },
  darkMode: "class",
};
