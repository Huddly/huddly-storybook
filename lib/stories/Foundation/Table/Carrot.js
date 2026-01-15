"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const havre18px_1 = require("src/frokost/havre18px");
const colors_1 = require("../../../shared/colors");
const Wrapper = styled_components_1.default.button `
  padding-left: var(--spacing-8);
  background: none;
  border: none;
`;
const Carrot = ({ onClick, currentSorting, direction }) => ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ onClick: onClick, currentSorting: currentSorting }, { children: [(direction === 'DESC' || !currentSorting) && ((0, jsx_runtime_1.jsx)(havre18px_1.ArrowDown, { color: currentSorting ? colors_1.DarkGrayTonesEnum.grey35 : colors_1.BrightGrayTonesEnum.grey62 })), direction === 'ASC' && currentSorting && ((0, jsx_runtime_1.jsx)(havre18px_1.ArrowUp, { color: currentSorting ? colors_1.DarkGrayTonesEnum.grey35 : colors_1.BrightGrayTonesEnum.grey62 }))] })));
exports.Carrot = Carrot;
//# sourceMappingURL=Carrot.js.map