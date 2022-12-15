/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jetbrains: ['JetBrains', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
            },
            maxWidth: {
                "bookmarks": "100rem",
            },
            backgroundImage: {
                "png": "url('/src/assets/images/bg.png')",
                "bg": "url('/src/assets/images/bg.webp')",
                "bg2": "url('/src/assets/images/bg2.webp')",
                "bg3": "url('/src/assets/images/bg3.webp')",
                "bg4": "url('/src/assets/images/bg4.webp')",
                "bg5": "url('/src/assets/images/bg5.webp')",
                "bg6": "url('/src/assets/images/bg6.webp')",
                "bg7": "url('/src/assets/images/bg7.webp')",
                "bg8": "url('/src/assets/images/bg8.webp')",
                "bg9": "url('/src/assets/images/bg9.webp')",
                "bg10": "url('/src/assets/images/paven.png')",
                "bg11": "url('/src/assets/images/paven2.png')",
                "c-gradient": "radial-gradient(circle, rgba(113,113,122,0) 0%, rgba(23,23,23,1) 70%);"
            },
            backgroundSize: {
                "bg-size": "3rem"
            }
        },
    },
    plugins: [],
};