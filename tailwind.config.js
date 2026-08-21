/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1F30',
          900: '#0F2A40',
          800: '#153A56',
          700: '#1E4A6B',
          600: '#295E85',
        },
        gold: {
          300: '#E9CD8C',
          400: '#DAB35E',
          500: '#C9962F',
          600: '#A87823',
        },
        cream: {
          50: '#FBF8F2',
          100: '#F6F0E4',
        },
        ink: '#221F1A',
        sage: '#6E8F6B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        tag: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 12px 30px -12px rgba(15, 42, 64, 0.25)',
        'card-hover': '0 20px 40px -12px rgba(15, 42, 64, 0.35)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
