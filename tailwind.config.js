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
      '3xl': ['4rem', '5.125rem'], // 64px 82px
      '2xl': ['4rem', '4.8125rem'], // 64px 77px
      '1xl': ['2rem', '2.4375rem'], // 32px 39px
      'xl': ['1.5rem', '1.8125rem'], // 24px 29px
      'lg': ['1.25rem', '1.5rem'], // 20px 24px
      'md': ['1.125rem', '1.5rem'], // 18px 24px
      'sm': ['1rem', '1.1875rem'], // 16px 19px
      'xs': ['0.875rem', '1.0625rem'], // 14px 17px
    },
    extend: {
      boxShadow: {
        'light': '0px 5px 30px rgba(0, 0, 0, 0.1)',
        'dark': '0px 5px 30px #A445ED'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

