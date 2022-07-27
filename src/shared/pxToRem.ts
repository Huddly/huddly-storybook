/**
 * Convert px to rem
 */
export default function pxToRem(px: number, base = 16): string {
  return `${px / base}rem`;
}
