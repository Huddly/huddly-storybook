"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert px to rem
 */
function pxToRem(px, base = 16) {
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
exports.default = pxToRem;
//# sourceMappingURL=pxToRem.js.map