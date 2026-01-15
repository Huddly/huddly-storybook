"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid2x2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
exports.default = { component: _1.GridItem };
const placeholderStyles = {
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
};
exports.Grid2x2 = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "1" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "2" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "3" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: placeholderStyles }, { children: "4" }))] })),
        columnGap: 16,
        rowGap: 16,
        columns: '200px 200px',
        rows: '200px 200px',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    },
};
//# sourceMappingURL=GridItem.stories.js.map