module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "openSans": ["font-family: 'Open Sans', sans-serif;"]
      },
      colors:{
        "main-extra-dark-blue": "#0B0C10",
        "main-dark-blue": "#1F2833",
        "silver": "#C5C6C7",
        "main-cyan": "#66FCF1",
        "dark-cyan": "#45A293"
      },
         screens: {
      'max-1535': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-1279': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-1023': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'max-767': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'max-639': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
},
    

  plugins: [],
}