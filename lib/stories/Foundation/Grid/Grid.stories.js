"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridWithGridItems = exports.Grid2x2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const GridItem_1 = require("../GridItem");
exports.default = { component: _1.Grid };
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
const boxStyle = {
    height: '100%',
    width: '100%',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
};
exports.GridWithGridItems = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GridItem_1.GridItem, Object.assign({ alignSelf: 'start', justifySelf: 'start' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: boxStyle }, { children: "Start aligned" })) })), (0, jsx_runtime_1.jsx)(GridItem_1.GridItem, Object.assign({ alignSelf: 'end', justifySelf: 'end' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: boxStyle }, { children: "End aligned" })) })), (0, jsx_runtime_1.jsx)(GridItem_1.GridItem, Object.assign({ alignSelf: 'center', justifySelf: 'center' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: boxStyle }, { children: "Center aligned" })) })), (0, jsx_runtime_1.jsx)(GridItem_1.GridItem, Object.assign({ alignSelf: 'stretch', justifySelf: 'stretch' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: boxStyle }, { children: "Stretched" })) })), (0, jsx_runtime_1.jsx)(GridItem_1.GridItem, Object.assign({ alignSelf: 'stretch', justifySelf: 'stretch', columnStart: 3, rowStart: 3 }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: boxStyle }, { children: "Placed in column 3 row 3" })) }))] })),
        rowGap: 16,
        columns: '150px 150px 150px 150px',
        rows: '150px 150px 150px 150px',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    },
};
//# sourceMappingURL=Grid.stories.js.map