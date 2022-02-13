const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Basier', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        copy: colors.gray[600],
        headline: colors.gray[800],
        'accent-light': colors.teal[200],
        accent: colors.teal[400],
        'accent-dark': colors.teal[700],
        dark: 'rgb(40, 40, 45)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
