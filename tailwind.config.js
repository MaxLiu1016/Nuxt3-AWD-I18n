/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite.{js,ts}",
    ],
    theme: {
        colors: {
            // 主色
            "primary-120": "#01217E",
            "primary-base": "#022EB3",
            "primary-80": "#033AE3",
            "primary-60": "#1C54FC",
            "primary-40": "#4E7AFD",
            "primary-20": "#81A0FE",
            "primary-10": "#E5ECFF",
            // 次色
            "secondary-120": "#C29C00",
            "secondary-base": "#F7C700",
            "secondary-80": "#FFD529",
            "secondary-60": "#FFDF5C",
            "secondary-40": "#FFE98F",
            "secondary-20": "#FFF3C2",
            "secondary-10": "#FFFAE3",
            // Accent
            "accent-120": "#1EA2AE",
            "accent-base": "#25C9D8",
            "accent-80": "#51D5E1",
            "accent-60": "#7CE0E9",
            "accent-40": "#A8EAF0",
            "accent-20": "#D3F5F8",
            "accent-10": "#E9FAFB",
            // 成功綠
            "success-120": "#00A384",
            "success-base": "#00D6AD",
            "success-20": "#BBFBEF",
            "success-10": "#ECFEFA",
            // 警告橘
            "warning-120": "#C29C00",
            "warning-base": "#F7C700",
            "warning-20": "#FFF3C2",
            "warning-10": "#FFFAE3",
            // 危險紅
            "danger-120": "#B71024",
            "danger-base": "#EE4055",
            "danger-20": "#FACBD1",
            "danger-10": "#FDECEF",
            // 灰階
            "neutral-80": "#4B4B4B",
            "neutral-60": "#909090",
            "neutral-50": "#CCCCCC",
            "neutral-40": "#ECECEC",
            "neutral-30": "#F2F2F2",
            "neutral-10": "#F9F9F9",
            overlay: "#00000066",
            background: "#F2F3F7",
            white: "#FFFFFF",
        },
    },
    plugins: [require("flowbite")],
    jit: true,
    // theme: {
    //     colors: {
    //         primary: {
    //             120: "#01217E"
    //             100: "#022EB3",
    //             80: "#033AE3",
    //             60: "#1C54FC",
    //             40: "#4E7AFD",
    //             20: "#81A0FE",
    //             10: "#E5ECFF",
    //         },
    //     },
    // },
};
