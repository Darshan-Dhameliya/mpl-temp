/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: { max: "767px" },
        tab: { min: "768px", max: "1023px" },
        mobtab: { max: "1023px" },

        lap: { min: "1024px" },
      },

      fontFamily: {
        sans: ['"Josefin Sans"', "sans"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        darkPrimary: "linear-gradient(90deg, #2F323B 0%, #3A3E49 100%)",
        darkSecondary: "linear-gradient(180deg, #21252E 0%, #171B24 100%)",
      },

      colors: {
        transparent: "transparent",
      },
    },
  },
};
