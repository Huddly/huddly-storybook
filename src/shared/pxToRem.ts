/**
 * Convert px to rem
 */
export default function pxToRem(px: number | string, base = 16): string {
  if (typeof px === 'string') {
    px = parseFloat(px.replace('px', ''));

    if (isNaN(px)) {
      throw new Error('pxToRem: px is not a valid number or px value!');
    }
  }

  switch (px) {
    case 0:
      return '0';
    case 1:
      return '1px';
    default:
      return `${px / base}rem`;
  }
}
