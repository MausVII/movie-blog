module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          highlight: '#00ADB5',
          base: '#393E46'
        }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
