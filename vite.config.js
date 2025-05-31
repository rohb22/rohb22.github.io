import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rohb22.github.io",
  plugins: [tailwindcss(), react()],
});