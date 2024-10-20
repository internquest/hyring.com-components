/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px',
      },
      fontFamily: {
        SpaceGrotesk: ["var(--font-space-grotesk)"],
      },
      animation: {
        "fill": "fill 8s linear forwards",
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        "fill": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        'scroll': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
