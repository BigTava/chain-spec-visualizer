import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        polkadot: "#FF2670",
      },
      backgroundImage: {
        "polkadot-factory": "url('/polkadot-factory-background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
