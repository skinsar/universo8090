/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b1020',
        'brand-magenta': '#FF2D95',
        'brand-cyan': '#00E5FF',
        'brand-purple': '#9B6CFC',
      },
      fontFamily: {
        'title': ['Audiowide', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-magenta': '0 0 15px rgba(255, 45, 149, 0.6)',
        'glow-cyan': '0 0 15px rgba(0, 229, 255, 0.6)',
      },
      // 👇 AÑADIMOS ESTAS DOS SECCIONES 👇
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}