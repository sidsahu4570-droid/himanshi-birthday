/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bdayNight: {
          950: '#080711',
          900: '#100D1A',
          800: '#171120',
          700: '#231B30'
        },
        bdayGold: '#F4D58D',
        bdayChampagne: '#FFE9B8',
        bdayBlush: '#EFA7B5',
        bdayRose: '#D9829A',
        bdayIvory: '#FFF8EC',
        bdayLavender: '#B9A7D9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'candle-flicker': 'candleFlicker 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'sparkle-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        candleFlicker: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '25%': { opacity: '0.95', transform: 'scale(1.02)' },
          '50%': { opacity: '0.75', transform: 'scale(0.98)' },
          '75%': { opacity: '0.9', transform: 'scale(1.01)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
}
