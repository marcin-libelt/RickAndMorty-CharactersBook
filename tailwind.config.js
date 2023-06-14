/** @type {import('tailwindcss').Config} */

const tokens = require("./design-tokens/tokens");
const transpile = require("./design-tokens/token-to-tailwind");

const tailwindPropsNameMap = new Map([["fontWeights", "fontWeight"]]);

const classes = {
  colors: transpile(tokens.colors),
  opacity: transpile(tokens.opacity),
  fontWeight: transpile(tokens.fontWeights),
  borderRadius: transpile(tokens.borderRadius),
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...classes,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
