module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'cabin':['Cabin', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/bg.png')",
         
      },
      colors: {
        'bg': '#E5E5E5',
        "links":"#00D7FF"
      },
    },
  },
  plugins: [],
}