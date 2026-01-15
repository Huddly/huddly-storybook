"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasSuccess = exports.HasError = exports.HasWarning = exports.HasHint = exports.InWrapper = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const index_1 = require("../../../index");
exports.default = {
    component: _1.PhoneInput,
};
exports.Primary = {
    args: {
        id: 'phone',
        geoLocate: true,
        isRequired: true,
        value: '',
    },
};
const Template = ({ severity, severityMessage, id, isRequired, value }) => {
    return ((0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "Label" }), (0, jsx_runtime_1.jsx)(_1.PhoneInput, { value: value })] })));
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
//# sourceMappingURL=PhoneInput.stories.js.map