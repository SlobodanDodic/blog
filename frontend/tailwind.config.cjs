const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sofia: ["'Sofia Sans', sans-serif", ...defaultTheme.fontFamily.sans],
        fauna: ["'Fauna One', sans-serif", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "midnight": "#181c2f",
        "main": "#f6f5f1",
      },
    },
  },
  plugins: [],
}
