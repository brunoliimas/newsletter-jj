/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'blue-j&j': '#0F68B2',
        'red-500': '#EB1700',
        'wine-500': '#9E0000',
        'purple-800': '#8C3BBB',
        'neutral-200': '#E8E6E3'
      },
    },
  },
  plugins: [],
}

