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
      keyframes: {
        cutIn: {
          "0%": {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          },
          "100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
        },
        cutOut: {
          "0%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          "100%": {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          },
        },
      },
      boxShadow: {
        "lg-around": "0px 0px 20px 1px rgba(0,0,0,0.1)",
      },
      animation: {
        cutIn: "cutIn 250ms ease-out forwards",
        cutOut: "cutOut 250ms linear forwards",
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
