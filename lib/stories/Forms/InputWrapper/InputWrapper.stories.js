"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasSuccess = exports.HasError = exports.HasWarning = exports.HasHint = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
exports.default = { component: _1.InputWrapper };
const Template = ({ severity, severityMessage, children, id, isRequired, disableWidthConstraint, }) => {
    return ((0, jsx_runtime_1.jsx)(_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired, disableWidthConstraint: disableWidthConstraint }, { children: children })));
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    id: 'example',
    children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: "You can have whatever input inside this compontent." }), (0, jsx_runtime_1.jsx)("p", { children: "The compontent will pass props down to its children as needed to handle helper texts, error states etc..." })] })),
    disableWidthConstraint: false,
};
exports.HasHint = Template.bind({});
exports.HasHint.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'info', severityMessage: 'This is a hint' });
exports.HasWarning = Template.bind({});
exports.HasWarning.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'warning', severityMessage: 'This is a warning message.' });
exports.HasError = Template.bind({});
exports.HasError.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'error', severityMessage: 'This is an error message.' });
exports.HasSuccess = Template.bind({});
exports.HasSuccess.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'success', severityMessage: 'This is a success message' });
//# sourceMappingURL=InputWrapper.stories.js.map