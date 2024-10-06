/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/Resources/**/*.blade.php", "./src/Resources/**/*.js"],
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1440px",
            },
            padding: {
                DEFAULT: "90px",
            },
        },
        screens: {
            sm: "525px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
            "2xl": "1440px",
            1180: "1180px",
            1060: "1060px",
            991: "991px",
            868: "868px",
        },
        extend: {
            colors: {
                loreGreen: "#32B440",
                loreYellow: "#faef06",
                loreLightYellow: "#fffba6",
            },
            fontFamily: {
                poppins: ["Poppins"]
            },
        }
    },
    plugins: [],
    safelist: [
        {
            pattern: /icon-/,
        },
        'origin-bottom-right',
        'rotate-[25deg]',
        'md:grid-cols-2',
        'md:text-base',
        'md:text-6xl',
        'md:px-12',
        'scale-75',
        'md:py-20',
        'md:mt-8',
        'md:mb-0',
        'py-10',
        'my-6',
    ]
};
