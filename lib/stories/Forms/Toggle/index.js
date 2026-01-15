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
exports.Toggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Wrapper = styled_components_1.default.div `
  height: var(--spacing-24);
  width: ${(0, pxToRem_1.default)(44)};
  position: relative;
  ${(p) => p.hasError &&
    `outline: var(--border-error);
     outline-style: auto;
     outline-offset: ${(0, pxToRem_1.default)(2)};
  `};
`;
const StyledInput = styled_components_1.default.input `
  // the toggle button uses a checkbox for UU reasons
  // this is then restyled to look like a toggle button
  width: 100%;
  height: 100%;
  border-radius: ${(0, pxToRem_1.default)(20)};
  background: var(--color-grey55);
  appearance: none;
  outline: none;
  cursor: pointer;

  // the before element is adding the circle to the toggle button
  ::before {
    height: ${(0, pxToRem_1.default)(20)};
    width: ${(0, pxToRem_1.default)(20)};
    position: absolute;
    top: ${(0, pxToRem_1.default)(2)};
    left: ${(0, pxToRem_1.default)(2)};
    border-radius: 50%;
    background: white;
    transition: 0.2s ease-out;
    content: '';
  }

  :checked {
    background: var(--color-lavender);
  }

  :checked::before {
    left: ${(0, pxToRem_1.default)(22)};
  }

  :checked:hover {
    background: var(--color-salviaBlue);
  }

  :hover {
    background: var(--color-grey45);
  }

  :checked:disabled {
    background: var(--color-plumbagoBlue);
  }

  :disabled {
    background: var(--color-grey76);
  }

  :focus-visible {
    outline-style: auto;
    outline-color: var(--color-salviaBlue);
    outline-offset: ${(0, pxToRem_1.default)(3)};
  }
`;
/**
 * Toggle component
 */
exports.Toggle = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, checked, className, hasError, id, isRequired, name, value } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "checked", "className", "hasError", "id", "isRequired", "name", "value"]);
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ className: className, hasError: hasError }, { children: (0, jsx_runtime_1.jsx)(StyledInput, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, "aria-labelledby": ariaDescribedBy, checked: checked, id: id, name: name, ref: ref, required: isRequired, type: 'checkbox', value: value }, additionalInputProps)) })));
});
//# sourceMappingURL=index.js.map