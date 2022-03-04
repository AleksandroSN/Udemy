module.exports = {
  content: ["./views/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      maxWidth: {
        "30rem": "30rem",
        "2/3": "66vw",
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
