const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      white: {
        DEFAULT: '#fffffe',
      },
      gray: {
        50: '#e8e8e8',
        100: '#d0d0d1',
        200: '#b9b9ba',
        300: '#a2a2a3',
        400: '#8b8b8d',
        500: '#737376',
        600: '#5c5c5f',
        700: '#454548',
        800: '#2d2d31',
        850: '#222225',
        900: '#16161a',
      },
    },
    extend: {
      colors: {
        primary: {},
        secondary: {
          DEFAULT: '#2cb67d',
          dark: '#28a672',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
