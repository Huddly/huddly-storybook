"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonElement = styled_components_1.default.button `
    border: solid 2px ${(p) => `var(--color-${p.color})`};
    border-radius: 30px;
    padding: 0 var(--spacing-24);
    height: 38px;
    background: ${(p) => p.secondary ? 'var(--color-white)' : `var(--color-${p.color})`};
    color: ${(p) => p.secondary ? `var(--color-${p.color})` : 'var(--color-white)'};
    font-family: 'Messina sans bold';
`;
const roleToHtmlTag = {
    button: 'button',
    submit: 'input',
    anchor: 'a',
};
/**
 * Button component
 */
const Button = ({ children, disabled, label, onClick, role = 'button', color = 'black', secondary, href, }) => {
    const isSubmit = role === 'submit';
    return (react_1.default.createElement(ButtonElement, { as: roleToHtmlTag[role], disabled: disabled, onClick: onClick, type: isSubmit && 'submit', color: color, secondary: secondary, href: href }, label && isSubmit ? label : children));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map