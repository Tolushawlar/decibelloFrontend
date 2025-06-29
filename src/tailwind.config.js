/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5858f5",
        secondary: "#f7d54c",
        dark: "#000000",
        light: "#f2f1eb",
      },
      fontFamily: {
        sans: ["General Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        'h1': ['34px', { fontWeight: '700', lineHeight: '1.2' }],
        'h2': ['22px', { fontWeight: '600', lineHeight: '1.3' }],
        'h3': ['18px', { fontWeight: '500', lineHeight: '1.4' }],
        'body': ['14px', { fontWeight: '400', lineHeight: '1.6' }],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-secondary',
    'text-primary',
    'text-secondary',
    'border-primary',
    'border-secondary',
    'hover:text-primary',
    'hover:text-secondary',
    'bg-primary/10',
    'bg-secondary/10',
  ],
  plugins: [],
}