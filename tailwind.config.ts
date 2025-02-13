module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Dark background
        secondary: "#1E293B", // Darker card background
        borderGlow: "#8B5CF6", // Neon glow effect
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
    },
  },
      plugins: [],
};
