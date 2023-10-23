/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        'talassa-primary': '#448498',
        'talassa-secondary': '#FFE7A0',
        'talassa-tertiary': '#30A2FF'
      }
    },
  },
  plugins: [],
}

