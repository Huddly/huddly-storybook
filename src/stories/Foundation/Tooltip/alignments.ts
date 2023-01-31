export type AlignX = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

/**
 * Tooltip specific styles and calculations
 */
const getTooltipCSS = (vertical: 'top' | 'bottom', horizontal: 'left' | 'right') => {
  return `
    ${vertical}: calc(100% + var(--gap));
    ${horizontal}: 0;
  `;
};

const getTooltipCenteredCSS = (vertical: 'top' | 'bottom') => {
  return `
    ${vertical}: calc(100% + var(--gap));
    left: 50%;
    transform: translateX(-50%);
  `;
};

export const alignMap: Record<AlignY, Record<AlignX, string>> = {
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
const getArrowCSS = (vertical: string, horizontal: string, rotation: number) => {
  return `
    ${vertical}: 100%;
    ${horizontal}: 0.75rem; // Add some space between the arrow and the tooltip
    transform: rotate(${rotation}deg);
  `;
};

const getArrowCenteredCSS = (vertical: string, rotation: number) => {
  return `
    ${vertical}: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(${rotation}deg);
  `;
};

export const arrowAlignMap: Record<AlignY, Record<AlignX, string>> = {
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
