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
exports.Input = exports.StyledInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  display: ${(p) => (p.isHidden ? 'none' : 'block')};
  flex: 1;
`;
exports.StyledInput = styled_components_1.default.input `
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: var(--input-height);
  padding-inline: var(--spacing-16);
  border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
  border-radius: var(--input-radius);
  font-size: var(--input-font-size);
  background: var(--color-grey96);

  :hover {
    border-color: var(--color-grey76);
  }

  :focus {
    outline: none;
    border-color: var(--color-lavender);
  }
`;
/**
 * Input component
 */
exports.Input = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, className, hasError, id, isRequired, name, type = 'text', value } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "className", "hasError", "id", "isRequired", "name", "type", "value"]);
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ "aria-hidden": type === 'hidden', className: className, isHidden: type === 'hidden' }, { children: (0, jsx_runtime_1.jsx)(exports.StyledInput, Object.assign({ "aria-labelledby": ariaDescribedBy, "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, id: id, name: name || id, ref: ref, required: isRequired, type: type, value: value, hasError: hasError }, additionalInputProps)) })));
});
//# sourceMappingURL=index.js.map