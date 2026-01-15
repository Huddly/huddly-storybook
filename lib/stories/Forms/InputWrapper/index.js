"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_flatten_children_1 = __importDefault(require("react-flatten-children"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const index_1 = require("../../../index");
const Wrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: ${({ disableWidthConstraint }) => (disableWidthConstraint ? 'none' : (0, pxToRem_1.default)(400))};
  margin-bottom: var(--spacing-32);

  label:first-child {
    margin-left: ${({ indentLabel }) => (indentLabel ? 'var(--spacing-16)' : '0')};
  }
`;
const CheckboxFieldset = (0, styled_components_1.default)((props) => (0, jsx_runtime_1.jsx)(index_1.Fieldset, Object.assign({}, props))) `
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-8);
  margin-bottom: 0;
`;
const AlertTextContianer = styled_components_1.default.div `
  position: relative;
  & > * {
    position: absolute;
    margin-top: var(--spacing-4);
  }
`;
const childrenContainsToggleableInputs = (children, minCount = 1) => {
    const TOGGLEABLE_INPUTS = [index_1.Checkbox, index_1.Radio, index_1.Toggle];
    if (Array.isArray(children)) {
        const count = children.filter((child) => TOGGLEABLE_INPUTS.includes(child === null || child === void 0 ? void 0 : child.type)).length;
        return count >= minCount;
    }
    return false;
};
/**
 * InputWrapper component
 */
exports.InputWrapper = react_1.default.forwardRef((props, ref) => {
    const { className, disableWidthConstraint, id, isRequired, loading, name = id, severity = 'neutral', severityMessage, } = props;
    // Flatten children and remove React Fragments.
    const children = (0, react_flatten_children_1.default)(props.children);
    // If there are no toggleable inputs, indent the label to align with the input.
    const indentLabel = childrenContainsToggleableInputs(children) === false;
    // If there are more than 2 toggleable inputs, wrap them in a fieldset.
    const isFieldset = childrenContainsToggleableInputs(children, 2);
    // Set aria id's. These are used for inputs and the helper texts.
    const ariaDescribedById = severityMessage && severity !== 'error' ? `${id}-hint` : undefined;
    const ariaErrorMessageId = severityMessage && severity === 'error' ? `${id}-error` : undefined;
    // These are props or attributes passed down to semantically link the children together.
    const forwardedInputProps = {
        ariaDescribedBy: ariaDescribedById,
        ariaErrorMessage: ariaErrorMessageId,
        hasError: severity === 'error' ? true : undefined,
        id,
        isRequired,
        loading,
        name,
    };
    const childrenWithForwardedProps = react_1.default.Children.map(children, (child) => {
        if (!react_1.default.isValidElement(child))
            return null;
        if (typeof (child === null || child === void 0 ? void 0 : child.type) === 'string')
            return child;
        if (isFieldset)
            forwardedInputProps.id = (0, react_1.useId)();
        return react_1.default.cloneElement(child, forwardedInputProps);
    }).filter((child) => child !== null);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className, ref: ref, disableWidthConstraint: disableWidthConstraint, indentLabel: indentLabel }, { children: [isFieldset ? ((0, jsx_runtime_1.jsx)(CheckboxFieldset, Object.assign({}, forwardedInputProps, { children: childrenWithForwardedProps }))) : (childrenWithForwardedProps), severity && severityMessage && ((0, jsx_runtime_1.jsx)(AlertTextContianer, { children: (0, jsx_runtime_1.jsx)(index_1.AlertText, Object.assign({ id: ariaDescribedById || ariaErrorMessageId, severity: severity }, { children: severityMessage })) }))] })));
});
//# sourceMappingURL=index.js.map