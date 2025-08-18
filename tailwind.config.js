/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          900: '#7f1d1d',
        },
        golden: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        sage: {
          400: '#84cc16',
          500: '#65a30d',
          600: '#4d7c0f',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
