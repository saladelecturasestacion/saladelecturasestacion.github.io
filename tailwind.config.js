import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#F2E8E1',
        rojoSuave: '#F2D8DA',
        rojo: '#BE1D2D',
        morado: '#2A2064',
        verde: '#3CB14B',
      },
      fontFamily: {
        comic: ["'Comic Neue'", 'system-ui','Avenir','Helvetica','Arial','sans-serif']
      },
      keyframes: {
        'swipe-hint': {
          '0%':   { transform: 'translateX(0) scale(0.8)', opacity: '0' },
          '20%':  { opacity: '1' },
          '100%': { transform: 'translateX(50px) scale(1)', opacity: '0' }
        }
      },
      animation: {
        'swipe-hint': 'swipe-hint 2s ease-in-out infinite'
      }
    }
  },
  plugins: [
    aspectRatio,
  ]
}
