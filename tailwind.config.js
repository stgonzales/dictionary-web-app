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
      'body-m': ['1.125rem', '1.5rem']
    }
  },
  darkMode: 'class',
  plugins: [],
}

