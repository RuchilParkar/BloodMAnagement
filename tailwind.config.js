module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Life Current Theme
        primary: {
          DEFAULT: "#C41E3A", // crimson - Life force urgency
          50: "#FDF2F4", // crimson-50
          100: "#FCE7EA", // crimson-100
          200: "#F8CDD3", // crimson-200
          300: "#F2A4B0", // crimson-300
          400: "#E97B8D", // crimson-400
          500: "#C41E3A", // crimson-500
          600: "#A61B31", // crimson-600
          700: "#8B1729", // crimson-700
          800: "#721421", // crimson-800
          900: "#5F121C", // crimson-900
        },
        // Secondary Colors - Medical Trust
        secondary: {
          DEFAULT: "#4A90E2", // blue - Medical trust and calm guidance
          50: "#F0F7FF", // blue-50
          100: "#E0EFFF", // blue-100
          200: "#BAD9FF", // blue-200
          300: "#7CBEFF", // blue-300
          400: "#4A90E2", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#FFD700", // gold - Achievement celebration
          50: "#FFFEF0", // gold-50
          100: "#FFFCE0", // gold-100
          200: "#FFF9C2", // gold-200
          300: "#FFF388", // gold-300
          400: "#FFED4E", // gold-400
          500: "#FFD700", // gold-500
          600: "#D4AF37", // gold-600
          700: "#B8860B", // gold-700
          800: "#9A7B0A", // gold-800
          900: "#7D6608", // gold-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50 - Clean medical environment
        surface: "#FFFFFF", // white - Content cards and forms
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800 - Extended reading
          secondary: "#7F8C8D", // gray-500 - Information hierarchy
        },
        // Status Colors
        success: {
          DEFAULT: "#27AE60", // green-600 - Positive confirmation
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#27AE60", // green-500
        },
        warning: {
          DEFAULT: "#F39C12", // orange-500 - Important alerts
          50: "#FFFBEB", // orange-50
          100: "#FEF3C7", // orange-100
          500: "#F39C12", // orange-500
        },
        error: {
          DEFAULT: "#E74C3C", // red-500 - Problem identification
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E74C3C", // red-500
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        mono: ['JetBrains Mono', 'monospace'], // Technical data
        sans: ['Source Sans Pro', 'sans-serif'], // Default
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'floating': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}