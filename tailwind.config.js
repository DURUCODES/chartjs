/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "med-brown": "hsl(28, 10%, 53%)",
      },
      width: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
