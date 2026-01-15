"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Grid_1 = require("../Grid");
const Text_1 = require("../Text");
const _1 = require(".");
const havre_1 = require("src/frokost/havre");
exports.default = { component: _1.IconButton };
const Wrapper = (0, styled_components_1.default)(Grid_1.Grid) `
  padding: var(--spacing-8);
`;
const OverviewTemplate = (props) => {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ columnGap: '32', rowGap: '32', columns: '50px 50px 100px', justifyItems: 'center' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '18', bold: true }, { children: "Button" })), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '18', bold: true }, { children: "Loading" })), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '18', bold: true }, { children: "Hover color" })), (0, jsx_runtime_1.jsx)(_1.IconButton, Object.assign({}, props)), (0, jsx_runtime_1.jsx)(_1.IconButton, Object.assign({}, props, { loading: true })), (0, jsx_runtime_1.jsx)(_1.IconButton, Object.assign({}, props, { hoverColor: 'plumbagoBlue' }))] })));
};
exports.Overview = OverviewTemplate.bind({});
exports.Overview.args = {
    icon: havre_1.Edit,
    tooltipText: 'Edit',
};
//# sourceMappingURL=IconButton.stories.js.map