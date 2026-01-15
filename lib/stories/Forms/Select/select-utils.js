"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedContentHTML = exports.filterChildrenByQuery = exports.handleSelectHoverBackground = exports.getSelectListHeight = exports.allChildrenAreOption = void 0;
const react_1 = __importDefault(require("react"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Option_1 = require("./Option");
const react_innertext_1 = __importDefault(require("react-innertext"));
const allChildrenAreOption = (children) => {
    return react_1.default.Children.toArray(children).every((child) => {
        if (!react_1.default.isValidElement(child))
            return false;
        return child.type === Option_1.Option;
    });
};
exports.allChildrenAreOption = allChildrenAreOption;
const getSelectListHeight = (showMaxItems, selectListRef) => {
    const selectList = selectListRef.current;
    const selectListChildren = selectList === null || selectList === void 0 ? void 0 : selectList.children;
    if (!selectListChildren)
        return 0;
    // get height of the first n children of the select list, and get its total height.
    const selectListHeight = Array.from(selectListChildren)
        .slice(0, showMaxItems)
        .reduce((acc, curr) => acc + curr.getBoundingClientRect().height, 0);
    const selectListBorderWidth = parseInt(getComputedStyle(selectList).borderTopWidth, 10) * 2;
    return selectListHeight + selectListBorderWidth;
};
exports.getSelectListHeight = getSelectListHeight;
const handleSelectHoverBackground = (selectListRef, selectListHoverBackgroundRef) => {
    var _a;
    const selectList = selectListRef.current;
    const selectListChildren = (_a = selectListRef.current) === null || _a === void 0 ? void 0 : _a.children;
    const bgEl = selectListHoverBackgroundRef.current;
    if (!selectListChildren || !bgEl)
        return;
    const parentRect = selectList.getBoundingClientRect();
    const parentRectBorder = parseInt(getComputedStyle(selectList).borderTopWidth, 10);
    const moveHoverBackground = (event) => {
        const option = event.target;
        // Check if option is a valid option
        if (!option.hasAttribute('role') || option.getAttribute('role') !== 'option')
            return;
        const rect = option.getBoundingClientRect();
        const separatorLineWidth = parseInt(getComputedStyle(option).borderBottomWidth, 10);
        // Apply styles to the hover background
        bgEl.style.opacity = '1';
        bgEl.style.height = (0, pxToRem_1.default)(rect.height + separatorLineWidth);
        bgEl.style.transform = `translate3d(0, ${(0, pxToRem_1.default)(rect.y - parentRect.y - parentRectBorder)}, 0)`;
    };
    const hideHoverBackground = () => {
        bgEl.style.opacity = '0';
    };
    Array.from(selectListChildren).forEach((child) => {
        child.addEventListener('focus', moveHoverBackground);
        child.addEventListener('mouseover', moveHoverBackground);
    });
    selectList.addEventListener('mouseleave', hideHoverBackground);
    return () => {
        Array.from(selectListChildren).forEach((child) => {
            child.removeEventListener('focus', moveHoverBackground);
            child.removeEventListener('mouseover', moveHoverBackground);
        });
        selectList.removeEventListener('mouseleave', hideHoverBackground);
    };
};
exports.handleSelectHoverBackground = handleSelectHoverBackground;
const filterChildrenByQuery = (children, query) => {
    return react_1.default.Children.toArray(children).filter((child) => {
        var _a, _b;
        const childText = (0, react_innertext_1.default)((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children);
        const childValue = (_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.value.toString();
        return childText.toLowerCase().includes(query.toLowerCase()) || childValue.includes(query);
    });
};
exports.filterChildrenByQuery = filterChildrenByQuery;
const getSelectedContentHTML = (children, selected) => {
    if (!selected)
        return null;
    // Filter the children to only include the selected options
    const selectedItems = react_1.default.Children.toArray(children).filter((child) => {
        if (!react_1.default.isValidElement(child))
            return false;
        return selected.includes(child.props.value.toString());
    });
    if (!selectedItems.length)
        return null;
    // Map the selected items to their children
    const selectedChildren = selectedItems.map((item) => {
        if (!react_1.default.isValidElement(item))
            return null;
        return item.props.children;
    });
    // Create a separator to be used between selected children
    const separator = react_1.default.createElement('span', { style: { marginLeft: (0, pxToRem_1.default)(-8) } }, ', ');
    // Wrap each selected child in a span, and add a comma separator between each item
    return selectedChildren.reduce((acc, curr, i) => {
        if (typeof curr === 'string') {
            curr = react_1.default.createElement('span', { key: i }, curr);
        }
        return i === 0 ? [curr] : [...acc, separator, curr];
    }, []);
};
exports.getSelectedContentHTML = getSelectedContentHTML;
//# sourceMappingURL=select-utils.js.map