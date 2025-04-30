import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Vercel does not support async directly in config, so we can't use `await` in top-level
export default defineConfig({
  assetsInclude: ['**/*.PNG'], // Case-sensitive!
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          // Only import the plugin in development if needed
          require("@replit/vite-plugin-cartographer").cartographer(),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Make sure Vercel serves the right directory
    emptyOutDir: true, // Clear out the dist/public directory before building
  },
});
