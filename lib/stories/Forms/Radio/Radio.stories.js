"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleRadios = exports.HasSuccess = exports.HasError = exports.HasWarning = exports.HasHint = exports.InWrapper = exports.Checked = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const index_1 = require("../../../index");
exports.default = {
    component: _1.Radio,
};
exports.Primary = {
    args: {
        id: 'example',
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Confirm that you have read and accepted our ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: '#' }, { children: "Privacy Policy" })), " and", ' ', (0, jsx_runtime_1.jsx)("a", Object.assign({ href: '#' }, { children: "Terms of Service" })), "."] })),
        loading: false,
    },
};
exports.Checked = {
    args: Object.assign(Object.assign({}, exports.Primary.args), { value: true }),
};
const Template = ({ severity, severityMessage, children, id, isRequired, loading }) => {
    return ((0, jsx_runtime_1.jsx)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: (0, jsx_runtime_1.jsx)(_1.Radio, Object.assign({ loading: loading }, { children: children })) })));
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
const Multiple = ({ severity, severityMessage, id, isRequired, loading }) => {
    return ((0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired, loading: loading }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "This label automatically gets transformed into a Fieldset legend! \uD83E\uDD2F" }), (0, jsx_runtime_1.jsx)(_1.Radio, Object.assign({ value: 'one' }, { children: "One" })), (0, jsx_runtime_1.jsx)(_1.Radio, Object.assign({ value: 'two' }, { children: "Two" })), (0, jsx_runtime_1.jsx)(_1.Radio, Object.assign({ value: 'three' }, { children: "Three" }))] })));
};
exports.MultipleRadios = Multiple.bind({});
exports.MultipleRadios.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'info', severityMessage: 'Same old API for everything' });
//# sourceMappingURL=Radio.stories.js.map