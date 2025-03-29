module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#c7d7fe',
          300: '#a5b8fc',
          400: '#8191f8',
          500: '#6366f1', // لون بنفسجي عصري
          600: '#5145cd',
          700: '#4238a8',
          800: '#362f85',
          900: '#2e2a6b',
        },
        secondary: {
          500: '#06b6d4', // لون تركواز جذاب
          600: '#0891b2',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      boxShadow: {
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};