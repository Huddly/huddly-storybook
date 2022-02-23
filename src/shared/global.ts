import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Standard colors */
    --color-black: #000000;
    --color-white: #ffffff;
    --color-lavender: #5B5FFF;
    /* Secondary colors */
    --color-sunYellow: #E6C669;
    --color-caramelBrown: #D3924E;
    --color-signalOrange: #EB6E3D;
    --color-eveningTaupe: #BA7F6B;
    --color-petitePink: #E39994;
    --color-springGreen: #B6B77E;
    /* Alert colors */
    --color-alertRed: #B1060F;

    /* Shades */
    --color-background-card: rgba(245, 245, 245, 1);
    --color-hairlines: rgba(0, 0, 0, 0.2);
    --color-mutedText: rgba(0, 0, 0, 0.6);
    --color-mutedTextLight: rgba(255, 255, 255, 0.6);
    --color-darkBg: rgba(255, 255, 255, 0.12);
    --color-lightGrey: rgba(0, 0, 0, 0.04);
    --color-borderGrey: rgba(0, 0, 0, 0.12);
    --color-alertRedBg: rgba(177, 6, 15, 0.06);

    /* Font sizes */
    --font-size-12: 12px;
    --font-size-14: 14px;
    --font-size-18: 18px;
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
    --border-primary: 1px solid #9E9E9E;
    --border-error: 2px solid var(--color-alertRed);

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
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff2") format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Messina sans";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff2") format('woff2');
    font-weight: 400;
    font-display: swap;
  }
`;
