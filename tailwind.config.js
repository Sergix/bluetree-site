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
        error: {
          default: '#F96858',
          darker: '#E71F08',
        },
        success: '#4ADFA5',
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
        '32': '32em',
        '24': '24em',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config('theme.fontSize.5xl'),
          color: config('theme.colors.secondary.darker'),
          fontWeight: config('theme.fontWeight.bold'),
          lineHeight: config('theme.lineHeight.none'),
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
