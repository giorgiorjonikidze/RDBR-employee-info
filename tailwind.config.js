/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      red_error: "#E52F2F",
      red_font: "#F93B1D",
      dark_font: "#1A1A1A",
      green: "#98E37E",
      grey: "#BCBCBC",
      purple: "#6B40E3",
      dark: "#2E2E2E",
      white: "#ffffff",
      black: "#000000"
    },
    fontSize: {
      sm: "14px",
      md: "16px", 
      xl: "18px",
      xxl: "24px"
    },
    boxShadow: {
      'extra-large': '0px 4px 28px 0px rgba(0, 0, 0, 0.25)',
    },
    
  },
  plugins: [],
};
