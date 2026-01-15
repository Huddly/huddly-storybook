"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertical = exports.Horizontal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("./index");
const Button_1 = require("../Button");
exports.default = { component: index_1.ButtonGroup };
exports.Horizontal = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ secondary: true, color: 'black' }, { children: "Cancel" })), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ color: 'black' }, { children: "Save" }))] })),
        align: 'right',
        vertical: false,
    },
    argTypes: {
        align: {
            options: ['left', 'center', 'right'],
            description: 'Horizontal alignment of the buttons',
            control: { type: 'select' },
        },
    },
};
exports.Vertical = Object.assign(Object.assign({}, exports.Horizontal), { args: Object.assign(Object.assign({}, exports.Horizontal.args), { align: 'center', vertical: true }) });
//# sourceMappingURL=ButtonGroup.stories.js.map