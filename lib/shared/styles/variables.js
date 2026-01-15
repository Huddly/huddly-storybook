"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
const styled_components_1 = require("styled-components");
const pxToRem_1 = __importDefault(require("../pxToRem"));
const colors_1 = require("../colors");
exports.variables = (0, styled_components_1.css) `
  :root {
    /* Alert colors */
    --color-warningRed: #b1060f;
    --color-successGreen: #34c759;

    ${colors_1.BlueTonesHtml}
    ${colors_1.YellowTonesHtml}
    ${colors_1.BrownTonesHtml}
    ${colors_1.TaupeTonesHtml}
    ${colors_1.PinkTonesHtml}
    ${colors_1.OrangeTonesHtml}
    ${colors_1.GreenTonesHtml}
    ${colors_1.DarkGrayTonesHtml}
    ${colors_1.BrightGrayTonesHtml}
    ${colors_1.SignalScaleTonesHtml}
    ${colors_1.WhiteHtml}

    /* Font sizes */
    --font-size-12: ${(0, pxToRem_1.default)(12)};
    --font-size-14: ${(0, pxToRem_1.default)(14)};
    --font-size-16: ${(0, pxToRem_1.default)(16)};
    --font-size-18: ${(0, pxToRem_1.default)(18)};
    --font-size-20: ${(0, pxToRem_1.default)(20)};
    --font-size-22: ${(0, pxToRem_1.default)(22)};
    --font-size-28: ${(0, pxToRem_1.default)(28)};
    --font-size-48: ${(0, pxToRem_1.default)(48)};
    --font-size-68: ${(0, pxToRem_1.default)(68)};
    --font-size-98: ${(0, pxToRem_1.default)(98)};

    /* Spacing */
    --spacing-4: ${(0, pxToRem_1.default)(4)};
    --spacing-8: ${(0, pxToRem_1.default)(8)};
    --spacing-16: ${(0, pxToRem_1.default)(16)};
    --spacing-24: ${(0, pxToRem_1.default)(24)};
    --spacing-32: ${(0, pxToRem_1.default)(32)};
    --spacing-40: ${(0, pxToRem_1.default)(40)};
    --spacing-48: ${(0, pxToRem_1.default)(48)};
    --spacing-56: ${(0, pxToRem_1.default)(56)};
    --spacing-64: ${(0, pxToRem_1.default)(64)};

    /* Borders */
    --border-primary: ${(0, pxToRem_1.default)(2)} solid var(--color-grey86);
    --border-error: ${(0, pxToRem_1.default)(2)} solid var(--color-intenseOrange);
    --border-active: ${(0, pxToRem_1.default)(2)} solid var(--color-lavender);

    /* Border radius */
    --border-radius: ${(0, pxToRem_1.default)(3)};

    /* Drop shadow */
    --drop-shadow-significant: 0px 3px 12px -3px rgba(0, 0, 0, 0.2);

    /* Input sizing */
    --input-toggle-size: var(--spacing-24);
    --input-height: var(--spacing-48);
    --input-radius: var(--border-radius);
    --input-font-size: var(--font-size-16);
  }
`;
//# sourceMappingURL=variables.js.map