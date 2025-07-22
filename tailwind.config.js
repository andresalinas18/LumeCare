// tailwind.config.js
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#C9A475',
        'primary-dark': '#B58E5E',
        text: '#2E2E2E',
        background: '#FDFCFB',
        'grey-light': '#A9A9A9',
        white: '#FFFFFF',
        'accent-rose': '#D8A9AD',
        'accent-sage': '#9DB5A3',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('landscape', '@media (orientation: landscape)');
    }),
  ],
};
