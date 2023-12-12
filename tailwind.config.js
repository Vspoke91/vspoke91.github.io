/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      Agbalumo: ["Agbalumo", "sans-serif"],
      mono: ["monospace", "sans-serif"],
      libre: ["Libre Franklin", "sans-serif"],
    },
    extend: {
      height: { inherit: "inherit" },
      width: { inherit: "inherit" },
      gridAutoRows: {
        screen: "100vh",
      },
      backgroundColor: {
        main: "#1F1F1F",
      },
    },
  },
  plugins: [scrollHide()],
};

function scrollHide() {
  return plugin(({ addUtilities }) => {
    addUtilities({
      /* Hide scrollbar for Chrome, Safari, Edge and Opera */
      ".scroll-no-style::-webkit-scrollbar": {
        display: "none",
      },
      /* Hide scrollbar for Firefox and IE */
      ".scroll-no-style": {
        "-ms-overflow-style": "none", // IE
        "scrollbar-width": "none", // Firefox
      },
    });
  });
}
