/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#ffffff",
        "primary-black": "#1d1e20",
        "dark-grey": "#57595f",
        "light-grey": "#f0f1f5",
        "primary-blue": "#415ee5",
        "lighter-purple": "#a7a1e0",
        "darker-purple": "#8e95e6",
        "bright-purple": "#9d58e9",
        "pink": "#f8dffe"
      },
      boxShadow: {
        "3xl": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      },
      backgroundImage: {
        "background-gradient": "linear-gradient(120deg, rgba(167,161,224,1) 0%, rgba(130,133,235,1) 61%, rgba(142,149,230,1) 100%)",
        "pink-gradient": "radial-gradient(75% 74% at 65% 12%, #F3D7FEFF 0%, #073AFF00 23%),radial-gradient(100% 71% at 80% 14%, #f8dffe 1%, #073AFF00 52%),radial-gradient(75% 75% at 50% 50%, #FEFEFEFF 0%, #FFFFFFFF 100%)",
        "tagline-gradient": "linear-gradient(180deg, rgba(65,94,229,1) 0%, rgba(157,88,233,1) 90%)",
        "hover-gradient1": "linear-gradient(180deg, rgba(157,88,233,1) 0%, rgba(65,94,229,1) 90%)",
        "hover-gradient2": "linear-gradient(180deg, rgba(167,161,224,1) 0%, rgba(65,94,229,1) 90%)"
      },
      borderRadius: {
        "4xl": "0.8rem",
        "2xl": "0.8rem 0.8rem 0rem 0rem",
        "1xl": "0rem 0rem 0.8rem 0rem"
      },
      fontSize: {
        l: "2.5rem",
        m: "1.5rem",
        s: ".9rem",
        xs: ".8rem",
        xxs: ".7rem",
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
      },
      // Media queries reference points
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '767px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'sm': {'max': '767px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}

