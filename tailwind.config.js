/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.html", "*.html"],
  theme: {
    extend: {
      colors: {
        darker: "rgba(0, 0, 0, 0.2)",
        darkBlue: "#084277",
        shadowBlue: "#0074BB",
        sweetBlue: "#35AAF2",
        niceWhite: "#F9FAFB",
        lightLime: "#3AD97B",
        lightGrey: "#f7f7f7",
      },
      fontFamily: {
        dmSans: "'DM Sans', sans-serif",
        silkscreen: "'Silkscreen', cursive",
      },
    },
  },
  plugins: [],
};
