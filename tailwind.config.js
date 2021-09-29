module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: "2px solid #0000ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
