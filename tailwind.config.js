/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%) scaleX(0)' },
          '100%': { transform: 'translateX(0) scaleX(1)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0) scaleX(1)' },
          '100%': { transform: 'translateX(100%) scaleX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out forwards',
        slideOut: 'slideOut 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}