"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionColumn = exports.DirectionRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
exports.default = { component: _1.Flex };
const placeholderStyles = {
    display: 'grid',
    width: '100px',
    height: '100px',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
    placeItems: 'center',
};
exports.DirectionRow = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "1" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "2" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "3" }))] })),
        columnGap: '16',
        direction: 'row',
    },
};
exports.DirectionColumn = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "1" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "2" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "3" }))] })),
        rowGap: '16',
        direction: 'column',
    },
};
//# sourceMappingURL=Flex.stories.js.map