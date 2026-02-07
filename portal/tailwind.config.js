/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-green': '#39ff14',
                'neon-purple': '#b026ff',
                'neon-gold': '#ffd700',
                'dark-bg': '#050510',
                'card-bg': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Orbitron', 'sans-serif'], // We might need to import this font
            }
        },
    },
    plugins: [],
}
