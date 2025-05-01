import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),

        // update path to files inside the 'days' folder
        day1: resolve(__dirname, "days/day1.html"),
        day2: resolve(__dirname, "days/day2.html"),
      },
    },
  },
  base: "./",
  server: {
    port: 3000,
  },
  publicDir: "public",
});
