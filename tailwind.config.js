/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e4b351',
        'primary-dark': '#d4a03f',
        'primary-light': '#f0c366',
      },
    },
  },
  plugins: [],
};
