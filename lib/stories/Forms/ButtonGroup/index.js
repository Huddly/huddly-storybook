"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonGroupElement = styled_components_1.default.div `
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  justify-content: ${({ align }) => align};
  align-items: ${({ align }) => align};
  gap: var(--spacing-16);
`;
/**
 * ButtonGroup component
 */
const ButtonGroup = (props) => {
    const { children, align, vertical } = props;
    const alignValue = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
    return ((0, jsx_runtime_1.jsx)(ButtonGroupElement, Object.assign({ role: 'group', align: alignValue, vertical: vertical }, { children: children })));
};
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=index.js.map