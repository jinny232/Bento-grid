/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html','./public/text.html'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
      },
       fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    extend: { 
      gridRow: {
        '3/2': '1.5', // Custom utility for row-span
      },
    },
  }, 
   variants: {
    extend: {
      display: ['responsive'], // Make sure display variants are enabled
    },
  },
  plugins: [],
}

