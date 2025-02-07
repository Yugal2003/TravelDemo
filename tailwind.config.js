 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'bw' : '575px',
        'bs' : '990px',
        'bm': '1200px',
        'xl': '1300px',
        '2xl': '1400px',
      }
    },
  },
  plugins: [],
}