import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://DanielPinedaM.github.io/react-rick-and-morty-api/",
  plugins: [react(), eslint()],
});
