import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { variables } from './variables';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${variables}

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

  ${fonts}
`;
