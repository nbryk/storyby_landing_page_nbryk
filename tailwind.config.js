module.exports = {
  // ... інші конфігурації
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          // Назва keyframe
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-out forwards", // Назва анімації, тривалість, функція
        "fade-in-delay": "fade-in 1.5s ease-out 0.5s forwards", // З затримкою
      },
    },
  },
  // ...
};
