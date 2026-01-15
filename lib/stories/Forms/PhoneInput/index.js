"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const awesome_phonenumber_1 = require("awesome-phonenumber");
const Select_1 = require("../Select/Select");
const Option_1 = require("../Select/Option");
const Input_1 = require("../Input");
const Flex_1 = require("../../Foundation/Flex");
const StyledSelect = (0, styled_components_1.default)(Select_1.Select) `
  width: calc(var(--spacing-40) * 3);
`;
/**
 * Splits a phone number into an object.
 *
 * @param value A phone number in string value.
 * @returns Phone number split into an object consisting of a region code and a phone number.
 */
const getSplitValue = (value = '') => {
    const pn = (0, awesome_phonenumber_1.parsePhoneNumber)(value);
    const { number, regionCode } = pn.toJSON();
    return { regionCode, phoneNumber: number === null || number === void 0 ? void 0 : number.national };
};
const sanitizeAndFormatPhoneNumber = (value, regionCode) => {
    value = value.replace(/\D/g, ''); // remove all non-numeric characters
    value = (0, awesome_phonenumber_1.getAsYouType)(regionCode).reset(value); // format the phone number
    return value;
};
/**
 * PhoneInput component
 *
 * For context:
 * Country code is the international dialing code, e.g. +47 for Norway.
 * Region code is the ISO 3166-1 alpha-2 code, e.g. NO for Norway.
 */
exports.PhoneInput = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, className, hasError, id, isRequired, name, onChange, value } = props, additionalPhoneInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "className", "hasError", "id", "isRequired", "name", "onChange", "value"]);
    const inputName = name || id;
    const countryCodes = (0, react_1.useMemo)(() => {
        return (0, awesome_phonenumber_1.getSupportedCallingCodes)().filter((cc) => isNaN(Number((0, awesome_phonenumber_1.getRegionCodeForCountryCode)(Number(cc))))); // Filter to remove toll-free, premium numbers etc...
    }, []);
    const splitValue = (0, react_1.useMemo)(() => getSplitValue(value), [value]);
    const [regionCode, setRegionCode] = (0, react_1.useState)((splitValue === null || splitValue === void 0 ? void 0 : splitValue.regionCode) || '');
    const [phoneNumber, setPhoneNumber] = (0, react_1.useState)((splitValue === null || splitValue === void 0 ? void 0 : splitValue.phoneNumber) || '');
    const [placeholder, setPlaceholder] = (0, react_1.useState)('');
    const handleCountryCodeChange = (0, react_1.useCallback)((e) => {
        const countryCode = Number(e.target.value);
        const regionCode = (0, awesome_phonenumber_1.getRegionCodeForCountryCode)(countryCode);
        setRegionCode(regionCode);
        // We also want to trigger an update to the phone number input when the country code changes, so the formatting updates.
        const newPhoneNumber = sanitizeAndFormatPhoneNumber(phoneNumber, regionCode);
        setPhoneNumber(newPhoneNumber);
    }, [phoneNumber]);
    const handlePhoneNumberChange = (e) => {
        let value = e.target.value;
        if (value === undefined)
            return;
        let _regionCode = regionCode;
        const parsedValue = (0, awesome_phonenumber_1.parsePhoneNumber)(value, regionCode);
        if (parsedValue.isValid()) {
            value = parsedValue.getNumber('national');
            _regionCode = parsedValue.getRegionCode();
            setRegionCode(_regionCode);
        }
        const phoneNumber = sanitizeAndFormatPhoneNumber(value, _regionCode);
        setPhoneNumber(phoneNumber);
    };
    (0, react_1.useEffect)(function handlePlaceholder() {
        if (!regionCode ||
            isNaN(Number(phoneNumber)) ||
            (0, awesome_phonenumber_1.getCountryCodeForRegionCode)(regionCode) === 0) {
            return;
        }
        const example = (0, awesome_phonenumber_1.getExample)(regionCode).toJSON().number.national;
        setPlaceholder(example);
    }, [regionCode]);
    (0, react_1.useEffect)(function handleOnChange() {
        if (!onChange)
            return;
        const pn = (0, awesome_phonenumber_1.parsePhoneNumber)(phoneNumber, regionCode);
        const json = pn.toJSON();
        const value = pn.getNumber();
        onChange({
            target: Object.assign(Object.assign({}, json), { id, name: inputName, value }),
        });
    }, [regionCode, phoneNumber]);
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ className: className, columnGap: '8' }, { children: [(0, jsx_runtime_1.jsx)(StyledSelect, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, "aria-labelledby": ariaDescribedBy, hasError: hasError, id: `${id}-country-code`, name: `${inputName}-country-code`, onChange: handleCountryCodeChange, placeholder: '+00', required: isRequired, value: (0, awesome_phonenumber_1.getCountryCodeForRegionCode)(regionCode).toString() }, { children: countryCodes.map((countryCode) => ((0, jsx_runtime_1.jsxs)(Option_1.Option, Object.assign({ value: countryCode }, { children: ["+", countryCode] }), countryCode))) })), (0, jsx_runtime_1.jsx)(Input_1.Input, Object.assign({ "aria-labelledby": ariaDescribedBy, "aria-errormessage": ariaErrorMessage, "aria-invalid": hasError, hasError: hasError, id: id, name: inputName, onChange: handlePhoneNumberChange, placeholder: placeholder, ref: ref, required: isRequired, type: 'text', value: phoneNumber }, additionalPhoneInputProps))] })));
});
//# sourceMappingURL=index.js.map