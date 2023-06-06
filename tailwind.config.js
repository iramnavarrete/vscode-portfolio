/** @type {import('tailwindcss').Config} */
import Theme from "./src/constants/Theme"
const colors = Theme.colors;

export default {
  content: ["./index.html",'./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}

