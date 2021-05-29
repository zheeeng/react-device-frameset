"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_pages_theme_basic_1 = require("vite-pages-theme-basic");
exports.default = vite_pages_theme_basic_1.createTheme({
    topNavs: [
        { text: 'index', path: '/' },
        {
            text: 'Github ⭐',
            href: 'https://github.com/zheeeng/react-device-frameset',
        },
    ],
    logo: 'React Device Frameset',
});
