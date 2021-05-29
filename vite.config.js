"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var path = __importStar(require("path"));
var plugin_react_refresh_1 = __importDefault(require("@vitejs/plugin-react-refresh"));
var vite_plugin_mdx_1 = __importDefault(require("vite-plugin-mdx"));
var vite_plugin_react_pages_1 = __importDefault(require("vite-plugin-react-pages"));
exports.default = vite_1.defineConfig({
    plugins: [
        plugin_react_refresh_1.default(),
        vite_plugin_mdx_1.default(),
        vite_plugin_react_pages_1.default({
            pagesDir: path.join(__dirname, 'pages'),
        }),
    ],
});
