/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
      handwriting: ['"gochi hand"', 'sans-serif']
    },
    fontSize: {
      sm: ['0.85rem', { lineHeight: 1.25 }],
      base: ['1rem', { lineHeight: 1.75 }],
      lg: ['1.125rem', { lineHeight: 1.3 }],
      xl: ['1.333rem', { lineHeight: 1.3 }],
      '2xl': ['1.777rem', { lineHeight: 1.3 }],
      '3xl': ['2.369rem', { lineHeight: 1.3 }],
      '4xl': ['3.157rem', { lineHeight: 1.3 }],
      '5xl': ['4.209rem', { lineHeight: 1.3 }]
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
}
