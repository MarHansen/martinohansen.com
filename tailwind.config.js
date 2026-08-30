/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: [""],
        serif: ["Newyork"],
        body: ["'Satoshi', sans-serif"],
        foot: ["Newyork"],
      },

      colors: { white: "var(--color-paper)", black: "var(--color-ink)" },
    },
  },
  plugins: [],
};
