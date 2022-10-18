/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          magenta: "hsl(300, 43%, 22%)",
          pink: "hsl(333, 80%, 67%)",
        },
        base: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(300, 24%, 96%)",
          200: "hsl(303, 10%, 53%)",
        },
      },
      fontFamily: {
        body: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
