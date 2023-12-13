/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  /** @type {import('daisyui').Config} */
  daisyui: { themes: ["cupcake"] },
}
