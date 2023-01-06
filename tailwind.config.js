/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {




    colors: {
      'primary': '#F54562',
      'Orange': '#FF5E00',
      'Yellow': '#FFAB00',
      'Green': '#00FFAA',
      'Blue': '#4579F5',
      'White': '#ffffff',
      'Light': '#F5F7FA',
      'LightDark': '#E0E0FF',
      'card': '#282a2e',
      'Bg': '#212429',
      "Black": '#282A2E'
    },


    fontFamily: {
      'Poppins': ['Poppins', 'ui-sans-serif'],
    },



    extend: {},
  },
  plugins: [],
}