import * as path from "node:path";
import react from "@vitejs/plugin-react";
import { configDotenv } from "dotenv";
import { defineConfig } from "vite";

configDotenv({
  path: path.resolve(__dirname, `.env.${process.env.DOTENV || "local"}`),
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
    },
  },
  envDir: "../../",
});
