/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        claro: "#ffe29a",
        medioclaro: "#ffecbb",
        semiclaro: "#ffc27f",
        medio: "#f88863",
        mediooscuro: "#ac4147",
        oscuro: "#411f2d",
        muyclaro: "#fff5dd",
      },
    },
  },
  plugins: [],
}

