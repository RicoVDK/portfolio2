let flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

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
        'pill-click-effect': 'pill-click-grow 0.2s linear forwards',
        'square-click-effect': 'square-click-grow 0.2s linear',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        },
        'pill-click-grow': {
          from: {
            transform: 'scaleX(1) scaleY(1)',
            opacity: '1',
          },
          to: {
            transform: 'scaleX(1.25) scaleY(1.75)',
            opacity: '0'
          }
        },
        'square-click-grow': {
          from: {
            transform: 'scaleX(1) scaleY(1)',
            opacity: '1',
          },
          to: {
            transform: 'scaleX(1.25) scaleY(1.25)',
            opacity: '0'
          }
        },
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
        '300px': '300px',
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
      maxHeight: {
        '1050px': '1050px',
      },
      padding: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      translate: {
        '-30': '-7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse closest-side, var(--tw-gradient-stops))',
      },
      spacing: {
        '19': '5.25rem',
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
      display: ['hover', 'group-hover'],
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
