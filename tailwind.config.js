/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 4s ease-in-out infinite",
        textGlow: "textGlow 3s ease-in-out infinite",
        lightning: "lightning 1s infinite",
      },
      boxShadow: {
        glow: "0 0 15px #a3e635, 0 0 30px #a3e635",
        neon: "0 0 10px #a3e635, 0 0 20px #a3e635, 0 0 30px #a3e635",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #a3e635, 0 0 30px #a3e635",
          },
          "50%": {
            boxShadow: "0 0 20px #a3e635, 0 0 40px #a3e635",
          },
        },
        textGlow: {
          "0%, 100%": {
            textShadow: "0 0 5px #a3e635, 0 0 10px #a3e635",
          },
          "50%": {
            textShadow: "0 0 10px #a3e635, 0 0 20px #a3e635",
          },
        },
        lightning: {
          "0%": {
            opacity: "0",
            transform: "scale(1.5)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  safelist: ["shadow-neon"],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 5px #a3e635, 0 0 10px #a3e635",
        },
      });
    },
  ],
};
