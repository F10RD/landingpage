import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        galaxy: {
          black: '#050814',
          deep: '#0a0f2e',

          // Niebieski – główny akcent (stare nazwy zachowane dla kompatybilności)
          purple: {
            dark: '#0f1a5c',
            DEFAULT: '#2150c7',
            light: '#4d9de0',
            glow: '#7ec8f5',
          },
          // Aliasy – nowe semantyczne nazwy
          blue: {
            dark: '#0f1a5c',
            DEFAULT: '#2150c7',
            light: '#4d9de0',
            glow: '#7ec8f5',
          },

          // Magenta – drugi akcent
          red: {
            dark: '#6b0a3a',
            DEFAULT: '#e91e8c',
            light: '#f06ab3',
          },
          magenta: {
            dark: '#6b0a3a',
            DEFAULT: '#e91e8c',
            light: '#f06ab3',
          },

          // Złoto – trzeci akcent
          orange: {
            DEFAULT: '#f5a623',
            light: '#f7c05a',
            glow: '#fde8b0',
          },
          gold: {
            DEFAULT: '#f5a623',
            light: '#f7c05a',
            glow: '#fde8b0',
          },

          star: '#ffffff',
          white: '#ffffff',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'galaxy-gradient':
          'linear-gradient(135deg, #050814 0%, #0a0f2e 40%, #0f1a5c 70%, #050814 100%)',
        'nebula-gradient':
          'linear-gradient(135deg, #2150c7 0%, #e91e8c 50%, #f5a623 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(33,80,199,0.15) 0%, rgba(233,30,140,0.1) 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(77,157,224,0.4)',
        'glow-blue': '0 0 30px rgba(77,157,224,0.4)',
        'glow-red': '0 0 30px rgba(233,30,140,0.4)',
        'glow-magenta': '0 0 30px rgba(233,30,140,0.4)',
        'glow-orange': '0 0 30px rgba(245,166,35,0.4)',
        'glow-gold': '0 0 30px rgba(245,166,35,0.4)',
        card: '0 4px 32px rgba(33,80,199,0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
