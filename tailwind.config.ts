import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs:"475px",
      sm: "640px",
      md: "768px",
      xmd: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      roboto: ["RobotoFlex", "sans-serif"],
      inter: ['"Inter Tight"', "sans-serif"],
      mono:["Montserrat","sans-serif"]
    },
    fontSize: {
      xs:"14px",
      sm:"15px",
      md:"16px",
      lg:"20px",
      xl:"24px",
      "2xl":"40px",
      "3xl":"48px"

    },
    lineHeight: {
      7: "64px",
      6: "48px",
      5: "40px",
      4: "36px",
      3: "28px",
      2: "24px",
      1: "20px",
    },
    blur: {
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px",
      64: "64px",
      128: "128px",
    },
    extend: {
      backgroundImage: {
        "banner": "url('/image/banner.png')"
      },
      colors: {
        background: {
          primary: "#F5F5F5",
          secondary: "#fdf4c2",
          tertiary: "#E8F0FC",
        },
        content: {
          primary: "#424242",
          secondary: "#096F0F",
          tertiary: "#2A2A2A",
        },
        border: {
          primary: "#00AAA1",
          secondary: "#C4C4C4",
          tertiary:"#D9D9D9"
        },
        button:{
          primary: "#001844",

        }
      },
    },
  },
  plugins: [],
};
export default config;
