/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#000AFF',
        primary:'#00D1FF',
        secondary:"#1e1e1e",
        sec:"#262729",
        prima:"#A2ACBD",
        seco:"#2997AB",
        textColor:"#666666",
        heads:"#222222"
      },
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif']
    },
    letterSpacing:{
      widest: '.25em',
    }
    },
  plugins: [],
}

