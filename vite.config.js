import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // Ensures `process.env` references don't interfere
  },
  envDir: "./", // Ensures environment variables are picked from the root `.env` file
});
