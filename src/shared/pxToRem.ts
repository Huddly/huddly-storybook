/**
 * Convert px to rem
 */
export default function pxToRem(px: number | string, base = 16): string {
  if (typeof px === 'string') {
    px = parseFloat(px.replace('px', ''));
    if (isNaN(px)) {
      throw new Error('pxToRem: px is not a number');
    }
  }

  return `${px / base}rem`;
}
