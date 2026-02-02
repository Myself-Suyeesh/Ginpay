/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: "#2A8E9E",
        background: "#E9F3F4",
        highlight: "#180D39",
        secondary: "#1D1E20",
        text: "#1D1E20",
      },
    },
  },
  plugins: [],
};
