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
        background: "#050816",
        accent: {
          cyan: "#00E5FF",
          purple: "#7C3AED",
          green: "#00FFA3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.3), transparent)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 229, 255, 0.15)",
        "glow-purple": "0 0 40px rgba(124, 58, 237, 0.2)",
        "glow-green": "0 0 40px rgba(0, 255, 163, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
