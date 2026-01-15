"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const _1 = require(".");
const Button_1 = require("../../Forms/Button");
exports.default = { component: _1.Tooltip };
const Wrapper = styled_components_1.default.div `
  display: flex;
  margin-top: var(--spacing-48);
  justify-content: center;
`;
const Template = ({ alignX, alignY }) => {
    const [veryCount, setVeryCount] = (0, react_1.useState)(1);
    const getTooltipText = () => {
        const veryStr = Array(veryCount).fill('very').join(' ');
        return `A ${veryStr} cool tooltip! ✨`;
    };
    const addVery = () => {
        setVeryCount(veryCount + 1);
    };
    const tooltipText = getTooltipText();
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(_1.Tooltip, Object.assign({ text: tooltipText, alignX: alignX, alignY: alignY }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: addVery }, { children: "dddd" })) })) }));
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    alignX: 'center',
    alignY: 'top',
};
//# sourceMappingURL=Tooltip.stories.js.map