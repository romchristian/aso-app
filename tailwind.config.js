module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
