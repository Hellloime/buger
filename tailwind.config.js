/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#ffc045",
        secondary: "#3d2514",
        danger: "#bf2222",
        primary_hover: "#f5b029",
        secondary_hover: "#231105",
        danger_hover: "#990e0e"
      },
      fontFamily: {
        secondary: ['"Alfa Slab One"']
      }
     

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

  
  
}







