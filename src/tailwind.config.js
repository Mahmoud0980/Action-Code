/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223B72",      // الأزرق الداكن للنص والأزرار
        accent: "#2563EB",       // الأزرق الفاتح للعناوين الصغيرة
        lightBg: "#F5F7FB",      // الخلفية العامة
        muted: "#6B7280",        // النص الرمادي
      },
      boxShadow: {
        hero: "0px 40px 80px rgba(0,0,0,0.15)",
      },
 
    },
  },
  plugins: [],
}