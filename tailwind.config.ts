module.exports = {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-00": "var(--neutral-00)",
        "neutral-10": "var(--neutral-10)",
        "neutral-20": "var(--neutral-20)",
        "neutral-30": "var(--neutral-30)",
        "neutral-40": "var(--neutral-40)",
        "neutral-50": "var(--neutral-50)",
        "neutral-60": "var(--neutral-60)",
        "neutral-70": "var(--neutral-70)",
        "primary-light-20": "var(--primary-light-20)",
        "primary-light-40": "var(--primary-light-40)",
        "primary-light-50": "var(--primary-light-50)",
        "primary-light-60": "var(--primary-light-60)",
        "primary-light-70": "var(--primary-light-70)",
        "primary-light10": "var(--primary-light10)",
        "secondary-light10": "var(--secondary-light10)",
        "secondary-light20": "var(--secondary-light20)",
        "secondary-light30": "var(--secondary-light30)",
        "secondary-light40": "var(--secondary-light40)",
        "secondary-light50": "var(--secondary-light50)",
        "secondary-light70": "var(--secondary-light70)",
        white: "var(--white)",
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
      fontFamily: {
        "body-2-regular-rubik-16px":
          "var(--body-2-regular-rubik-16px-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-medium-regular-nunito-16px":
          "var(--body-medium-regular-nunito-16px-font-family)",
        "body-small-bold": "var(--body-small-bold-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "headline-desktop-h2-bold":
          "var(--headline-desktop-h2-bold-font-family)",
        "headline-desktop-h4-bold":
          "var(--headline-desktop-h4-bold-font-family)",
        "headline-desktop-h5-bold":
          "var(--headline-desktop-h5-bold-font-family)",
        "headline-desktop-h6-bold":
          "var(--headline-desktop-h6-bold-font-family)",
        "headline-desktop-h6-regular":
          "var(--headline-desktop-h6-regular-font-family)",
        "headline-h3-oscine-bold-32px":
          "var(--headline-h3-oscine-bold-32px-font-family)",
        "headline-subtitle": "var(--headline-subtitle-font-family)",
        "headline-tablet-h2-bold": "var(--headline-tablet-h2-bold-font-family)",
        "label-medium": "var(--label-medium-font-family)",
        "label-small": "var(--label-small-font-family)",
        "overline-regular": "var(--overline-regular-font-family)",
        "subtitle-large": "var(--subtitle-large-font-family)",
        "subtitle-small": "var(--subtitle-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", md: "2rem" }, screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1400px" } },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: ["class"],
};
