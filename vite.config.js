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
        day3: resolve(__dirname, "days/day3.html"),
        day3_1: resolve(__dirname, "days/day3-1.html"),
        day4: resolve(__dirname, "days/day4.html"),
        day5: resolve(__dirname, "days/day5.html"),
        day6: resolve(__dirname, "days/day6.html"),
        day7: resolve(__dirname, "days/day7.html"),
        day8: resolve(__dirname, "days/day8.html"),
        day9: resolve(__dirname, "days/day9.html"),
        day10: resolve(__dirname, "days/day10.html"),
        day11: resolve(__dirname, "days/day11.html"),
        day12: resolve(__dirname, "days/day12.html"),
        day13: resolve(__dirname, "days/day13.html"),
        day14: resolve(__dirname, "days/day14.html"),
        day15: resolve(__dirname, "days/day15.html"),
      },
    },
  },
  base: "./",
  server: {
    port: 3000,
  },
  publicDir: "public",
});
