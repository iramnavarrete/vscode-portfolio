/** @type {import('tailwindcss').Config} */
import Theme from "./src/constants/Theme"
import TailwindAnimated from "tailwindcss-animated"
const colors = Theme.colors;

export default {
  content: ["./index.html",'./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
    screens: {
      // => @media (min-width: 390px) { ... }
      '2xs': '389px',
      // => @media (min-width: 500px) { ... }
      'xs': '500px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1536px) { ... }
      '2xl': '1536px',
    }
  },
  plugins: [
    TailwindAnimated
  ],
}

