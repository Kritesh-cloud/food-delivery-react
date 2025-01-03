import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Matches routes starting with /api
        target: 'http://localhost:8080', // Backend API URL
        changeOrigin: true, // Adjust origin
        secure: false, // Disable SSL verification (if needed)
      },
    },
  },
});

