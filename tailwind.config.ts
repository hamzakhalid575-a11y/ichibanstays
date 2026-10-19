import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2F5E3A",
          greenDark: "#244a2e",
          sage: "#EFF1EA",
          cream: "#FCFCFA",
          ink: "#2F2A25",
          muted: "#595959",
          teal: "#0f8586",
          tealDark: "#0a5f60",
          forest: "#1b3a24",
          footer: "#0a2b1d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Roboto", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
