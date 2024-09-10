/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manjari: ["Manjari", "Poppins", "sans-serif"],
      },
      colors: {
        // EC8B24
        primary: "#FF3289",
        // primary: "#FFFF00",
        // primary: "#FFA500",
        // primary: "#008000",
        secondary: {
          100: "#FFC4D4",
          200: "#FFC9DF",
          // 100: "#90EE90",
          // 200: "#90EE90",
        },
      },
      backgroundColor: {
        primary: "#FF3289",
        // primary: "#FFFF00",
        // primary: "#FFA500",
        // primary: "#008000",

        secondary: {
          100: "#FFC4D4",
          200: "#FFC9DF",
          // 100: "#90EE90",
          // 200: "#90EE90",
        },
      },
      maxWidth: {
        custom: "1500px",
      },
    },
  },
  plugins: [],
};
