"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = exports.LabelLoading = exports.LabelText = exports.CheckboxInput = exports.FakeCheckbox = exports.Wrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
exports.Wrapper = styled_components_1.default.div `
  display: flex;
`;
exports.FakeCheckbox = styled_components_1.default.label `
  display: inline-flex;
  position: relative;
  align-items: flex-start;
  cursor: pointer;

  // The fake custom checkbox
  &:before {
    display: block;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--input-toggle-size);
    height: var(--input-toggle-size);
    border: ${({ hasError }) => hasError ? 'var(--border-error)' : `${(0, pxToRem_1.default)(2)} solid var(--color-grey55);`};
    border-radius: ${(0, pxToRem_1.default)(2)};
    content: '';
  }
`;
exports.CheckboxInput = styled_components_1.default.input `
  opacity: 0;
  position: absolute;
  left: ${(0, pxToRem_1.default)(-99999)}; // This is to hide the checkbox without affecting screen readers

  // Focus ring
  &:focus-visible + ${exports.FakeCheckbox}:before {
    box-shadow: 0px 0px 0px ${(0, pxToRem_1.default)(2)} white, 0px 0px 0px ${(0, pxToRem_1.default)(4)} var(--color-lavender);
  }

  // Checked checkbox style
  &:checked + ${exports.FakeCheckbox}:before {
    border-color: var(--color-lavender);
    background-color: var(--color-lavender);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 1.25L4.5 8L0.75 4.25' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
  }

  &:hover:checked + ${exports.FakeCheckbox}:before {
    border-color: var(--color-salviaBlue);
    background-color: var(--color-salviaBlue);
  }

  &:hover:not(:checked) + ${exports.FakeCheckbox}:before {
    border-color: var(--color-grey45);
    background-color: var(--color-grey91);
  }

  &:active:checked + ${exports.FakeCheckbox}:before {
    border-color: var(--color-royalBlue);
    background-color: var(--color-royalBlue);
  }

  &:active:not(:checked) + ${exports.FakeCheckbox}:before {
    border-color: var(--color-grey35);
    background-color: var(--color-grey86);
  }
`;
exports.LabelText = styled_components_1.default.span `
  --line-height: 1.5;
  margin-left: var(--spacing-8);
  color: var(--color-grey15);
  font-size: var(--input-font-size);
  line-height: var(--line-height);
  margin-top: calc((var(--input-toggle-size) - var(--input-font-size) * var(--line-height)) / 2);
`;
exports.LabelLoading = styled_components_1.default.span `
  --loading-label-width: ${() => Math.floor(Math.random() * 150 + 150)}px;
  align-self: center;
  width: var(--loading-label-width);
  height: var(--input-font-size);
  margin-left: var(--spacing-8);
  border-radius: var(--input-radius);
  background: linear-gradient(
    90deg,
    var(--color-grey91) 0px,
    var(--color-grey86) 50px,
    var(--color-grey91) 100px
  );
  animation: loading-label-animation 3s ease-in-out infinite;

  @keyframes loading-label-animation {
    from {
      background-position: calc(var(--loading-label-width) * -1) 0;
    }
    to {
      background-position: var(--loading-label-width) 0;
    }
  }
`;
/**
 * Checkbox component
 */
exports.Checkbox = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, checked, children, className, hasError, id, isRequired, loading, name, value } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "checked", "children", "className", "hasError", "id", "isRequired", "loading", "name", "value"]);
    return ((0, jsx_runtime_1.jsxs)(exports.Wrapper, Object.assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)(exports.CheckboxInput, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, "aria-labelledby": ariaDescribedBy, checked: checked, id: id, name: name, ref: ref, required: isRequired, type: 'checkbox', value: value }, additionalInputProps)), (0, jsx_runtime_1.jsxs)(exports.FakeCheckbox, Object.assign({ htmlFor: id, hasError: hasError }, { children: [children && !loading && (0, jsx_runtime_1.jsx)(exports.LabelText, { children: children }), loading && (0, jsx_runtime_1.jsx)(exports.LabelLoading, { "aria-label": 'Loading checkbox label ...' })] }))] })));
});
//# sourceMappingURL=index.js.map