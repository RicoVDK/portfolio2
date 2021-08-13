module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow-right': 'spin 10s linear infinite',
        'spin-slower-right': 'spin 20s linear infinite',
        'spin-slow-left': 'reverse-spin 10s linear infinite',
        'spin-slower-left': 'reverse-spin 20s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      },
      colors: {
        primary: {
          DEFAULT: '#FCD34D',
          '2': '#FBBF24',
          '3': '#F59E0B'
        },
        'gray-900': '#1e1e27'
      },
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
      },
      stroke: {
        'gray-800': '#1F2937',
      },
      minWidth: {
        '72': '18rem',
        '1000px': '1000px',
      },
      maxWidth: {
        '56': '14rem',
        '900px': '900px',
        '1200px': '1200px'
      }
    },
    screens: {
      'tablet': '768px',
      'desktop': '1024px',
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive']
    },
  },
  plugins: [],
}
