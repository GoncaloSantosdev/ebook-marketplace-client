/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAA451", // Orange/Gold
        secondary: "#1A1668", // Dark Blue
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          light: "#F5F5F5",
          dark: "#4A4A4A",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
