/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Prata', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'black': '#0a0a0b',
        'yellow': '#fbe850',
        'grey': '#adadad',
        'darkgrey': '#2E3038'
      }
    },
  },
  plugins: [],
}
