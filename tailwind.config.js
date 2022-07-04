// tailwind.config.js
module.exports = {
    mode: "jit",
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    // specify other options here
    theme: {
        extend: {
            boxShadow: {
                div: "0 1em 1em -1em rgba(0, 0, 0, .25)",
            },
        },
    },
};
