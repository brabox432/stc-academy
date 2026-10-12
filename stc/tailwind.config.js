/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"Inter"', 'monospace'],
      },
      colors: {
        stc: {
          bg: '#0d0d14',
          'bg-soft': '#12121f',
          panel: '#16162a',
          'panel-light': '#1c1c34',
          border: '#222238',
          'border-light': '#2e2e4a',
          primary: '#a78bfa',
          'primary-dim': '#8b6fe0',
          'primary-bright': '#c4b5fd',
          secondary: '#60a5fa',
          'secondary-dim': '#3b82f6',
          accent: '#22d3ee',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
          'text-primary': '#f1f1f5',
          'text-secondary': '#a1a1b8',
          'text-muted': '#6b6b80',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'blink': 'blink 1.5s steps(2) infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(167,139,250,0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(167,139,250,0.4)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0.3' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
