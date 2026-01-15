"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorAlert = exports.WarningAlert = exports.InfoAlert = exports.SuccessAlert = void 0;
const _1 = require(".");
exports.default = { component: _1.AlertText };
exports.SuccessAlert = {
    args: {
        severity: 'success',
        children: 'This is a success message',
    },
};
exports.InfoAlert = {
    args: {
        severity: 'info',
        children: 'This is an info message',
    },
};
exports.WarningAlert = {
    args: {
        severity: 'warning',
        children: 'This is a warning message',
    },
};
exports.ErrorAlert = {
    args: {
        severity: 'error',
        children: 'This is an error message',
    },
};
//# sourceMappingURL=AlertText.stories.js.map