import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-scilla)"],
        serif: ["var(--font-libre)"],
        sans: ["var(--font-source)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
