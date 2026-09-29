import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        primary: {
          DEFAULT: "#6F4E37",
          dark: "#4A3426",
          foreground: "#FFFFFF"
        },
        accent: {
          DEFAULT: "#B88646",
          foreground: "#FFFFFF"
        },
        border: "#E8DED1",
        text: {
          DEFAULT: "#2E2A26",
          muted: "#7A6E65"
        },
        card: "#FFFFFF",
        cream: "#FAF7F2"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
