/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: '#F9FAFB', // gray-50
                foreground: '#111827', // gray-900
                primary: {
                    DEFAULT: '#2563EB', // blue-600
                    foreground: '#FFFFFF',
                    hover: '#1D4ED8', // blue-700
                },
                secondary: {
                    DEFAULT: '#4ADE80', // green-400
                    foreground: '#064E3B', // green-900
                    hover: '#22C55E', // green-500
                },
                card: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Inter', 'sans-serif'], // Unifying to sans-serif for modern look
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            transitionDuration: {
                '400': '400ms',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
                'card-hover': '0 0 0 1px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.08)',
            },
        },
    },
    plugins: [],
}
