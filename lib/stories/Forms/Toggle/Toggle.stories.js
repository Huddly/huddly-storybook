"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InWrapperWithError = exports.InWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../../../index");
const _1 = require(".");
exports.default = { component: _1.Toggle };
const Template = ({ severity, severityMessage, id, isRequired }) => {
    return ((0, jsx_runtime_1.jsx)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: (0, jsx_runtime_1.jsx)(_1.Toggle, { hasError: true }) })));
};
exports.InWrapper = Template.bind({});
exports.InWrapper.args = {
    id: 'example',
    value: true,
};
exports.InWrapperWithError = Template.bind({});
exports.InWrapperWithError.args = {
    id: 'example',
    value: true,
    severityMessage: 'Warning',
    severity: 'error',
};
//# sourceMappingURL=Toggle.stories.js.map