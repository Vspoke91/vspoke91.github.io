import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./"),
      "@Comp": path.resolve("./src/components"),
      "@Data": path.resolve("./src/data"),
      "@assets": path.resolve("./src/assets"),
    },
  },
});
