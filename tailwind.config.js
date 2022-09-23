/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        panToggle: 'box-shadow: inset -24 0 0 2px rgb(0 0 0 / 0.05);',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
