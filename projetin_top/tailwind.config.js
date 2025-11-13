/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ DaisyUI ativado aqui
  daisyui: {
    themes: ["light", "dark", "cupcake"], // 🎨 opcional — escolha seus temas preferidos
  },
}
