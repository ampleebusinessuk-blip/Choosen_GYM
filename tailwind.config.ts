import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        panel: "#141414",
        panel2: "#1a1a1a",
        line: "#222",
        line2: "#2a2a2a",
        muted: "#7a7a7a",
        text: "#e5e5e5",
        brand: "#ef2b2b",
        brand2: "#ff4444",
        ok: "#22c55e",
        warn: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
