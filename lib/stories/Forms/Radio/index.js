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
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Checkbox_1 = require("../Checkbox");
// Inherited from Checkbox, element is a <label />
const FakeRadio = (0, styled_components_1.default)(Checkbox_1.FakeCheckbox) `
  // The fake custom radio
  &:before {
    border-radius: 50%;
  }
`;
// Inherited from Checkbox, element is a <input />
const RadioInput = (0, styled_components_1.default)(Checkbox_1.CheckboxInput) `
  // Checked radio style
  &:checked + ${FakeRadio}:before {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='white'/%3E%3C/svg%3E%0A");
  }
`;
/**
 * Radio component
 */
exports.Radio = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, checked, children, className, hasError, id, isRequired, loading, name, value } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "checked", "children", "className", "hasError", "id", "isRequired", "loading", "name", "value"]);
    return ((0, jsx_runtime_1.jsxs)(Checkbox_1.Wrapper, Object.assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)(RadioInput, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, "aria-labelledby": ariaDescribedBy, checked: checked, id: id, name: name, ref: ref, required: isRequired, type: 'radio', value: value }, additionalInputProps)), (0, jsx_runtime_1.jsxs)(FakeRadio, Object.assign({ htmlFor: id, hasError: hasError }, { children: [children && !loading && (0, jsx_runtime_1.jsx)(Checkbox_1.LabelText, { children: children }), loading && (0, jsx_runtime_1.jsx)(Checkbox_1.LabelLoading, { "aria-label": 'Loading radio label ...' })] }))] })));
});
//# sourceMappingURL=index.js.map