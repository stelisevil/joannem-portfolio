const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "400": "100rem"
      },
      fontFamily: {
        sans: ["brown", ...defaultTheme.fontFamily.sans],
        bold: ["brownBold"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
