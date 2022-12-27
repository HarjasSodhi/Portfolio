/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        flywiseImg: 'linear-gradient(black, black),url(image-to-be-fake-filters.jpg)'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeintranslate: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-3px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(3px)'
          },
        },
        fadeintranslatebottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-5px)'
          },
        }
      },
    },
  },
  plugins: [],
}
