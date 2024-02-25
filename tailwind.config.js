/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                shadow: "3px 5px 6px -1px rgba(241, 131, 93, 0.7)",
            },
            colors: {
                primary: {
                    100: "#fce0d7",
                    200: "#f8c1ae",
                    300: "#f5a286",
                    400: "#f1835d",
                    500: "#ee6435",
                    600: "#be502a",
                    700: "#8f3c20",
                    800: "#5f2815",
                    900: "#30140b",
                },
                gray: {
                    50: "#f2f2f2",
                    100: "#e6e6e6",
                    200: "#cccccc",
                    300: "#b3b3b3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4d4d4d",
                    800: "#333333",
                    900: "#1a1a1a",
                },
            },
        },
    },
    plugins: [],
};
