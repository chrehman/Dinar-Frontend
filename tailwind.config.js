/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ["'Courier Prime', monospace", ...defaultTheme.fontFamily.sans],
    },
      colors: {
        'lgreyy': '#F6F1EB',
        'lblack': '#444444',
      },
    },
  },
  plugins: [],
}
