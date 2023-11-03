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
        xxl: "1500px",
        herotext: "1200px",
        hamburger: "1100px",
        headerimg: "1050px",
        footermenu: "875px",
        thumbs: "650px",
        xsm: "460px",
        mobile: "420px",
      },
    },
  },
  plugins: [],
};
