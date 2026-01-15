"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  grid-column-start: ${(p) => p.columnStart};
  grid-column-end: ${(p) => p.columnEnd};
  grid-row-start: ${(p) => p.rowStart};
  grid-row-end: ${(p) => p.rowEnd};
  justify-self: ${(p) => p.justifySelf};
  align-self: ${(p) => p.alignSelf};
`;
/**
 * GridItem component
 */
const GridItem = ({ columnStart = 'auto', columnEnd = 'auto', rowStart = 'auto', rowEnd = 'auto', justifySelf = 'stretch', alignSelf = 'stretch', children, className, }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ columnStart: columnStart, columnEnd: columnEnd, rowStart: rowStart, rowEnd: rowEnd, justifySelf: justifySelf, alignSelf: alignSelf, className: className }, { children: children })));
};
exports.GridItem = GridItem;
//# sourceMappingURL=index.js.map