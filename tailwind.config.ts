import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // هذا هو المسؤول عن الدارك مود
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ألوان هوية ريفيتشو الأصلية
        brand: {
          navy: "#102A43",   // الكحلي العميق
          green: "#176B61",  // الأخضر البترولي
          gold: "#E9B44C",   // الذهبي الناعم
          ivory: "#F7F5EF",  // العاجي
        }
      },
    },
  },
  plugins: [],
};
export default config;