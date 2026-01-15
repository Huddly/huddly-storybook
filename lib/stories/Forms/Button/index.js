"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Spinner_1 = require("../../Foundation/Spinner");
const colors_1 = require("../../../shared/colors");
const ButtonStateColors = {
    lavender: {
        default: colors_1.BlueTonesEnum.lavender,
        hover: colors_1.BlueTonesEnum.salviaBlue,
        active: colors_1.BlueTonesEnum.royalBlue,
    },
    black: {
        default: 'black',
        hover: colors_1.DarkGrayTonesEnum.grey25,
        active: colors_1.DarkGrayTonesEnum.grey15,
    },
    intenseOrange: {
        default: colors_1.SignalScaleTonesEnum.intenseOrange,
        hover: colors_1.SignalScaleTonesEnum.hotOrange,
        active: colors_1.SignalScaleTonesEnum.redWine,
    },
};
const ButtonElement = styled_components_1.default.button `
  --button-color: ${(p) => `var(--color-${p.color})`};
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${(p) => (0, pxToRem_1.default)(p.height)};
  padding: 0 var(--spacing-24);
  border: solid ${(0, pxToRem_1.default)(2)} var(--button-color);
  border-radius: ${(0, pxToRem_1.default)(30)};
  color: ${(p) => (p.secondary ? 'var(--button-color)' : 'var(--color-white)')};
  font-family: var(--font-family);
  background: ${(p) => (p.secondary ? 'transparent' : 'var(--button-color)')};
  font-size: ${(p) => (p.height === '32' ? `${(0, pxToRem_1.default)(16)}` : `${(0, pxToRem_1.default)(18)}`)};
  padding: ${(p) => (p.height === '32' ? `${(0, pxToRem_1.default)(5)} ${(0, pxToRem_1.default)(12)}` : `${(0, pxToRem_1.default)(12)} ${(0, pxToRem_1.default)(20)}`)};
  cursor: pointer;

  :hover {
    background: ${(p) => (p.secondary ? 'transparent' : ButtonStateColors[p.color].hover)};
    border: ${(p) => `solid ${(0, pxToRem_1.default)(2)} ${ButtonStateColors[p.color].hover}`};
  }

  :active {
    background: ${(p) => (p.secondary ? 'transparent' : ButtonStateColors[p.color].active)};
    border: ${(p) => `solid ${(0, pxToRem_1.default)(2)} ${ButtonStateColors[p.color].active}`};
  }

  :disabled {
    background: var(--color-grey76);
    border-color: var(--color-grey76);
    color: var(--color-grey45);
    cursor: not-allowed;
  }

  :focus-visible {
    outline: ${(0, pxToRem_1.default)(2)} solid var(--color-lavender);
    outline-offset: ${(0, pxToRem_1.default)(2)};
  }
`;
const ButtonLabel = styled_components_1.default.span `
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;
const ButtonSpinner = (0, styled_components_1.default)(Spinner_1.Spinner) `
  position: absolute;
`;
/**
 * Button component
 */
const Button = ({ children, className, color = 'black', disabled, loading, onClick, secondary, type = 'button', size = '32', }) => {
    return ((0, jsx_runtime_1.jsxs)(ButtonElement, Object.assign({ "aria-busy": loading, className: className, color: color, disabled: disabled || loading, onClick: onClick, secondary: secondary, type: type, height: size }, { children: [(0, jsx_runtime_1.jsx)(ButtonLabel, Object.assign({ hide: loading }, { children: children })), loading && (0, jsx_runtime_1.jsx)(ButtonSpinner, { color: secondary ? 'black' : 'white', size: '24' })] })));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map