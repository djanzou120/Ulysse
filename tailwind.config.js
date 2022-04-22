const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}", "./app/layouts/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textUnderlineOffset : {
                10 : "16px"
            },
            border : {
                3 : "3px"
            }
        },
        fontFamily: {
            ...fontFamily,
            'manrope': "Manrope",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            ...colors,
        }
    },
    variants: {
        extend: {},
    }
}
