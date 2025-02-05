import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  loader: { ".js": "jsx" },
  base: "/gfe-testimonial-card/",
  build: {
    outDir: "docs", // Output files to the `docs` directory
  },
});
