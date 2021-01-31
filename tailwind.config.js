module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        flamingo: "#f0582e",
        oceanBlue: "#384695",
        oceanBlueLight: "#4B589F",
      },
    },
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
