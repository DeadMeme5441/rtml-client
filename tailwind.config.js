module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Navy: "#2E4C6D",
        Blue: "#396EB0",
        Vintage: "#DADDFC",
        Orange: "#FC997C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
