"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Wrapper = styled_components_1.default.div `
  border-radius: ${(0, pxToRem_1.default)(8)};
  background-color: ${(p) => `var(--color-${p.background})`};
  padding: var(--spacing-16);
`;
/**
 * Card component
 */
const Card = ({ background = 'white', children, className }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ background: background, className: className }, { children: children })));
};
exports.Card = Card;
//# sourceMappingURL=index.js.map