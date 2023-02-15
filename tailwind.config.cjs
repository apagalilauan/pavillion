/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["satoshi", "sans"],
    },
    extend: {
      colors: {
        primary: "#3264FE",
        secondary: "#F8F9FF",
        tertiary: "#434343",
        disabled: "#424324",
      },
    },
  },
  plugins: [],
};
