/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html','./src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'serif'],
            },
            colors: {
                'tw-blue': '#0F172A',
                'button-blue': '#0066C8',
            },
        },
    },
    plugins: [],
}