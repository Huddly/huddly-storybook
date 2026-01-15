"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const styled_components_1 = require("styled-components");
const normalize_1 = require("./normalize");
const variables_1 = require("./variables");
const fonts_1 = require("./fonts");
exports.GlobalStyles = (0, styled_components_1.createGlobalStyle) `
  ${normalize_1.normalize}
  ${variables_1.variables}

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family-primary);
    color: var(--color-grey15);
  }

  a {
    color: var(--color-lavender);
  }

  ${fonts_1.fonts}
`;
//# sourceMappingURL=global.js.map