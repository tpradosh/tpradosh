
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black : "#010400",
        blue : "#004E89",
        white : "#D6D6D6",
        green: "#1B998B"
      }
    },
  },
  plugins: [],
}