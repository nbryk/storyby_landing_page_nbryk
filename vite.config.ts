import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

const pages = {
  main: resolve(__dirname, "index.html"),
  "landing-1": resolve(__dirname, "src/pages/landing-1.html"),
  //"landing-2": resolve(__dirname, "src/pages/landing-2.html"),
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: pages,
    },
  },
});
