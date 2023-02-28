/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    light: {
                        1: '#ffffff',
                        2: '#272727',
                    },
                    dark: {
                        1: '#121212',
                        2: '#272727',
                    }
                },
            },
        },
    },
    plugins: [],
}
