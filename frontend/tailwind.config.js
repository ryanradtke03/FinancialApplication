/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          300: "#8c1d40", // ASU Maroon
          600: "#5c0b33", // Darker Maroon
        },
        yellow: {
          400: "#FFC72C", // ASU Gold
          500: "#FFB81C", // Darker Yellow
        },
      },
    },
  },
  plugins: [],
};
