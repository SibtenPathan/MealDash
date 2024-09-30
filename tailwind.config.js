/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        richRed: '#D53F30',
        cream: '#FFF8E1',
        darkBrown: '#5B3A29',
      },
    },
  },
  plugins: [require('daisyui')],
}
