/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#091a2f",
        secondary: "#3d3d3d",
        tertiary: "#e9e9e9",
      },
    },
    fontSize: { 
      '4xl': '2.25rem', 
      '5xl': '3rem', 
      '6xl': '3.75rem', 
      '7xl': '4.5rem', 
      '8xl': '6rem', 
    }, 
    screens: { 
      sm: '480px', // mobile
      md: '768px', // tablet
      lg: '1024px', // laptop
      xl: '1280px', // desktop
    },
  },
  plugins: [],
}