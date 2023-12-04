/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
