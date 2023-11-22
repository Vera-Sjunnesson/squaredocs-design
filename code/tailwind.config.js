/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#415ee5",
        "lighter-purple": "#a7a1e0",
        "darker-purple": "#8e95e6",
        "white": "#ffffff",
        "black": "#1d1e20",
        "light-grey": "#f0f1f5",
        "dark-grey": "#62646a"
      },
      boxShadow: {
        "3xl": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      },
      borderRadius: {
        "4xl": "1.5rem",
        "2xl": "1.5rem 1.5rem 0rem 0rem",
      }
    }
  },
  plugins: [],
}

