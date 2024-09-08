/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "special-elite": ['"Special Elite"', "cursive"],
      },
      colors: {
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          // ... otros tonos de amber si es necesario
        },
        cardboard: {
          lighter: "#E5D3B3",
          light: "#D2B48C",
          DEFAULT: "#A0522D",
          dark: "#654321",
          darker: "#3E2723",
        },
        "manila-folder": "#f3e5ab",
        "manila-dark": "#e6d08f",
        "manila-light": "#fff9e6",
        "manila-shadow": "rgba(160, 82, 45, 0.2)", // Un marrón semitransparente
        "police-stamp": "#1c4966",
        "police-report": "#2c2c2c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
