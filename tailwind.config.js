/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#FDACA5',
        bodyColor: '#3D3A38',
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme("colors.bodyColor") },
      });
    }),
    require('@tailwindcss/forms'),
  ],
}