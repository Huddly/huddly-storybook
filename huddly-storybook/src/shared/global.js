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

    /* Shades */
    --color-background-card: rgba(245, 245, 245, 1);
    --color-hairlines: rgba(0, 0, 0, 0.2);
    --color-mutedText: rgba(0, 0, 0, 0.6);
    --color-mutedTextLight: rgba(255, 255, 255, 0.6);
    --color-darkBg: rgba(255, 255, 255, 0.12);
    --color-lightGrey: rgba(0, 0, 0, 0.04);
    --color-borderGrey: rgba(0, 0, 0, 0.12);

    /* Font sizes */
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
  }

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: "Messina sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  @font-face {
    font-family: "Messina sans bold";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff2") format('woff2');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Messina sans regular";
    src: url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff2") format('woff2');
    font-style: regular;
    font-weight: 400;
    font-display: swap;
  }
`;
