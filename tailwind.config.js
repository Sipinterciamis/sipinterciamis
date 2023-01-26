/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors: {
        'primary-purple-1': '#690B51',
        'primary-purple-2': '#A72185',
        'primary-purple-3': '#C674B1',
        'primary-purple-4': '#F8CDED',
        'secondary-yellow-1': '#FFBF00',
        'secondary-yellow-2': '#FFF000',
        'secondary-yellow-3': '#FFF88F',
        'secondary-yellow-4': '#FFFCC5',
        'gray-1': '#2F1A2A',
        'gray-2': '#8E8E8E',
        'gray-3': '#B9B9B9D9'
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
}
