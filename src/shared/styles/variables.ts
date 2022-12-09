import { css } from 'styled-components';
import rem from '../pxToRem';
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
} from '../colors';

export const variables = css`
  :root {
    /* Alert colors */
    --color-warningRed: #b1060f;
    --color-successGreen: #34c759;

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
    --border-error: ${rem(2)} solid var(--color-intenseOrange);
    --border-active: ${rem(2)} solid var(--color-lavender);

    /* Border radius */
    --border-radius: ${rem(3)};

    /* Drop shadow */
    --drop-shadow-significant: 0px 3px 12px -3px rgba(0, 0, 0, 0.2);
  }
`;
