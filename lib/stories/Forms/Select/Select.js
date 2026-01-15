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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_innertext_1 = __importDefault(require("react-innertext"));
const havre_1 = require("src/frokost/havre");
const Styled = __importStar(require("./styled"));
// Custom hooks
const hooks_1 = require("../../../shared/hooks");
// Utility functions
const select_utils_1 = require("./select-utils");
/**
 * Select component
 */
exports.Select = react_1.default.forwardRef((props, ref) => {
    const { ariaDescribedBy, ariaErrorMessage, children, className, hasError, id, isRequired, name, onBlur, onChange, placeholder, value, openOver } = props, additionalInputProps = __rest(props, ["ariaDescribedBy", "ariaErrorMessage", "children", "className", "hasError", "id", "isRequired", "name", "onBlur", "onChange", "placeholder", "value", "openOver"]);
    if (!(0, select_utils_1.allChildrenAreOption)(children)) {
        throw new Error('Select component: children can only contain Option components.');
    }
    const selectName = name || id;
    const selectWrapperRef = (0, react_1.useRef)(null);
    const selectButtonRef = (0, react_1.useRef)(null);
    const selectListRef = (0, react_1.useRef)(null);
    const selectListHoverBackgroundRef = (0, react_1.useRef)(null);
    const filterSearchRef = (0, react_1.useRef)(null);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [localValue, setLocalValue] = (0, react_1.useState)(value);
    const [selectListHeight, setSelectListHeight] = (0, react_1.useState)(0);
    const [filterSearch, setFilterSearch] = (0, react_1.useState)('');
    /**
     * Update localValue when value prop changes.
     */
    (0, react_1.useEffect)(() => {
        if (value === localValue)
            return;
        setLocalValue(value);
    }, [value]);
    /**
     * Close select when clicking outside of it.
     */
    (0, hooks_1.useOnClickOutside)(selectWrapperRef, () => setIsOpen(false));
    /**
     * Keyboard navigation handlers.
     */
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = selectWrapperRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', handleKeyboardEvent);
        return () => {
            var _a;
            (_a = selectWrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeyboardEvent);
        };
    }, [isOpen]);
    const handleKeyboardEvent = (event) => {
        const selectList = selectListRef.current;
        const selectListChildren = selectList === null || selectList === void 0 ? void 0 : selectList.children;
        const activeElement = document.activeElement;
        const activeOptionIndex = Array.from(selectListChildren).indexOf(activeElement);
        const keyActions = {
            Enter: handleEnterKey,
            Escape: handleEscapeKey,
            Space: handleSpaceKey,
            ArrowUp: handleArrowUpKey,
            ArrowDown: handleArrowDownKey,
        };
        if (keyActions[event.code]) {
            event.preventDefault();
            keyActions[event.code]({
                activeElement,
                activeOptionIndex,
                selectList,
                selectListChildren,
            });
        }
        else {
            if (!/^[a-zA-Z0-9]$/.test(event.key) || !isOpen)
                return;
            if (filterSearchRef.current) {
                filterSearchRef.current.focus();
            }
        }
    };
    const handleSpaceKey = ({ activeElement }) => {
        // If select button is focused and the dropdown is closed, open it
        if (activeElement === selectButtonRef.current && !isOpen) {
            setIsOpen(true);
        }
        // Since event.preventDefault() is called on the Space key, we need to add a space to the input manually.
        if (activeElement === filterSearchRef.current) {
            // Get the cursor position in the input
            const cursorPosition = filterSearchRef.current.selectionStart;
            // Add a space to the input at the cursor position
            filterSearchRef.current.value =
                filterSearchRef.current.value.slice(0, cursorPosition) +
                    ' ' +
                    filterSearchRef.current.value.slice(cursorPosition);
            // Move the cursor position to the position after the space
            filterSearchRef.current.selectionStart = cursorPosition + 1;
            filterSearchRef.current.selectionEnd = cursorPosition + 1;
        }
    };
    const handleEscapeKey = () => {
        var _a;
        setIsOpen(false);
        (_a = selectButtonRef === null || selectButtonRef === void 0 ? void 0 : selectButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleArrowUpKey = ({ activeOptionIndex, selectList, selectListChildren }) => {
        if (activeOptionIndex === 0 || activeOptionIndex === -1) {
            selectList.focus();
        }
        if (activeOptionIndex > 0) {
            selectListChildren[activeOptionIndex - 1].focus();
        }
    };
    const handleArrowDownKey = ({ activeOptionIndex, selectList, selectListChildren }) => {
        if (activeOptionIndex === selectListChildren.length - 1 || activeOptionIndex === -1) {
            selectList.focus();
        }
        if (activeOptionIndex < selectListChildren.length - 1) {
            selectListChildren[activeOptionIndex + 1].focus();
        }
    };
    const handleEnterKey = ({ activeOptionIndex, selectListChildren }) => {
        // If an option is active, select it.
        if (activeOptionIndex !== -1) {
            selectListChildren[activeOptionIndex].click();
        }
        // If no option is active, but there is only one option, select it.
        else if (selectListChildren.length === 1) {
            selectListChildren[0].click();
        }
    };
    const selectContent = (0, react_1.useMemo)(() => (0, select_utils_1.getSelectedContentHTML)(children, [localValue]), [children, localValue]);
    const selectContentAsString = (0, react_1.useMemo)(() => (0, react_innertext_1.default)(selectContent), [selectContent]);
    const filteredChildren = (0, react_1.useMemo)(() => (0, select_utils_1.filterChildrenByQuery)(children, filterSearch), [children, filterSearch]);
    /**
     * Handle dynamically positioned and sized items depending on the options.
     */
    (0, react_1.useEffect)(() => {
        setSelectListHeight((0, select_utils_1.getSelectListHeight)(5, selectListRef));
        (0, select_utils_1.handleSelectHoverBackground)(selectListRef, selectListHoverBackgroundRef);
    }, [selectListRef, selectListHoverBackgroundRef, filteredChildren]);
    const handleValueSelect = (newValue) => {
        var _a;
        setIsOpen(false); // Close select
        setFilterSearch(''); // Reset filter search
        (_a = selectButtonRef === null || selectButtonRef === void 0 ? void 0 : selectButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus(); // Focus back to select button
        // Only update value/localValue if it's different from newValue to avoid extra renders
        if (localValue === newValue)
            return;
        setLocalValue(newValue);
        onChange &&
            onChange({
                target: { name: selectName, id, value: newValue },
            });
    };
    const handleBlur = (e) => {
        if (e.currentTarget.contains(e.relatedTarget))
            return;
        onBlur &&
            onBlur({
                target: { name: selectName, id, value: localValue },
            });
    };
    return ((0, jsx_runtime_1.jsxs)(Styled.Wrapper, Object.assign({ className: className, ref: selectWrapperRef, onBlur: handleBlur }, { children: [(0, jsx_runtime_1.jsxs)(Styled.SelectButton, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-expanded": isOpen, "aria-haspopup": 'listbox', "aria-labelledby": ariaDescribedBy, "aria-owns": `${id}-select-list`, hasError: hasError, hasLabel: !!selectContent, id: id, isOpen: isOpen, onClick: () => setIsOpen(!isOpen), ref: selectButtonRef, title: selectContentAsString, type: 'button', value: localValue }, { children: [isOpen ? ((0, jsx_runtime_1.jsx)(Styled.FilterSearch, { "aria-autocomplete": 'list', "aria-controls": `${id}-select-list`, onChange: (e) => setFilterSearch(e.target.value), placeholder: 'Search options ...', ref: filterSearchRef, type: 'text', value: filterSearch })) : ((0, jsx_runtime_1.jsx)(Styled.SelectedContent, Object.assign({ hasNestedContent: typeof selectContent !== 'string' }, { children: selectContent || placeholder || '- Select option -' }))), (0, jsx_runtime_1.jsx)(Styled.RotatingChevron, Object.assign({ rotate: isOpen, "aria-hidden": 'true' }, { children: (0, jsx_runtime_1.jsx)(Styled.ChevronDown, {}) }))] })), children && ((0, jsx_runtime_1.jsxs)(Styled.SelectListWrapper, Object.assign({ "aria-errormessage": ariaErrorMessage, "aria-expanded": isOpen, "aria-labelledby": ariaDescribedBy, height: selectListHeight, id: `${id}-select-list`, isOpen: isOpen, role: 'listbox', tabIndex: isOpen ? 0 : -1, placeOver: openOver }, { children: [(0, jsx_runtime_1.jsx)(Styled.SelectListHoverBackground, { ref: selectListHoverBackgroundRef, "aria-hidden": true }), (0, jsx_runtime_1.jsxs)(Styled.SelectList, Object.assign({ ref: selectListRef, height: selectListHeight }, { children: [react_1.default.Children.map(filteredChildren, (child) => {
                                if (!react_1.default.isValidElement(child))
                                    return null;
                                return react_1.default.cloneElement(child, {
                                    hasCheckbox: false,
                                    selected: localValue === child.props.value,
                                    onChange: handleValueSelect,
                                    isFocusable: isOpen,
                                });
                            }), react_1.default.Children.count(filteredChildren) === 0 && ((0, jsx_runtime_1.jsxs)(Styled.SelectListNoResults, { children: [(0, jsx_runtime_1.jsx)(havre_1.Search, { className: 'search-icon' }), (0, jsx_runtime_1.jsx)("span", { children: "No results found" })] }))] }))] }))), (0, jsx_runtime_1.jsx)("input", Object.assign({ name: selectName, ref: ref, required: isRequired, type: 'hidden', value: localValue }, additionalInputProps))] })));
});
//# sourceMappingURL=Select.js.map