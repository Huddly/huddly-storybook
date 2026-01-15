"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const havre18px_1 = require("src/frokost/havre18px");
const colors_1 = require("../../../shared/colors");
const index_1 = require("../../../index");
const Wrapper = styled_components_1.default.div `
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: var(--spacing-8);
  font-size: var(--font-size-12);

  i {
    display: inline-flex;
  }
`;
const SEVERITY_STYLING = {
    success: { color: 'mossGreen', icon: (0, jsx_runtime_1.jsx)(havre18px_1.InfoSmall, { color: colors_1.GreenTonesEnum.mossGreen }) },
    info: { color: 'grey15', icon: (0, jsx_runtime_1.jsx)(havre18px_1.InfoSmall, {}) },
    warning: { color: 'autumnYellow', icon: (0, jsx_runtime_1.jsx)(havre18px_1.WarningFilled, { color: colors_1.YellowTonesEnum.autumnYellow }) },
    error: {
        color: 'intenseOrange',
        icon: (0, jsx_runtime_1.jsx)(havre18px_1.WarningFilled, { color: colors_1.SignalScaleTonesEnum.intenseOrange }),
    },
};
/**
 * AlertText component
 */
const AlertText = ({ children, className, hideIcon, id, severity = 'info', }) => {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className, id: id, role: 'alert' }, { children: [!hideIcon && (0, jsx_runtime_1.jsx)("i", Object.assign({ "aria-hidden": 'true' }, { children: SEVERITY_STYLING[severity].icon })), (0, jsx_runtime_1.jsx)(index_1.Text, Object.assign({ type: 'span', color: SEVERITY_STYLING[severity].color }, { children: children }))] })));
};
exports.AlertText = AlertText;
//# sourceMappingURL=index.js.map