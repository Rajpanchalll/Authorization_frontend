/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-background': 'rgb(52, 119, 132)',
        'secondary': '#2C3856',
        'btn-color': '#4F5972',
        'submitbtn' :'#70F1E1'
      },
      colors:{
        'submitbtncolor' :'#70F1E1'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(52, 119, 132, 1) 0%, rgba(87, 191, 187, 1) 67%, rgba(87, 191, 187, 1) 100%)',
      },
    },
  },
  plugins: [],
}