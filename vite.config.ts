import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
// import { VitePWA } from "vite-plugin-pwa";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: fs.readFileSync("./ssl/server.key"),
  //     cert: fs.readFileSync("./ssl/server.crt")
  //   }
  // },
  plugins: [
    react(),
    legacy(),
    // VitePWA({ registerType: "autoUpdate" }),
    // splitVendorChunkPlugin()
  ],
  // build: {
  //   chunkSizeWarningLimit: 750,
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes("node_modules")) {
  //           return id.toString().split("node_modules/")[1].split("/")[0].toString();
  //         }
  //       }
  //     }
  //   }
  // }
})