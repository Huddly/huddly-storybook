"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
/**
 * Todo
 * Add focus outline
 * Add color variations
 */
const Wrapper = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
    height: 56px;
    margin-bottom: 1rem;
    padding: 0 15px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    cursor: text;
    transition: all 0.2s ease-in-out;

    label {
        cursor: inherit;
        transition: inherit;

        ${({ focused, expanded }) => (focused || expanded) &&
    `font-size: 12px;
            font-weight: bold;`}

        // required text
        i {
            font-style: normal;
            font-size: 12px;
            font-weight: normal;
            padding-left: 5px;
        }
    }

    input {
        all: unset;
        display: block;
        height: 0;
        transition: inherit;
        will-change: height;

        ${({ focused, expanded }) => (focused || expanded) && `height: 1.25em;`}
    }
`;
/**
 * Input component
 */
const Input = ({ type, label, isRequired }) => {
    const [focused, setFocused] = (0, react_1.useState)(false);
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const handleInput = () => {
        if (!inputRef.current)
            return;
        setExpanded(inputRef.current.value.length > 0);
    };
    return (react_1.default.createElement(Wrapper, { focused: focused, expanded: expanded, onClick: () => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } },
        label && (react_1.default.createElement("label", null,
            label,
            !isRequired && react_1.default.createElement("i", null, "(optional)"))),
        react_1.default.createElement("input", { type: type, required: isRequired, onFocus: onFocus, onBlur: onBlur, onChange: handleInput, ref: inputRef })));
};
exports.Input = Input;
//# sourceMappingURL=index.js.map