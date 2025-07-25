import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Montserrat-Medium', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        black: ['Montserrat-Black'],
        italic: ['Montserrat-MediumItalic'],
      },
    },
  },
  plugins: [],
}

export default config
