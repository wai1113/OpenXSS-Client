/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bg-random":
                    "url('https://source.unsplash.com/random?wallpapers')",
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            "light",
            "dark",
            "aqua",
            "pastel",
            "dracula",
            "cmyk",
            "autumn",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "cupcake",
            "bumblebee",
            "emerald",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
        ],
    },
};
