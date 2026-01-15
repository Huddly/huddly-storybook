"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Checkbox_1 = require("../Checkbox");
const Wrapper = styled_components_1.default.li `
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(0, pxToRem_1.default)(12)} var(--spacing-16);
  outline: 0;
  column-gap: var(--spacing-8);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: var(--input-font-size);

  &:not(:last-child) {
    border-bottom: ${(0, pxToRem_1.default)(1)} solid var(--color-grey91);
  }

  figure,
  img,
  svg {
    width: 100%;
    max-width: var(--spacing-32);
    max-height: var(--spacing-32);
    object-fit: contain;
    flex-shrink: 0;
  }

  & > *:first-child:is(figure, img, svg) {
    margin-left: ${(0, pxToRem_1.default)(-4)};
  }
`;
const StyledCheckbox = (0, styled_components_1.default)(Checkbox_1.Checkbox) `
  margin-right: var(--spacing-4);
`;
/**
 * Option component
 */
exports.Option = react_1.default.forwardRef((props, ref) => {
    const { children, value, selected, hasCheckbox, onChange, isFocusable } = props;
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ "aria-selected": selected, onClick: () => onChange === null || onChange === void 0 ? void 0 : onChange(value), ref: ref, role: 'option', tabIndex: isFocusable ? 0 : -1 }, { children: [hasCheckbox && ((0, jsx_runtime_1.jsx)(StyledCheckbox, { checked: selected, onChange: () => onChange === null || onChange === void 0 ? void 0 : onChange(value), tabIndex: -1, value: value })), children] })));
});
//# sourceMappingURL=Option.js.map