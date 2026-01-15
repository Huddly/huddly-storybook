"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Spinner_1 = require("../../Foundation/Spinner");
const ButtonElement = styled_components_1.default.button `
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => (0, pxToRem_1.default)(p.fontSize)};
  padding: 0 var(--spacing-24);
  color: var(--color-grey45);
  font-family: var(--font-family);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: var(--color-grey15);
  }

  :active {
    color: var(--color-black);
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus-visible {
    outline: ${(0, pxToRem_1.default)(2)} solid var(--color-lavender);
    outline-offset: ${(0, pxToRem_1.default)(8)};
    border-radius: ${(0, pxToRem_1.default)(8)};
  }
`;
const ButtonLabel = styled_components_1.default.span `
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;
const ButtonSpinner = (0, styled_components_1.default)(Spinner_1.Spinner) `
  position: absolute;
`;
/**
 * Text Button component
 */
const TextButton = ({ children, className, disabled, loading, onClick, type = 'button', size = '16', }) => {
    return ((0, jsx_runtime_1.jsxs)(ButtonElement, Object.assign({ "aria-busy": loading, className: className, disabled: disabled || loading, onClick: onClick, type: type, fontSize: size }, { children: [(0, jsx_runtime_1.jsx)(ButtonLabel, Object.assign({ hide: loading }, { children: children })), loading && (0, jsx_runtime_1.jsx)(ButtonSpinner, { size: '24' })] })));
};
exports.TextButton = TextButton;
//# sourceMappingURL=index.js.map