/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#030014',
        'primary-green': {
          DEFAULT: '#047857',
          light: '#059669',
          dark: '#065F46',
        },
      },
      backgroundImage: {
        'highlight-green': 'linear-gradient(180deg, #047857 0%, #059669 100%)',
      },
    },
  },
  plugins: [],
}
