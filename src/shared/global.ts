import { createGlobalStyle } from 'styled-components';
import { normalizeStyles } from './normalizeStyles';
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
import rem from './pxToRem';

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
    --font-size-12: ${rem(12)};
    --font-size-14: ${rem(14)};
    --font-size-16: ${rem(16)};
    --font-size-18: ${rem(18)};
    --font-size-20: ${rem(20)};
    --font-size-22: ${rem(22)};
    --font-size-28: ${rem(28)};
    --font-size-48: ${rem(48)};
    --font-size-68: ${rem(68)};
    --font-size-98: ${rem(98)};

    /* Spacing */
    --spacing-4: ${rem(4)};
    --spacing-8: ${rem(8)};
    --spacing-16: ${rem(16)};
    --spacing-24: ${rem(24)};
    --spacing-32: ${rem(32)};
    --spacing-40: ${rem(40)};
    --spacing-48: ${rem(48)};
    --spacing-56: ${rem(56)};
    --spacing-64: ${rem(64)};

    /* Borders */
    --border-primary: ${rem(2)} solid var(--color-grey86);
    --border-error: ${rem(2)} solid var(--color-hotOrange);
    --border-active: ${rem(2)} solid var(--color-lavender);

    /* Border radius */
    --border-radius: ${rem(6)};

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
