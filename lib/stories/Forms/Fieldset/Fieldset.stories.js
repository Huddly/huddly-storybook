"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const index_1 = require("../../../index");
exports.default = {
    component: _1.Fieldset,
};
exports.Primary = {
    args: {
        legend: 'Personal Information',
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(index_1.Flex, Object.assign({ columnGap: '16' }, { children: [(0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ id: 'fname', isRequired: true, severityMessage: 'Test', severity: 'error' }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "First name" }), (0, jsx_runtime_1.jsx)(index_1.Input, {})] })), (0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ id: 'lname', isRequired: true }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "Last name" }), (0, jsx_runtime_1.jsx)(index_1.Input, {})] }))] })), (0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ id: 'email', isRequired: true }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "Email" }), (0, jsx_runtime_1.jsx)(index_1.Input, { type: 'email' })] }))] })),
    },
};
//# sourceMappingURL=Fieldset.stories.js.map