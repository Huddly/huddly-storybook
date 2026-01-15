"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Wrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.p `
  margin: 0;
  line-height: 1.6;
  font-size: ${(p) => `var(--font-size-${p.size})`};
  color: ${(p) => `var(--color-${p.color})`};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
  letter-spacing: ${(p) => (p.extraLetterSpacing ? '0.02em' : 'normal')};
`;
/**
 * Text component
 */
const Text = ({ size = '14', color = 'grey15', type = 'p', bold, children, className, extraLetterSpacing, }) => {
    return ((0, jsx_runtime_1.jsx)(exports.Wrapper, Object.assign({ as: type, bold: bold, size: size, color: color, className: className, extraLetterSpacing: extraLetterSpacing }, { children: children })));
};
exports.Text = Text;
//# sourceMappingURL=index.js.map