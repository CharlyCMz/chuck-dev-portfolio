/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202327',
        'secondary': '#f5f5f5',
        'terciary': '#cd1f1d'
      },
      fontFamily: {
        'main': ['Roboto'],
      },
    },
  },
  plugins: [],
}
