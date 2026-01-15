"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_responsive_1 = require("react-responsive");
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const devices_1 = __importDefault(require("../../../shared/devices"));
const havre18px_1 = require("src/frokost/havre18px");
const CircularStepper_1 = require("../CircularStepper");
const Wrapper = styled_components_1.default.div `
  position: relative;
  --step-line-timing: 300ms;
`;
const Steps = styled_components_1.default.ol `
  display: grid;
  position: relative;
  justify-content: end;
  margin: 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: var(--spacing-16);

  ${({ vertical }) => vertical &&
    `
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
    grid-gap: var(--spacing-48);
  `}
`;
const StepTitle = styled_components_1.default.span `
  max-width: 100%;
  overflow: hidden;
  color: var(--color-grey15);
  font-size: var(--font-size-16);
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 100ms ease-in-out;
`;
const StepBall = styled_components_1.default.span `
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: var(--spacing-32);
  height: var(--spacing-32);
  border-radius: var(--spacing-16);
  color: var(--color-royalBlue);
  font-weight: bold;
  font-size: var(--font-size-14);
  background-color: var(--color-plumbagoBlue);
  transition: color 100ms ease-in-out, background-color 100ms ease-in-out;
  padding-inline: var(--spacing-4);
`;
const Step = styled_components_1.default.li `
  display: flex;
  flex-direction: ${({ alignLeft }) => (alignLeft ? 'row-reverse' : 'column')};
  align-items: center;
  gap: ${(p) => (p.alignLeft ? 'var(--spacing-16)' : 'var(--spacing-8)')};

  ${(p) => p.alignLeft &&
    `
    justify-content: flex-end;
    `}

  ${(p) => p.highlight &&
    `
    ${StepBall} {
      color: var(--color-white);
      background-color: var(--color-lavender); 
      transition-delay: var(--step-line-timing); 
    }
    ${StepTitle} { 
      color: var(--color-black); 
      transition-delay: var(--step-line-timing); 
    }
  `}
`;
const StepsIndicatorLine = styled_components_1.default.span `
  position: absolute;
  top: ${(p) => (p.vertical ? '0' : 'auto')};
  right: ${(p) => (p.vertical ? 'auto' : `calc((100% / ${p.totalSteps}) / 2)`)};
  bottom: ${(p) => (p.vertical ? '0' : 'var(--spacing-16)')};
  left: ${(p) => (p.vertical ? 'var(--spacing-16)' : `calc((100% / ${p.totalSteps}) / 2)`)};
  width: ${(p) => (p.vertical ? (0, pxToRem_1.default)(6) : 'auto')};
  height: ${(p) => (p.vertical ? 'auto' : (0, pxToRem_1.default)(6))};
  overflow: hidden;
  background-color: var(--color-plumbagoBlue);
  transform: ${(p) => (p.vertical ? 'translate(-50%)' : 'translateY(50%)')};

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--spacing-4);
    content: '';
    background-color: var(--color-lavender);
    transition: transform var(--step-line-timing) ease-in-out;
    transform: ${(p) => p.vertical
    ? `scaleY(calc(${p.step - 1} / ${p.totalSteps - 1}))`
    : `scaleX(calc(${p.step - 1} / ${p.totalSteps - 1}))`};
    transform-origin: ${(p) => (p.vertical ? 'top' : 'left')};
    will-change: transform;
  }
`;
/**
 * Stepper component
 */
const Stepper = (props) => {
    const { activeStep, className, hasError, steps, vertical } = props;
    const isMobile = (0, react_responsive_1.useMediaQuery)({ maxWidth: devices_1.default.tablet });
    if (isMobile) {
        return (0, jsx_runtime_1.jsx)(CircularStepper_1.CircularStepper, Object.assign({}, props));
    }
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className, "aria-label": 'progress' }, { children: [(0, jsx_runtime_1.jsx)(StepsIndicatorLine, { step: activeStep, totalSteps: steps.length, vertical: vertical }), (0, jsx_runtime_1.jsx)(Steps, Object.assign({ vertical: vertical }, { children: steps.map((step, index) => {
                    const isCurrentStep = index + 1 === activeStep;
                    const isCompleted = index + 1 < activeStep;
                    const isInvalid = hasError && isCurrentStep;
                    return ((0, jsx_runtime_1.jsxs)(Step, Object.assign({ alignLeft: vertical, "aria-current": isCurrentStep || null, "aria-onInvalid": isInvalid, highlight: index < activeStep }, { children: [(0, jsx_runtime_1.jsx)(StepTitle, { children: step }), (0, jsx_runtime_1.jsx)(StepBall, Object.assign({ "aria-hidden": true }, { children: isCompleted ? (0, jsx_runtime_1.jsx)(havre18px_1.Check, { color: 'white' }) : index + 1 }))] }), index));
                }) }))] })));
};
exports.Stepper = Stepper;
//# sourceMappingURL=index.js.map