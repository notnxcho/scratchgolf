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
      },
      backgroundImage: {
        'highlight-green': 'linear-gradient(180deg, #12AF9A 0%, #15CBB3 100%)',
      },
    },
  },
  plugins: [],
}
