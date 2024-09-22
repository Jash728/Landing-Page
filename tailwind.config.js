/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5F5F5',
        'yellow-highlight': '#FOF871',
        'salmon': '#EB7A52',
        'deep-blue': '#2127F6',
        'dark': '#181818',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Dela Gothic One', 'cursive'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

