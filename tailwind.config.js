/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#3b82f6', 
        'primaryGray':'#2563eb', 
        'secondery':'#f87171',
        'iconEdditColor':'green',
        'iconDelettColor':'red',
      },
      fontFamily: {
        'BebasNeue': "'Bebas Neue', 'sans-serif'",
        'Poppins': "'Poppins', 'sans-serif'",
      },
      backgroundImage: {
        'hero-bg': "url('/Public/banner.jpg')",
        'erro': "url('/Public/error.jpg')",
      }
    },
  },
  plugins: [],
}