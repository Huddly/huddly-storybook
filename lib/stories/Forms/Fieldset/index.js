"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fieldset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_innertext_1 = __importDefault(require("react-innertext"));
const index_1 = require("../../../index");
const Wrapper = styled_components_1.default.fieldset `
  display: block;
  min-width: 0;
  margin: 0 0 var(--spacing-32) 0;
  padding: 0.01em 0 0 0;
  border: 0;

  legend {
    display: table;
    margin-bottom: var(--spacing-16);
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size-20);
  }
`;
/**
 * Extracts the inner text of the first Label component found in children
 * @param children
 */
const extractLegendFromChildren = (children) => {
    if (!Array.isArray(children))
        return null;
    const label = children.find((child) => child.type === index_1.Label);
    return label ? (0, react_innertext_1.default)(label) : null;
};
/**
 * Filters out the first Label component from children
 * @param children
 */
const filterOutLabelFromChildren = (children) => {
    if (!Array.isArray(children))
        return children;
    return children.filter((child) => child.type !== index_1.Label);
};
/**
 * Fieldset component
 */
const Fieldset = ({ ariaDescribedBy, ariaErrorMessage, children, className, hasError, legend, }) => {
    const extractedLegend = legend !== null && legend !== void 0 ? legend : extractLegendFromChildren(children);
    const filteredChildren = filterOutLabelFromChildren(children);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className, "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, "aria-labelledby": ariaDescribedBy }, { children: [extractedLegend && (0, jsx_runtime_1.jsx)("legend", { children: extractedLegend }), filteredChildren] })));
};
exports.Fieldset = Fieldset;
//# sourceMappingURL=index.js.map