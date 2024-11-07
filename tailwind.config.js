/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "3xl": "1920px",
      "xl": "1280px",
      "md":"768px",
      "ma":"375px",
    },

    backgroundImage: {
      img: "url(images/tailwind-1.png)",
      "layout-b": "url(images/tailwind-2.png)",
      "layoutc": "url('./images/ballrescrop.png')",
      "layoutd": "url('./images/tailwind4.png')"
    },
  },

  plugins: [],
};



