/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      primary: '#A445ED',
      secondary: '#FF5252',
      neutral: {
        100: '#FFFFFF',
        200: '#F4F4F4',
        300: '#E9E9E9',
        400: '#757575',
        500: '#3A3A3A',
        600: '#2D2D2D',
        700: '#1F1F1F',
        800: '#050505',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    fontSize: {
      'heading-l': ['4rem', '4.8125rem'], // 64px 77px
      'heading-m': ['1.5rem', '1.8125rem'], // 24px 29px
      'heading-s': ['1.25rem', '1.5rem'], // 20px 24px
      'body-m': ['1.125rem', '1.5rem'], // 18px 24px
      'body-s': ['0.875rem', '1.0625rem'], // 14px 17px
    },
    extend: {
      screens: {
        'xs': { 'max': '639px' },
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

