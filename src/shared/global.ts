import { createGlobalStyle } from 'styled-components';
import {
  YellowTonesHtml,
  BlueTonesHtml,
  PinkTonesHtml,
  BrightGrayTonesHtml,
  BrownTonesHtml,
  GreenTonesHtml,
  TaupeTonesHtml,
  OrangeTonesHtml,
  SignalScaleTonesHtml,
  DarkGrayTonesHtml,
  WhiteHtml,
} from './colors';
import { normalizeStyles } from './normalizeStyles';

export const GlobalStyles = createGlobalStyle`
  /* Normalize */
  ${normalizeStyles}

  :root {
    /* Alert colors */
    --color-warningRed: #B1060F;
    --color-successGreen: #34C759;

    ${BlueTonesHtml}
    ${YellowTonesHtml}
    ${BrownTonesHtml}
    ${TaupeTonesHtml}
    ${PinkTonesHtml}
    ${OrangeTonesHtml}
    ${GreenTonesHtml}
    ${DarkGrayTonesHtml}
    ${BrightGrayTonesHtml}
    ${SignalScaleTonesHtml}
    ${WhiteHtml}

    /* Font sizes */
    --font-size-12: 12px;
    --font-size-14: 14px;
    --font-size-16: 16px;
    --font-size-18: 18px;
    --font-size-20: 20px;
    --font-size-22: 22px;
    --font-size-28: 28px;
    --font-size-48: 48px;
    --font-size-68: 68px;
    --font-size-98: 98px;

    /* Spacing */
    --spacing-4: 4px;
    --spacing-8: 8px;
    --spacing-16: 16px;
    --spacing-24: 24px;
    --spacing-32: 32px;
    --spacing-40: 40px;
    --spacing-48: 48px;
    --spacing-56: 56px;
    --spacing-64: 64px;

    /* Borders */
    --border-primary: 2px solid var(--color-grey76);
    --border-error: 2px solid var(--color-hotOrange);
    --border-active: 2px solid var(--color-lavender);

    /* Border radius */
    --border-radius: 6px;

    /* Fonts */
    --font-family-primary: "Messina sans", Helvetica, Arial, sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: var(--font-family-primary);
  }

  /* Import fonts */
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff2") format('woff2'),
      url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff") format('woff'),
      url("/fonts/Messina-sans/MessinaSansWeb-Regular.eot") format('embedded-opentype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff2") format('woff2'),
      url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff") format('woff'),
      url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.eot") format('embedded-opentype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff2") format('woff2'),
      url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff") format('woff'),
      url("/fonts/Messina-sans/MessinaSansWeb-Bold.eot") format('embedded-opentype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff2") format('woff2'),
      url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff") format('woff'),
      url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.eot") format('embedded-opentype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
`;
