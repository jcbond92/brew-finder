module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dark: "#0f0020",
    }),
    screens: {
      "sm-max": { max: "630px" },
    },
    extend: {
      outline: {
        gray: "2px solid #0000ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
