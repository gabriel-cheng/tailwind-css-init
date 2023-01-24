/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'citybens': '#0D0D0D',
        'button': '#2A2EFF',
        'citygreen': '#E8FF01'
      },
      maxWidth: {
        '2700': '168.75rem'
      }
    },
  },
  plugins: [],
}
