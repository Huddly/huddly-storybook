"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleExample = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const index_1 = require("../../../index");
exports.default = { component: _1.Badge };
/**
 * This is the default story.
 * It renders the Badge, and that's about it.
 */
exports.Primary = {
    args: {
        children: 'Badge',
    },
};
/**
 * This is an example of a badge used with a title.
 */
const TitleExampleTemplate = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)(index_1.Flex, Object.assign({ align: 'center', columnGap: '8' }, { children: [(0, jsx_runtime_1.jsx)(index_1.Text, Object.assign({ type: 'h2', size: '28' }, { children: "Huddly L1" })), (0, jsx_runtime_1.jsx)(_1.Badge, { children: children })] })));
};
exports.TitleExample = TitleExampleTemplate.bind({});
exports.TitleExample.args = {
    children: 'New',
};
//# sourceMappingURL=Badge.stories.js.map