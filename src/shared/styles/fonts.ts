import { css } from 'styled-components';

export const fonts = css`
  :root {
    --font-family-primary: 'Messina sans', Helvetica, Arial, sans-serif;
    --extra-letter-spacing: 0.02em;
  }

  body {
    font-family: var(--font-family-primary);
  }

  @font-face {
    font-family: 'Messina sans';
    src: url('/fonts/Messina-sans/MessinaSansWeb-Regular.woff2') format('woff2'),
      url('/fonts/Messina-sans/MessinaSansWeb-Regular.woff') format('woff'),
      url('/fonts/Messina-sans/MessinaSansWeb-Regular.eot') format('embedded-opentype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Messina sans';
    src: url('/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff2') format('woff2'),
      url('/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff') format('woff'),
      url('/fonts/Messina-sans/MessinaSansWeb-RegularItalic.eot') format('embedded-opentype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Messina sans';
    src: url('/fonts/Messina-sans/MessinaSansWeb-Bold.woff2') format('woff2'),
      url('/fonts/Messina-sans/MessinaSansWeb-Bold.woff') format('woff'),
      url('/fonts/Messina-sans/MessinaSansWeb-Bold.eot') format('embedded-opentype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Messina sans';
    src: url('/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff2') format('woff2'),
      url('/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff') format('woff'),
      url('/fonts/Messina-sans/MessinaSansWeb-BoldItalic.eot') format('embedded-opentype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
`;
