
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#1A1F2C",
        foreground: "#C8C8C9",
        accent: {
          DEFAULT: "#9EE7D8",
          foreground: "#1A1F2C",
        },
        muted: {
          DEFAULT: "#222222",
          foreground: "#8E9196",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
