/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./src/components/**/*.{ts, tsx}"],
  //content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
    },
  },
  plugins: [],
};
