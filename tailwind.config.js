module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow-right': 'spin 20s linear infinite',
        'spin-slower-right': 'spin 40s linear infinite',
        'spin-slow-left': 'reverse-spin 20s linear infinite',
        'spin-slower-left': 'reverse-spin 40s linear infinite',
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
        'gray-900': '#1e1e27',
        'red-1000': '#2f1c1c',
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
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '700px': '700px',
        '900px': '900px',
        '1200px': '1200px'
      },
      minHeight: {
        'full': '100%',
      },
      padding: {
        '18': '4.5rem',
      }
    },
    screens: {
      'tablet': '768px',
      'desktop': '1024px',
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive'],
      margin: ['last'],
      transitionProperty: ['hover'],
      display: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
