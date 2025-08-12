import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
     testTimeout: 3_600_000,
    hookTimeout: 3_600_000,
  },
  plugins: [tsconfigPaths()],
});
