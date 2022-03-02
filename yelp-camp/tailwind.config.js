module.exports = {
  content: ["./views/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    maxWidth: {
      "30rem": "30rem",
      "2/3": "66vw",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
