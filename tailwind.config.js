module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  corePlugins: {},
  theme: {
    extend: {
      colors: {
        petePrimary: "#748479",
        petePrimaryDark: "hsl(135, 16%, 35%)",
        petePrimaryLight: "hsl(139, 18%, 80%)",
        mainText: "#3B3F42",
        peteSecondary: "#9B8579"
      },
      fontFamily: {
        display: ['Fira Sans', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
