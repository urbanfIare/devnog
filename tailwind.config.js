// 📄 tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif','"Noto Sans KR"', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };