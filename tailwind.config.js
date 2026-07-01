/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        "surface-alt": "#F5F5F7",
        border: "#E5E5E5",
        "border-strong": "#D2D2D7",
        "text-primary": "#1D1D1F",
        "text-secondary": "#6E6E73",
        "text-tertiary": "#86868B",
        accent: {
          DEFAULT: "#0071E3",
          hover: "#0077ED",
          light: "#E8F0FE",
          subtle: "#F0F5FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover":
          "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
        "card-lg":
          "0 8px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
        nav: "0 1px 3px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        card: "12px",
        button: "10px",
        badge: "8px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
