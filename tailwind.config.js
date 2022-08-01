/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        mouse: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "url('./img/common-bg.svg')",
      },
      animation: {
        'mouse': 'mouse 2s infinite',
      }
    },
    fontFamily: {
      sans: ['Source Sans Pro, sans-serif'],
    },
  },
  plugins: [],
};
