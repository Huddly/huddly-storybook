"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const index_1 = require("../../../index");
const ButtonElement = styled_components_1.default.button `
  cursor: ${(p) => (p.loading ? 'not-allowed' : 'pointer')};
  border: none;
  background: none;
  padding: 0;
  width: var(--spacing-24);
  height: var(--spacing-24);
  border-radius: ${(0, pxToRem_1.default)(1)};
  position: relative;

  &:hover {
    background: ${(p) => `var(--color-${p.hoverColor})`};
    box-shadow: 0 0 0 ${(0, pxToRem_1.default)(3)} ${(p) => `var(--color-${p.hoverColor})`};
    div {
      display: flex;
    }
  }

  path {
    fill: ${(p) => `var(--color-${p.color})`};
  }
`;
/**
 * Icon Button component
 */
const IconButton = ({ className, color = 'grey15', disabled, loading, onClick, type = 'button', icon: Icon, tooltipText, hoverColor = 'grey91', }) => {
    const Button = () => ((0, jsx_runtime_1.jsxs)(ButtonElement, Object.assign({ "aria-busy": loading, "aria-label": tooltipText, className: className, color: color, disabled: disabled || loading, onClick: onClick, type: type, loading: loading, hoverColor: hoverColor }, { children: [loading && (0, jsx_runtime_1.jsx)(index_1.Spinner, { size: '24' }), !loading && (0, jsx_runtime_1.jsx)(Icon, {})] })));
    if (!tooltipText) {
        return (0, jsx_runtime_1.jsx)(Button, {});
    }
    return ((0, jsx_runtime_1.jsx)(index_1.Tooltip, Object.assign({ text: tooltipText }, { children: (0, jsx_runtime_1.jsx)(Button, {}) })));
};
exports.IconButton = IconButton;
//# sourceMappingURL=index.js.map