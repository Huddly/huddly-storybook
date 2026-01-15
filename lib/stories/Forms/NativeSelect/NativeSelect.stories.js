"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasSuccess = exports.HasError = exports.HasWarning = exports.HasHint = exports.InWrapper = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const InputWrapper_1 = require("../InputWrapper");
const Label_1 = require("../Label");
exports.default = {
    component: _1.NativeSelect,
};
exports.Primary = {
    args: {
        id: 'example',
    },
};
const Template = ({ severity, severityMessage, id, isRequired }) => {
    return ((0, jsx_runtime_1.jsxs)(InputWrapper_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { children: "Label" }), (0, jsx_runtime_1.jsxs)(_1.NativeSelect, { children: [(0, jsx_runtime_1.jsx)("option", { children: "Click me" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna give you up" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna let you down" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna run around and desert you" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna make you cry" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna say goodbye" }), (0, jsx_runtime_1.jsx)("option", { children: "Never gonna tell a lie and hurt you" })] })] })));
};
exports.InWrapper = Template.bind({});
exports.InWrapper.args = Object.assign({}, exports.Primary.args);
exports.HasHint = Template.bind({});
exports.HasHint.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'info', severityMessage: 'This is a hint' });
exports.HasWarning = Template.bind({});
exports.HasWarning.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'warning', severityMessage: 'This is a warning message.' });
exports.HasError = Template.bind({});
exports.HasError.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'error', severityMessage: 'This is an error message.' });
exports.HasSuccess = Template.bind({});
exports.HasSuccess.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'success', severityMessage: 'This is a success message' });
//# sourceMappingURL=NativeSelect.stories.js.map