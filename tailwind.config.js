module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark3': '#202124',
      'dark2': '#282C2F',
      'dark1': '#323639',
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'dark3': '#202124',
       'dark2': '#282C2F',
       'dark1': '#323639',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}