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
                        scrollbarTrack: '#ffffff',
                        scrollbarThumb: 'blue',
                        scrollbarThumbHover: '#555',
                    },
                    dark: {
                        1: '#121212',
                        2: '#272727',
                        scrollbarTrack: '#121212',
                        scrollbarThumb: '#9CD08F',
                        scrollbarThumbHover: '#555',
                    }
                },
            },
        },
    },
    plugins: [],
}
