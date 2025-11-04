module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          medium: "var(--primary-medium)",
          dark: "var(--primary-dark)"
        },
        // Secondary Brand Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          light: "var(--text-light)",
          neutral: "var(--text-neutral)",
          subtle: "var(--text-subtle)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          overlay: "var(--bg-overlay)",
          section: "var(--bg-section)",
          card: "var(--bg-card)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)"
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)"
        },
        button: {
          primary: {
            background: "var(--button-primary-bg)",
            text: "var(--button-primary-text)"
          },
          secondary: {
            background: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)"
          }
        }
      },
      // Typography
      fontSize: {
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)'
      },
      fontWeight: {
        'thin': 'var(--font-weight-thin)',
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'regular': 'var(--font-weight-regular)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
        'extrabold': 'var(--font-weight-extrabold)',
        'black': 'var(--font-weight-black)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'extra': 'var(--line-height-extra)'
      },
      // Spacing
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)'
      },
      // Border Radius
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)'
      },
      // Border Width
      borderWidth: {
        'default': 'var(--border-width)'
      },
      // Font Family
      fontFamily: {
        'league': ['League Spartan', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};