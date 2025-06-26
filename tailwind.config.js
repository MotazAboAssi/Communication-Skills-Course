/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        website: "#766ddd",
        secondary: "#a5a2cb",
      },
      fontFamily:{
        robot : "Roboto Slab"
      }
    },
  },
  plugins: [],
};
