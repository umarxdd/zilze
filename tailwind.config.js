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
        secondary: {
          100: "#FFC4D4",
          200: "#FFC9DF",
        },
      },
      backgroundColor: {
        primary: "#FF3289",
        secondary: {
          100: "#FFC4D4",
          200: "#FFC9DF",
        },
      },
      maxWidth: {
        custom: "1500px",
      },
    },
  },
  plugins: [],
};
