/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        bkpink:{
          100:"#FBEAEB",
          500: '#fce4ec'
        },
        bkdblue:{
          100:"#EBF5FB",
          500: '#2F3C7E'
        }
      }
    },
  },
  plugins: [],
}
