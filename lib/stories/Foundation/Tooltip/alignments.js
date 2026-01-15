"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowAlignMap = exports.alignMap = void 0;
/**
 * Tooltip specific styles and calculations
 */
const getTooltipCSS = (vertical, horizontal) => {
    return `
    ${vertical}: calc(100% + var(--gap));
    ${horizontal}: 0;
  `;
};
const getTooltipCenteredCSS = (vertical) => {
    return `
    ${vertical}: calc(100% + var(--gap));
    left: 50%;
    transform: translateX(-50%);
  `;
};
exports.alignMap = {
    top: {
        left: getTooltipCSS('bottom', 'left'),
        center: getTooltipCenteredCSS('bottom'),
        right: getTooltipCSS('bottom', 'right'),
    },
    bottom: {
        left: getTooltipCSS('top', 'left'),
        center: getTooltipCenteredCSS('top'),
        right: getTooltipCSS('top', 'right'),
    },
    // Centered tooltip is a bit different than the others, so we need to handle it separately
    center: {
        left: `
      left: 0;
      top: 50%;
      transform: translate(calc(-100% - var(--gap)), -50%);
    `,
        center: null,
        right: `
      right: 0;
      top: 50%;
      transform: translate(calc(100% + var(--gap)), -50%);
    `,
    },
};
/**
 * Arrow specific styles and calculations
 */
const getArrowCSS = (vertical, horizontal, rotation) => {
    return `
    ${vertical}: 100%;
    ${horizontal}: 0.75rem; // Add some space between the arrow and the tooltip
    transform: rotate(${rotation}deg);
  `;
};
const getArrowCenteredCSS = (vertical, rotation) => {
    return `
    ${vertical}: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(${rotation}deg);
  `;
};
exports.arrowAlignMap = {
    top: {
        left: getArrowCSS('top', 'left', 0),
        center: getArrowCenteredCSS('top', 0),
        right: getArrowCSS('top', 'right', 0),
    },
    bottom: {
        left: getArrowCSS('bottom', 'left', 180),
        center: getArrowCenteredCSS('bottom', 180),
        right: getArrowCSS('bottom', 'right', 180),
    },
    // Centered tooltip is a bit different than the others, so we need to handle it separately
    center: {
        left: `
      top: 50%;
      right: 0;
      transform: translateY(-50%) rotate(-90deg);
    `,
        center: null,
        right: `
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(90deg);
    `,
    },
};
//# sourceMappingURL=alignments.js.map