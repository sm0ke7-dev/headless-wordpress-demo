import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        // Override Relume's color system
        background: {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
          alternative: '#0A6F6A', // Atoll teal
        },
        border: {
          primary: '#E5E5E5',
          brand: '#0A6F6A', // Atoll teal
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
          alternative: '#FFFFFF',
        },
        link: {
          primary: '#0A6F6A', // Atoll teal
          hover: '#085955',
        },
        // Brand colors
        brand: {
          primary: '#0A6F6A',    // Atoll teal
          secondary: '#F2A65A',  // Sandy orange
          accent: '#355C7D',     // Ming blue
        },
      },
    },
  },
};
export default config;
