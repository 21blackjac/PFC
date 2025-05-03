/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B38B59', // Couleur dorée marocaine
        secondary: '#1E3A8A', // Bleu profond
        accent: '#C53030', // Rouge terreux
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}