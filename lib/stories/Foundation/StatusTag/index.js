"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTag = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const getColorForSeverity = {
    warning: { border: 'sunYellow', background: 'cheesecakeYellow', color: 'autumnYellow' },
    error: { border: 'petitePink', background: 'whisperCoral', color: 'redWine' },
    success: { border: 'springGreen', background: 'whisperGreen', color: 'oreganoGreen' },
    neutral: { border: 'grey76', background: 'grey91', color: 'grey35' },
    info: { border: 'plumbagoBlue', background: 'whisperBlue', color: 'royalBlue' },
};
const Wrapper = styled_components_1.default.span `
  border: ${(p) => `${(0, pxToRem_1.default)(2)} solid var(--color-${getColorForSeverity[p.severity].border})`};
  background: ${(p) => `var(--color-${getColorForSeverity[p.severity].background})`};
  color: ${(p) => `var(--color-${getColorForSeverity[p.severity].color})`};
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--border-radius);
  font-size: ${(0, pxToRem_1.default)(12)};
  letter-spacing: var(--extra-letter-spacing);
  font-weight: 700;
`;
/**
 * StatusTag component
 */
const StatusTag = ({ className, children, severity }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ severity: severity, className: className, role: 'status' }, { children: children.toUpperCase() })));
};
exports.StatusTag = StatusTag;
//# sourceMappingURL=index.js.map