/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#292855"
      },
      backgroundImage: {
        bgHeader : "url('/public/media/Sfondo.gif')"
      }
      
      
    },
  },
  plugins: [],
}

   