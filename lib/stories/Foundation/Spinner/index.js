"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const SpinnerElement = styled_components_1.default.span `
  display: inline-block;
  width: ${(p) => `var(--spacing-${p.size})`};
  height: ${(p) => `var(--spacing-${p.size})`};
  border: ${(p) => `solid calc(var(--spacing-${p.size}) * 0.1) var(--color-${p.color})`};
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
/**
 * Badge component
 */
const Spinner = ({ className, color = 'black', size = '32' }) => {
    return (0, jsx_runtime_1.jsx)(SpinnerElement, { className: className, color: color, size: size });
};
exports.Spinner = Spinner;
//# sourceMappingURL=index.js.map