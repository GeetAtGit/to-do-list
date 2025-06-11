/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["'Dancing Script'", "cursive"],
        second: ["'Edu NSW ACT Hand Pre'", "second"],
    },
  },
},
  plugins: [
    require("tailwind-scrollbar"),
  ],
}

