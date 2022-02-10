"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Wrapper = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.p `
    margin: 0;
    line-height: 1.2em;
    font-size: ${(p) => `var(--font-size-${p.size})`};
    color: ${(p) => `var(--color-${p.color})`};
    font-family: var(--font-family);
    font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
`;
/**
 * Text component
 */
const Text = ({ size = '14', color = 'black', type = 'p', bold, children, }) => {
    return (react_1.default.createElement(exports.Wrapper, { as: type, bold: bold, size: size, color: color }, children));
};
exports.Text = Text;
exports.default = exports.Text;
//# sourceMappingURL=index.js.map