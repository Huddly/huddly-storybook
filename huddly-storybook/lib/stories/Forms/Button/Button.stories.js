"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
const _1 = require(".");
exports.default = { component: _1.Button };
exports.Primary = {
    args: {
        type: 'button',
        children: 'Click me',
    },
};
exports.Secondary = {
    args: {
        type: 'button',
        children: 'Click me',
        secondary: true,
    },
};
//# sourceMappingURL=Button.stories.js.map