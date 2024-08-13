/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#0e0f0f",
        brightBlue: "#01a5fb",
        lightText: "#565252",
        lightText2: "#888688",
      },
    },
  },
  plugins: [],
};
