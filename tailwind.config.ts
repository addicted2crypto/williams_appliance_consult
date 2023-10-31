import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding:"2rem",
      screens: {
        "2xl": "1400px"
      },

    },
    extend: {
      maxWidth: {
        "8xl": "1408px"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--fourground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-forground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-forground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-forground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-forground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-forground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-forground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-forground))"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) -2px)",
        sm: "calc(var(--radius) -4px",
      }, 
      keyframes: {
        "accordion-down" : {
          from: { height: "0"},
          to: { height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up" : {
          from: { height: "var(--radix-accordion-content-height)"},
          to: { height: "0" },
          
        },
      },
      animation: {
        "accordion-up" : "accordion-up 0.2 ease-out",
        "accordion-down" : "accodion-down 0.2 ease-out"
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
