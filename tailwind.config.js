/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'givenget': ['"givenget"', 'Rubik'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d88256",

          "secondary": "#11f4e1",

          "accent": "#ff8c84",

          "neutral": "#34283E",

          "base-100": "#20222E",

          "info": "#5CAFEB",

          "success": "#29A38F",

          "warning": "#F6BC60",

          "error": "#EF2561",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
