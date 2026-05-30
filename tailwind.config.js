/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--border)), 0 20px 60px -20px rgb(0 0 0 / 0.35)',
      },
    },
  },
}

