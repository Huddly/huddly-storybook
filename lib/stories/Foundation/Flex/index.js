"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: ${(p) => p.direction};
  flex-wrap: ${(p) => p.wrap};
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  row-gap: ${(p) => `var(--spacing-${p.rowGap})`};
  column-gap: ${(p) => `var(--spacing-${p.columnGap})`};
`;
/**
 * Flex component
 */
const Flex = ({ direction = 'row', wrap = 'nowrap', justify = 'flex-start', align = 'center', rowGap, columnGap, children, className, }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ direction: direction, wrap: wrap, justify: justify, align: align, rowGap: rowGap, columnGap: columnGap, className: className }, { children: children })));
};
exports.Flex = Flex;
//# sourceMappingURL=index.js.map