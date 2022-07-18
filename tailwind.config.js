/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jz,ts,jsx,tsx}",
    "./components/**/*.{jz,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: { 
      colors:{
        primaryColour : "rgba(58,58,133,1)",
      },
    },
  },
  plugins: [],
}
