/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#479fff',
        'secondary': '#fe9870',
        'lightsecondary': '#f2eddf',
        'third': '#78d7dd',
        'background': '#1e212d',
        'lightbackground': '#404662',
      },
    },
  },
  plugins: [],
};
