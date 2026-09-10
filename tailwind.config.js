/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      colors: {
        udeo: {
          red: "#b40001",
          "red-dark": "#8a0001",
          "red-light": "#d43f3f",
          gold: "#d4a017",
          "gold-light": "#f0c850",
          "gold-pale": "#fdf6e3",
          charcoal: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
