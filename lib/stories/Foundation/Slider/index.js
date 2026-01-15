"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Wrapper = styled_components_1.default.div `
  position: relative;
  width: ${(p) => (p.vertical ? (0, pxToRem_1.default)(22) : (0, pxToRem_1.default)(p.length))};
  height: ${(p) => (p.vertical ? (0, pxToRem_1.default)(p.length) : (0, pxToRem_1.default)(22))};
`;
const StyledInput = styled_components_1.default.input `
  position: absolute;
  width: ${(p) => (0, pxToRem_1.default)(p.length)};
  height: ${(0, pxToRem_1.default)(22)};
  background: transparent;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: ${(0, pxToRem_1.default)(8)};
    border-radius: ${(0, pxToRem_1.default)(420)};
    background-color: var(--color-grey91);
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    box-sizing: border-box;
    width: ${(0, pxToRem_1.default)(22)};
    height: ${(0, pxToRem_1.default)(22)};
    margin-top: ${(0, pxToRem_1.default)(-7)};
    border-radius: 50%;
    background-color: var(--color-lavender);
    -webkit-appearance: none;
    border: ${(0, pxToRem_1.default)(3)} solid white;
  }

  /* Styling for vertical slider */
  ${(p) => p.vertical &&
    `transform: rotate(270deg) translate(${(0, pxToRem_1.default)(-p.length)});
    transform-origin: top left;`}
`;
/**
 * Slider component
 */
const Slider = ({ className, min, max, vertical = false, value, onChange, resolution = 1, length, }) => {
    const onChangeValue = (e) => {
        onChange(parseFloat(e.target.value));
    };
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ vertical: vertical, length: length }, { children: (0, jsx_runtime_1.jsx)(StyledInput, { length: length, className: className, vertical: vertical, type: 'range', min: min, max: max, value: value, step: resolution, onChange: onChangeValue }) })));
};
exports.Slider = Slider;
//# sourceMappingURL=index.js.map