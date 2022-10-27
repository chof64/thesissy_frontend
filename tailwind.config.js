/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wmsu-red": "#A20202",
        "app-white": "#EBD8D8",
        "app-red-gray": "#4F4141",
      },
      fontFamily: {
        // TODO: Add backup fonts
        sans: ["Poppins"],
        mono: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
};
