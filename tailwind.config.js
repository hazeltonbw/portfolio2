/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn .25s ease-in-out forwards',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
