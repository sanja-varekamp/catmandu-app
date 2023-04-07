/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts","./src/**/*.tsx"],
  theme: {
    
    extend: {
      colors: {
        'light-green': '#BBE1D5',
        'dark-green': '#43AA8B',
        'transparent-green': '#BBE1D580',
        'pink': '#edbdb2',
        'transparent-pink': '#edbdb280'
  
      },
      backgroundImage: {
        'cat-texture': "url('/public/background.svg')",
        
      },
    },
  },
  plugins: [],
}

