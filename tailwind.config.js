/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                "test": 'var(--test)',
                'tahiti': {
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
            },
            width: {
                'base': '16px'
            },
            height: {
                'base': '16px'
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
};
