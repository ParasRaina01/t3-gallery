import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// import "@uploadthing/react/styles.css";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
