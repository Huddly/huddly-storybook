"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Wrapper = styled_components_1.default.span `
  background-color: var(--color-lavender);
  color: var(--color-white);
  font-family: var(--font-family);
  font-size: ${(0, pxToRem_1.default)(14)};
  padding: ${(0, pxToRem_1.default)(2)} ${(0, pxToRem_1.default)(5)};
  height: 100%;
`;
/**
 * Badge component
 */
const Badge = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(Wrapper, { children: children });
};
exports.Badge = Badge;
//# sourceMappingURL=index.js.map