/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1240px',
      },
      colors: {
        'blue-1': '#64CCC5',
      },
      fontFamily: {
        'proza': ['Proza Libre', 'sans-serif'],
        'russo': ['Russo One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'skranji': ['Skranji', 'sans-serif'],
      },
      animation: {
        'fa-spin': 'fa-spin 0.4s linear',
      },
      keyframes: {
        'fa-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backgroundColor: {
        'primary': '#0E1A1F',
        'secondary': '#1a2428',
        'hover': '#2a343a',
        'button': '#E88D67',
        'button-hover': '#e07f57',
      },
    },
  }
}

