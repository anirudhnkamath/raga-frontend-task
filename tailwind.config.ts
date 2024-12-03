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
        blue: "hsl(246, 80%, 60%)",
        verydarkblue: "hsl(226, 43%, 10%)",
        darkblue: "hsl(235, 46%, 20%)",
        desaturatedblue: "hsl(235, 45%, 61%)",
        paleblue: "hsl(236, 100%, 87%)",
        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        selfcare: "hsl(43, 84%, 65%)"
      },
      fontFamily: {
        rubik: ["Rubik", 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
