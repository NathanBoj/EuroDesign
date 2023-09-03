/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin'),
  ],
}