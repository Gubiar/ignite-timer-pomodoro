/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        "gray-100": "var(--gray-100)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        "green-300": "var(--green-300)",
        "green-500": "var(--green-500)",
        "green-700": "var(--green-700)",
        "red-500": "var(--red-500)",
        "red-700": "var(--red-700)",
        "yellow-500": "var(--yellow-500)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        rubik: "var(--font-rubik)",
      },
    },
  },
  plugins: [],
};
