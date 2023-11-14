module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "colors": {
      "grn": {
        "50": "#e9eeed",
        "100": "#d3deda",
        "200": "#a7bdb5",
        "300": "#7b9b90",
        "400": "#4f7a6b",
        "500": "#235946",
        "600": "#1c4738",
        "700": "#15352a",
        "800": "#0e241c",
        "900": "#07120e"
      }
    }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}