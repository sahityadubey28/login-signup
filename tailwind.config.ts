import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E85D04",
          hover: "#DC2F02",
          light: "#F48C06",
        },
        peach: {
          light: "#FFEDD8",
          DEFAULT: "#FFD8B4",
        },
        neutral: {
          DEFAULT: "#8E9196",
          dark: "#333333",
        },
      },
      boxShadow: {
        "3d": "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.5)",
        "3d-hover": "12px 12px 20px rgba(0, 0, 0, 0.15), -12px -12px 20px rgba(255, 255, 255, 0.6), inset 2px 2px 5px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;