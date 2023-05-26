/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,mdx,css}',  ],
  theme: {
    extend: {
      colors: {
        purple: '#660066',
        'purple-bg': '#4d4459',

        grey: '#C5C5C4',
        'grey-100': '#B7B7B7',

        bright: '#E2E2E2',
        'bright-100': '#F0F0F0',
      },
    },
  },
  plugins: [],
}