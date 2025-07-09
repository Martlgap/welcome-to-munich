import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  var config = {
    plugins: [react()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/welcome-to-munich/";
  }
  return config;
});