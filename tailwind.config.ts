import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkpurple: "#1E152A",
        error: "#EF2D56",
        white: "#FFFFFF",
        success: "#7BD389",
        warning: "#FFFC31",
        text: "#182825",
        blue: "#3D3B8E",
        darkblue: "#24234C",
        lightblue: "#9AC2F6", 
        newtext: "#F6F8FD",
        newtext2: "#EDF0FB",
      },  
      translate: {
        'ease': '-2rem',
        '200': '200%',
      }
    },
  },
  "compilerOptions": {
    "forceConsistentCasingInFileNames": true
  },
  plugins: [],
} satisfies Config;
