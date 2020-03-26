const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#84b9bf',
          default: '#73AFB6',
          darker: '#5F9DA1',
          darkest: '#385F61',
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
        '32': '32em',
        '16': '16em',
        '9/10': '90%',
        'hero': '80vh',
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
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
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
