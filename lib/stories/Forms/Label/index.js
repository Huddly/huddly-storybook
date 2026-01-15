"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Text_1 = require("../../Foundation/Text");
const Wrapper = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: var(--spacing-16);
`;
const StyledLabel = styled_components_1.default.label `
  display: block;
  margin-bottom: var(--spacing-8);
  font-weight: bold;
  font-size: var(--font-size-14);
  line-height: 1;
`;
const OptionalIndicator = (0, styled_components_1.default)(Text_1.Text) `
  line-height: 1;
`;
const HelpLink = styled_components_1.default.a `
  margin-bottom: var(--spacing-8);
  color: var(--color-lavender);
  font-size: var(--font-size-12);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
/**
 * Label component
 */
const Label = ({ children, className, helpLabel, helpLink, htmlFor, id, isRequired, }) => {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className }, { children: [(0, jsx_runtime_1.jsxs)(StyledLabel, Object.assign({ htmlFor: htmlFor || id }, { children: [children, ' ', isRequired === false && ((0, jsx_runtime_1.jsx)(OptionalIndicator, Object.assign({ type: 'span', size: '12' }, { children: "(optional)" })))] })), helpLink && helpLabel && ((0, jsx_runtime_1.jsx)(HelpLink, Object.assign({ href: helpLink, target: '_blank', rel: 'noopener noreferrer' }, { children: helpLabel })))] })));
};
exports.Label = Label;
//# sourceMappingURL=index.js.map