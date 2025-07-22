/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "logo-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-10px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 2.5s infinite",
        "logo-bounce": "logo-bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
