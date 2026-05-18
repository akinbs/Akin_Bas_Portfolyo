/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:  '#000000',
        frost:   '#ffffff',
        shadow:  '#181818',
        whisper: '#6d6d6d',
        misty:   '#636363',
        ocean: {
          green:  'rgb(160, 224, 171)',
          orange: 'rgb(255, 172, 46)',
          red:    'rgb(165, 45, 37)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1078px',
      },
      borderRadius: {
        pill: '75.024px',
      },
      animation: {
        'float':      'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
