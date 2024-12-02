import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      textShadow: {
        title: `4px 4px 4px rgba(0, 0, 0, 0.2), 
          4px 4px 4px rgba(0, 0, 0, 0.3)`
      },
      fontSize: {
        label_2: '0.8125rem',
        label_1: '0.75rem',
        body_2: '0.75rem',
        body_1: '1.125rem',
        heading_3: '1.25rem',
        heading_2: '1.5rem',
        heading_1: '2rem',
        display_2: '3rem',
        display_1: '5rem'
      },
      colors: {
        //* only Text colors
        text_1: '#BCA2FF',

        //* Primary colors
        primary_50: '#f1e9f3',
        primary_100: '#d3bbd9',
        primary_200: '#bd9ac7',
        primary_300: '#9f6cae',
        primaty_400: '#8d509e',
        primary_500: '#702486',
        primary_600: '#66217a',
        primary_700: '#501a5f',
        primary_800: '#3e144a',
        primary_900: '#2f0f38',

        //* Secondary colors
        secondary_50: '#f0f1f2',
        secondary_100: '#d1d3d8',
        secondary_200: '#bbbec5',
        secondary_300: '#9ca1aa',
        secondary_400: '#898e99',
        secondary_500: '#6b7280',
        secondary_600: '#616874',
        secondary_700: '#4c515b',
        secondary_800: '#3b3f46',
        secondary_900: '#2d3036',

        //* third colors
        third_50: '#faf4fc',
        third_100: '#f1def6',
        third_200: '#eacef2',
        third_300: '#e0b7ec',
        third_400: '#daa9e8',
        third_500: '#d194e2',
        third_600: '#be87ce',
        third_700: '#9469a0',
        third_800: '#73517c',
        third_900: '#583e5f',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        //* acento colors
        accent_50: '#e9eaeb',
        accent_100: '#babdc1',
        accent_200: '#989da3',
        accent_300: '#697079',
        accent_400: '#4c545f',
        accent_500: '#1f2937',
        accent_600: '#1c2532',
        accent_700: '#161d27',
        accent_800: '#11171e',
        accent_900: '#0d1117'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'custom-1': '6px 6px 6px 0px #00000040',
        'custom-2': '4px 4px 4px 0px #0000004F',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Activa hover para bg
      textColor: ['hover'],      // Activa hover para text
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-textshadow')]
} satisfies Config
