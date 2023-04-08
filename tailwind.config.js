/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ejs,js,ts}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#333333',
      'primary': '#04B57B',
      'secondary': '#004731',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg/bg_hero.png')",
        'merit-pattern': "url('/src/assets/images/bg/bg_hero.png')"
      },
    },
  },
  plugins: [],
}

