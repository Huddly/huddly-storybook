"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  display: grid;
  grid-template-columns: ${(p) => p.columns};
  grid-template-rows: ${(p) => p.rows};
  row-gap: ${(p) => `var(--spacing-${p.rowGap})`};
  column-gap: ${(p) => `var(--spacing-${p.columnGap})`};
  justify-items: ${(p) => p.justifyItems};
  align-items: ${(p) => p.alignItems};
`;
/**
 * Grid component
 */
const Grid = ({ rows = 'none', columns = 'none', rowGap = '0', columnGap = '0', justifyItems = 'normal', alignItems = 'normal', children, className, }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ className: className, rows: rows, columns: columns, justifyItems: justifyItems, alignItems: alignItems, rowGap: rowGap, columnGap: columnGap }, { children: children })));
};
exports.Grid = Grid;
//# sourceMappingURL=index.js.map