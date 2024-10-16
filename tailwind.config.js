/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"]
      },
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        verydarkblue: "hsl(212, 21%, 14%)",
        darkgrayishblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

