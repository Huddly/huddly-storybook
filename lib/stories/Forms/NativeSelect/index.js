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
exports.NativeSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  select {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--input-height);
    padding-inline: var(--spacing-16);
    border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    border-radius: var(--input-radius);
    font-size: var(--input-font-size);
    font-family: var(--font-family-primary);
    cursor: pointer;
    // This is to get a custom arrow on the select element
    background: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.5 7L12 1' stroke='black'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right var(--spacing-16) center;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
/**
 * Select component
 */
exports.NativeSelect = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, children, className, hasError, id, isRequired, name, value } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "children", "className", "hasError", "id", "isRequired", "name", "value"]);
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ className: className, hasError: hasError }, { children: (0, jsx_runtime_1.jsx)("select", Object.assign({ "aria-labelledby": ariaDescribedBy, "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, id: id, name: name || id, ref: ref, required: isRequired, value: value }, additionalInputProps, { children: children })) })));
});
//# sourceMappingURL=index.js.map