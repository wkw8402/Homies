const purple = {
  900: '#160041',
  800: '#18083A',
  700: '#2C1854',
  600: '#49479F',
  500: '#6260b5',
  400: '#7C7AC4',
  300: '#B5A1F5',
  200: '#D2C6FA',
  100: '#e0d7fc',
  50: '#f0ebfe',
  25: '#F4F0FC',
};
const yellow = {
  900: '#FAAF19',
  800: '#FDBE3F',
  700: '#EFB42D',
  600: '#F4C350',
  500: '#F8D075',
  400: '#fbde9b',
  300: '#FDEBC2',
  200: '#fef3da',
  100: '#fef7e7',
  50: '#fffaf6',
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        written: ['Gochi Hand', 'cursive'],
      },

      colors: {
        yellow: yellow,
        purple: purple,
      },

      lineHeight: {
        tighter: '1.1',
        loose: '1.875',
      },

      fontSize: {
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '2.7rem',
        '6xl': '3.25rem',
        '7xl': '3.75rem',
        '8xl': '5rem',
        '9xl': '6rem',
      },

      height: {
        '30vw': '30vw',
      },

      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '5rem',
      },

      maxWidth: {
        prose: '65ch',
      },

      scale: {
        30: '0.3',
        80: '0.8',
        130: '1.3',
        135: '1.35',
      },

      rotate: {
        '-8': '-8deg',
        4: '4deg',
        8: '8deg',
      },

      animation: {
        ping: 'ping 2.5s cubic-bezier(0, 0, 0.3, 1) infinite',
        'horizontal-bounce': 'horizontal-bounce 1s infinite',
        'button-background': 'button-background 5s ease infinite',
      },

      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },

        'horizontal-bounce': {
          '50%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },

          '0%, 100%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },

        'button-background': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },

      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              fontSize: theme('fontSize.5xl'),
            },
            h2: {
              fontSize: theme('fontSize.4xl'),
            },
            h3: {
              fontSize: theme('fontSize.3xl'),
            },
            // ...
          },
        },

        xl: {
          css: {
            h1: {
              fontSize: theme('fontSize.6xl'),
            },
            h2: {
              fontSize: theme('fontSize.5xl'),
            },
            h3: {
              fontSize: theme('fontSize.3xl'),
            },
            // ...
          },
        },

        DEFAULT: {
          css: [
            {
              color: purple['800'],
              a: {
                color: purple['600'],
                '&:hover': {
                  color: purple['400'],
                },
              },
              strong: {
                color: purple['900'],
              },
              'ol > li::before': {
                color: purple['800'],
              },
              'ul > li::before': {
                backgroundColor: purple['800'],
              },
              hr: {
                borderColor: purple['50'],
              },
              blockquote: {
                color: purple['700'],
                borderLeftColor: purple['600'],
              },
              h1: {
                color: purple['900'],
              },
              h2: {
                color: purple['900'],
              },
              h3: {
                color: purple['900'],
              },
              h4: {
                color: purple['900'],
              },
              'figure figcaption': {
                color: purple['800'],
              },
              code: {
                color: purple['900'],
              },
              'a code': {
                color: purple['700'],
              },
              pre: {
                color: purple['25'],
                backgroundColor: purple['900'],
              },
              thead: {
                color: purple['900'],
                borderBottomColor: purple['100'],
              },
              'tbody tr': {
                borderBottomColor: purple['100'],
              },
              'p.lead': {
                color: purple['900'],
              },
            },
          ],
        },

        light: {
          css: [
            {
              color: purple['25'],
              strong: {
                color: '#fff',
              },
              a: {
                color: '#fff',
                '&:hover': {
                  color: purple['100'],
                },
              },
              'ol > li::before': {
                color: purple['25'],
              },
              'ul > li::before': {
                backgroundColor: purple['100'],
              },
              hr: {
                borderColor: purple['50'],
              },
              blockquote: {
                color: '#fff',
                borderLeftColor: purple['100'],
              },
              h1: {
                color: '#fff',
              },
              h2: {
                color: '#fff',
              },
              h3: {
                color: '#fff',
              },
              h4: {
                color: '#fff',
              },
              'figure figcaption': {
                color: purple['50'],
              },
              code: {
                color: '#fff',
              },
              'a code': {
                color: purple['400'],
              },
              pre: {
                color: '#fff',
                backgroundColor: purple['800'],
              },
              thead: {
                color: '#fff',
                borderBottomColor: purple['100'],
              },
              'tbody tr': {
                borderBottomColor: purple['50'],
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
