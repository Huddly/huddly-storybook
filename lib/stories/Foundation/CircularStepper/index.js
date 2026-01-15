"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularStepper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Text_1 = require("../Text");
const Wrapper = styled_components_1.default.div `
  display: flex;
  position: relative;
  align-items: center;
  column-gap: var(--spacing-16);
`;
const ProgressWrapper = styled_components_1.default.svg `
  flex-shrink: 0;
  width: var(--progress-size);
  height: var(--progress-size);

  --progress-size: ${(0, pxToRem_1.default)(60)};
  --progress-border-width: ${(0, pxToRem_1.default)(6)};
  --progress-pi: ${Math.PI};
  --progress-dash-array: calc(
    2 * var(--progress-pi) * (var(--progress-size) / 2 - var(--progress-border-width) / 2)
  );
`;
const commonProgressStyles = (0, styled_components_1.css) `
  stroke-width: var(--progress-border-width);
  fill: transparent;
  cy: calc(var(--progress-size) / 2);
  cx: calc(var(--progress-size) / 2);
  r: calc((var(--progress-size) - var(--progress-border-width)) / 2);
`;
const ProgressTrack = styled_components_1.default.circle `
  ${commonProgressStyles}
  stroke: var(--color-plumbagoBlue);
`;
const ProgressIndicator = styled_components_1.default.circle `
  ${commonProgressStyles}
  transition: stroke-dashoffset 0.3s ease-in-out;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  will-change: stroke-dashoffset;
  stroke: var(--color-lavender);
  stroke-dasharray: var(--progress-dash-array);
  stroke-dashoffset: calc(var(--progress-dash-array) * (1 - ${(p) => p.step / p.totalSteps}));
`;
const ProgressCount = styled_components_1.default.text `
  font-size: var(--font-size-16);
  fill: var(--color-royalBlue);
`;
/**
 * CircularStepper component
 */
const CircularStepper = ({ activeStep, className, hasError, steps, }) => {
    const clampedActiveStep = Math.min(Math.max(activeStep, 1), steps.length);
    const activeStepLabel = steps[clampedActiveStep - 1];
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className }, { children: [(0, jsx_runtime_1.jsxs)(ProgressWrapper, Object.assign({ "aria-oninvalid": hasError, "aria-valuemax": steps === null || steps === void 0 ? void 0 : steps.length, "aria-valuemin": 1, "aria-valuenow": activeStep, role: hasError ? 'alert' : 'progressbar' }, { children: [(0, jsx_runtime_1.jsx)(ProgressTrack, {}), (0, jsx_runtime_1.jsx)(ProgressIndicator, { step: clampedActiveStep, totalSteps: steps.length }), (0, jsx_runtime_1.jsxs)(ProgressCount, Object.assign({ x: '50%', y: '50%', textAnchor: 'middle', dominantBaseline: 'middle' }, { children: [clampedActiveStep, "/", steps.length] }))] })), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ type: 'span', size: '22', bold: true, "aria-label": 'progress-label' }, { children: activeStepLabel }))] })));
};
exports.CircularStepper = CircularStepper;
//# sourceMappingURL=index.js.map