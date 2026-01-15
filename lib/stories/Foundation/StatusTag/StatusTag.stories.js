"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Flex_1 = require("../Flex");
const _1 = require(".");
exports.default = { component: _1.StatusTag };
const OverviewTemplate = () => {
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column', rowGap: '24', align: 'flex-start' }, { children: [(0, jsx_runtime_1.jsx)(_1.StatusTag, Object.assign({ severity: 'warning' }, { children: "Warning status" })), (0, jsx_runtime_1.jsx)(_1.StatusTag, Object.assign({ severity: 'error' }, { children: "Error status" })), (0, jsx_runtime_1.jsx)(_1.StatusTag, Object.assign({ severity: 'success' }, { children: "Success status" })), (0, jsx_runtime_1.jsx)(_1.StatusTag, Object.assign({ severity: 'neutral' }, { children: "Neutral status" })), (0, jsx_runtime_1.jsx)(_1.StatusTag, Object.assign({ severity: 'info' }, { children: "Info status" }))] })));
};
exports.Overview = OverviewTemplate.bind({});
exports.Overview.args = {};
//# sourceMappingURL=StatusTag.stories.js.map