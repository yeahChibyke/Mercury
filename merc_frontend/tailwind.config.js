/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        merienda:["Merienda", "cursive"],
        quicksand:["Quicksand", "sans-serif"],
        poppins:["Poppins", "sans-serif"],
        aboreto:["Aboreto", "system-ui"],
      }
    },
  },
  plugins: [],
}

