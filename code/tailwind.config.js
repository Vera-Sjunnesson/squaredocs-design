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
        "bright-purple": "#9d58e9",
        "pink": "#f8dffe",
        "primary-white": "#ffffff",
        "primary-black": "#1d1e20",
        "light-grey": "#f0f1f5",
        "dark-grey": "#878991"
      },
      boxShadow: {
        "3xl": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      },
      backgroundImage: {
        "background-gradient": "linear-gradient(120deg, rgba(167,161,224,1) 0%, rgba(130,133,235,1) 61%, rgba(142,149,230,1) 100%)",
        "pink-gradient": "linear-gradient(220deg, #F8DFFE 11.64%, #FFF 42.2%, #FFF 87.41%)",
      },
      borderRadius: {
        "4xl": "1rem",
        "2xl": "1 1 0rem 0rem",
        "1xl": "0rem 0rem 1rem 0rem"
      },
      fontSize: {
        l: "2.5rem",
        m: "1.9",
        s: ".9rem",
        xs: ".8rem",
        xxs: ".5rem",
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    },
  },
  plugins: [],
}

