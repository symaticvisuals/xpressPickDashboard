module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        base: "var(--color-text-base)",
        "base-dark": "var(--color-text-muted)",
      },
      backgroundImage: {
        light: 'url("./assets/images/light-bg.svg")',
        glassmorphism: 'url("./assets/images/glassmorphism.png")',
        login2: 'url("./assets/images/login2.png")',
      },
      textColor: {
        skin: {
          dark: "var(--color-text-dark)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
          secondary: "var(--color-text-secondary)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-main": "var(--color-fill-main)",
          "fill-muted": "var(--color-fill-muted)",
          "fill-muted-dark": "var(--color-text-muted)",
          "fill-secondary": "var(--color-fill-secondary)",
          "button-base": "var(--color-button-base)",
          "button-base-hover": "var(--color-button-base-hover)",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
