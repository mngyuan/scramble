module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      left: {'1/2': '50%'},
      screens: {
        '2xl': '1440px',
      },
      maxWidth: {
        '7xl': '84rem',
        '8xl': '96rem',
      },
    },
  },
  variants: {
    margin: ['first', 'last'],
  },
  plugins: [require('@tailwindcss/typography')],
};
