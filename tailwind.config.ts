import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'slate': '#B3B3B3',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        popInSlow: 'popIn 1.5s ease-out',
        moveUpSlow: 'moveUp 1.5s ease-out forwards',
        popInFast: 'popIn 0.5s ease-out',
        moveUpFast: 'moveUp 0.5s ease-out forwards',
      },
    },
  },
  
  plugins: [],
};
export default config;
