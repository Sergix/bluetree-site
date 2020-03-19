const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#73AFB6',
          darker: '#5F9DA1',
        },
        secondary: {
          lighter: '#E2D893',
          default: '#A79E65',
          darker: '#2B2301',
        },
      },
      height: {
        '1/2': '50%',
        '3/4': '75%',
      },
      zIndex: {
        'neg-1': '-1',
      },
      margin: {
        auto: 'auto',
      },
      fontFamily: {
        sans: '"Roboto Slab"',
        serif: 'Gelasio',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config('theme.fontSize.2xl'),
        },
        h2: {
          fontSize: config('theme.fontSize.xl'),
        },
        h3: {
          fontSize: config('theme.fontSize.lg'),
        },
      })
    }),
  ],
}
