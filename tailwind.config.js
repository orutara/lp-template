/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ejs,js,ts}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'sub': '#FAFAFA',
      'black': '#333333',
      'primary': '#04B57B',
      'secondary': '#004731',
      'graFrom': '#3cd84c',
      'graTo': '#1ae5a1',
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

