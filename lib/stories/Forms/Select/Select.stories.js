"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOver = exports.CountriesFromApi = exports.HasSuccess = exports.HasError = exports.HasWarning = exports.HasHint = exports.InWrapper = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Select_1 = require("./Select");
const Option_1 = require("./Option");
const index_1 = require("../../../index");
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = {
    component: Select_1.Select,
};
exports.Primary = {
    args: {
        id: 'select',
        isRequired: true,
        placeholder: '',
    },
};
const Wrapper = styled_components_1.default.div `
  ${(p) => p.openOver && 'margin-top: 300px;'}
`;
const Template = ({ id, isRequired, placeholder, severity, severityMessage, openOver }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ openOver: openOver }, { children: (0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "Select a color" }), (0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({ placeholder: placeholder, openOver: openOver }, { children: [(0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'red' }, { children: "Red" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'green' }, { children: "Green" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'blue' }, { children: "Blue" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'yellow' }, { children: "Yellow" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'purple' }, { children: "Purple" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'orange' }, { children: "Orange" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'pink' }, { children: "Pink" })), (0, jsx_runtime_1.jsx)(Option_1.Option, Object.assign({ value: 'brown' }, { children: "Brown" }))] }))] })) })));
};
const CountriesFromApiTemplate = ({ id, isRequired, placeholder, severity, severityMessage }) => {
    const [countries, setCountries] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.log(error));
    }, []);
    return ((0, jsx_runtime_1.jsxs)(index_1.InputWrapper, Object.assign({ severity: severity, severityMessage: severityMessage, id: id, isRequired: isRequired }, { children: [(0, jsx_runtime_1.jsx)(index_1.Label, { children: "Countries" }), (0, jsx_runtime_1.jsx)(Select_1.Select, Object.assign({ placeholder: placeholder }, { children: countries.map(({ name, alpha2Code, flags }) => ((0, jsx_runtime_1.jsxs)(Option_1.Option, Object.assign({ value: alpha2Code }, { children: [(0, jsx_runtime_1.jsx)("img", { src: flags.png, alt: `Flag of ${name}`, loading: 'lazy' }), (0, jsx_runtime_1.jsx)("span", { children: name })] }), alpha2Code))) }))] })));
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
exports.CountriesFromApi = CountriesFromApiTemplate.bind({});
exports.CountriesFromApi.args = Object.assign(Object.assign({}, exports.Primary.args), { severity: 'info', severityMessage: 'Try filtering by country name.' });
exports.OpenOver = Template.bind({});
exports.OpenOver.args = Object.assign(Object.assign({}, exports.Primary.args), { openOver: true });
//# sourceMappingURL=Select.stories.js.map