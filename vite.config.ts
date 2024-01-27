import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    // ↓ 追記
    alias: {
      "~/": `${__dirname}/src/` // path.join(__dirname, "src/") でも可
    }
    // alias: [
    //   { find: "~/", replacement: `${__dirname}/src/` }
    // ],
  }
});
