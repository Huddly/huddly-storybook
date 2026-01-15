"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertical = exports.Horizontal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const _1 = require(".");
const Wrapper = styled_components_1.default.div `
  width: 400px;
`;
const VerticalWrapper = styled_components_1.default.div `
  width: 400px;
`;
exports.default = { component: _1.Slider };
const Horizontal = () => {
    const [value, setValue] = (0, react_1.useState)(0);
    const onChange = (value) => {
        setValue(value);
    };
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(_1.Slider, { min: 0, max: 100, vertical: false, value: value, length: 250, onChange: onChange }) }));
};
exports.Horizontal = Horizontal;
const Vertical = () => {
    const [value, setValue] = (0, react_1.useState)(0);
    const onChange = (value) => {
        setValue(value);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(VerticalWrapper, { children: (0, jsx_runtime_1.jsx)(_1.Slider, { min: 0, max: 100, length: 250, vertical: true, value: value, onChange: onChange }) }) }));
};
exports.Vertical = Vertical;
//# sourceMappingURL=Slider.stories.js.map