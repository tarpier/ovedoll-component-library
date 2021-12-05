const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        copy: colors.gray[700],
        accent: colors.teal[400],
        'accent-dark': colors.teal[700]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
