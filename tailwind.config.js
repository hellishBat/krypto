/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        navy: '#160E33',
      },
      boxShadow: {
        'glow-xs': '0px 0px 0.4rem rgba(239, 68, 68, 0.4)',
        'glow-md': '0px 0px 3.125rem rgba(239, 68, 68, 0.4)',
        'focus-sm': '0 0 0 0.188rem rgba(239, 68, 68, 0.5)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        'vertical-video': '540 / 673',
      },
      fontFamily: { sans: ['Rubik', 'sans-serif'] },
    },
  },
}
