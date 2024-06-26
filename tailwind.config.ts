import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        "snake": {
          '0% ': { scale: '1', opacity: '1' },
          '100% ': { scale: '.6', opacity: '.5', transform: 'rotateY(45deg)' },
        },
        "food": {
          '0% ': { scale: '1'},
          '100% ': { scale: '.8'},
        },

    
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "wiggleSnake": {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        "colors": {
          '0%': { color: 'red' },
          '25%': { color: 'purple' },
          '50%': { color: 'blue' },
          '100%': { color: 'black' },
        },
        "flip": {
          '0%': { },
          '100%': { transform: 'rotateY(360deg)' },
        },


      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "snake": "snake .7s linear infinite alternate",
        "food": "food .7s linear infinite alternate",
        "wiggle": "wiggle .8s linear infinite alternate",
        "wiggleSnake": "wiggleSnake .8s linear infinite alternate",
        "flip": "flip .8s linear infinite alternate",
        "colors": "wiggle 2s linear infinite alternate, food 1s linear infinite alternate, colors 1s linear infinite alternate",
      },


    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config