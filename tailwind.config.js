/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        papyrus: ["PAPYRUS"],
      },
      screens: {
        headerimg: "1050px",
        hamburger: "1100px",
        herotext: "1200px",
        thumbs: "650px",
      },
    },
  },
  plugins: [],
};
