/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        primary:"#CBBF50",
        secondary:"#8CF3FD",
        accent:"#D9D9D9",


      },

      

      backgroundImage:{

        bgHeader:"linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba (255, 255, 255, 0.88)),"


      }

     
     

      


    },
  },
  
}