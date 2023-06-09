/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'primary' : '#920B1C',
      'white' : 'white',
    },
    fontFamily: {
      'default': ['Poppins', 'sans-serif'],
      'light': ['Poppins', 'sans-serif'],
      'regular': ['Poppins', 'sans-serif'],
      'semibold': ['Poppins', 'sans-serif'],
      'bold': ['Poppins', 'sans-serif'],
      'body' : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}