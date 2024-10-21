const { transform } = require('next/dist/build/swc');

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
        'md3': '900px',
        'lg2': '1100px',
        'lg3': '1180px',
        'lg4': '1220px'
      },
      fontFamily: {
        SpaceGrotesk: ["var(--font-space-grotesk)"],
      },
      animation: {
        "fill": "fill 8s linear forwards",
        'scroll': 'scroll 40s linear infinite',
        'growBorder': 'growBorder 2.5s ease-in-out infinite',
        'scaleInOut': 'scaleInout 3s ease-in-out forwards',

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
        },
        'growBorder': {
          "0%": {
            transform: 'scale(1)',
            opacity: 1,
          },
          "100%": {
            transform: 'scale(1.5)',
            opacity: 0,
          }
        },
        'scaleInout':
        {
          "0%": {
            transform: 'scale(0)',
          },
          "50%": {
            transform: 'scale(1)',
          },
          "100%": {
            transform: 'scale(0)',
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
