"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionColumn = exports.DirectionRow = void 0;
const _1 = require(".");
const react_1 = __importDefault(require("react"));
exports.default = { component: _1.Flex };
const placeholderStyles = {
    display: 'grid',
    width: '100px',
    height: '100px',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
    placeItems: 'center',
};
exports.DirectionRow = {
    args: {
        children: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: placeholderStyles }, "1"),
            react_1.default.createElement("div", { style: placeholderStyles }, "2"),
            react_1.default.createElement("div", { style: placeholderStyles }, "3"))),
        columnGap: 16,
        direction: 'row',
    },
};
exports.DirectionColumn = {
    args: {
        children: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: placeholderStyles }, "1"),
            react_1.default.createElement("div", { style: placeholderStyles }, "2"),
            react_1.default.createElement("div", { style: placeholderStyles }, "3"))),
        rowGap: 16,
        direction: 'column',
    },
};
//# sourceMappingURL=Flex.stories.js.map