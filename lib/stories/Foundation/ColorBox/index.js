"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const ColoredBox = styled_components_1.default.div `
  background-color: ${(p) => `var(--color-${p.color})`};
`;
/**
 * Grid component
 */
const ColorBox = ({ color, children, className }) => {
    return ((0, jsx_runtime_1.jsx)(ColoredBox, Object.assign({ color: color, className: className }, { children: children })));
};
exports.ColorBox = ColorBox;
//# sourceMappingURL=index.js.map