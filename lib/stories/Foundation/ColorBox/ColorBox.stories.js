"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const _1 = require(".");
const Text_1 = require("../Text");
const colors_1 = require("../../../shared/colors");
const Flex_1 = require("../Flex");
exports.default = {
    component: _1.ColorBox,
};
const StyledColor = (0, styled_components_1.default)(_1.ColorBox) `
  height: 150px;
  width: 150px;
  display: Flex;
  justify-content: center;
  align-items: center;
`;
const OverviewTemplate = () => {
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ columnGap: '4' }, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Blue Tones" })), Object.keys(colors_1.BlueTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Yellow Tones" })), Object.keys(colors_1.YellowTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Brown Tones" })), Object.keys(colors_1.BrownTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Taupe Tones" })), Object.keys(colors_1.TaupeTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Pink Tones" })), Object.keys(colors_1.PinkTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Orange Tones" })), Object.keys(colors_1.OrangeTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Green Tones" })), Object.keys(colors_1.GreenTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Dark Gray Tones" })), Object.keys(colors_1.DarkGrayTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Bright Gray Tones" })), Object.keys(colors_1.BrightGrayTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] })), (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ direction: 'column' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ size: '16' }, { children: "Signal Scale Tones" })), Object.keys(colors_1.SignalScaleTonesEnum).map((key) => ((0, jsx_runtime_1.jsx)(StyledColor, Object.assign({ color: key }, { children: key }), key)))] }))] })));
};
exports.Overview = OverviewTemplate.bind({});
exports.Overview.args = {};
//# sourceMappingURL=ColorBox.stories.js.map