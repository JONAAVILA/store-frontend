export default {
  darkMode: 'class', // o 'media' si querés que siga la preferencia del sistema
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        lilita:['var(--font-lilita)','sans-serif'],
        montserrat:['var(--font-montserrat)','sans-serif']
      }
    },
  },
  plugins: [],
}
