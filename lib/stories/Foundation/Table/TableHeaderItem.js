"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const Flex_1 = require("../Flex");
const Carrot_1 = require("./Carrot");
const TH = styled_components_1.default.th `
  text-align: ${(p) => p.align};
  font-size: var(--font-size-14);
  font-weight: bold;
  color: var(--color-grey35);
  width: ${(p) => { var _a; return (_a = p.width) !== null && _a !== void 0 ? _a : 'auto'; }};
  letter-spacing: var(--extra-letter-spacing);
  padding-left: ${(p) => (p.firstItem ? 'var(--spacing-16)' : 0)};
`;
const invertedDirection = {
    ASC: 'DESC',
    DESC: 'ASC',
};
const TableHeaderItem = ({ ordering, columnKey, header, align = 'left', width, isSortable, setOrdering, index, }) => {
    const onClick = () => {
        const isCurrentlySelected = ordering.field === columnKey;
        const direction = isCurrentlySelected ? invertedDirection[ordering.direction] : 'DESC';
        setOrdering({
            field: columnKey,
            direction: direction,
        });
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(TH, Object.assign({ align: align, width: width, firstItem: index === 0 }, { children: (0, jsx_runtime_1.jsxs)(Flex_1.Flex, Object.assign({ justify: align === 'right' ? 'flex-end' : 'flex-start' }, { children: [header.toUpperCase(), isSortable && align !== 'right' && ((0, jsx_runtime_1.jsx)(Carrot_1.Carrot, { onClick: onClick, currentSorting: ordering.field === columnKey, direction: ordering.direction }))] })) })), isSortable && align === 'right' && ((0, jsx_runtime_1.jsx)(TH, Object.assign({ align: 'right', width: (0, pxToRem_1.default)(30) }, { children: (0, jsx_runtime_1.jsx)(Carrot_1.Carrot, { onClick: onClick, currentSorting: ordering.field === columnKey, direction: ordering.direction }) })))] }, `header_column_${columnKey}`));
};
exports.default = TableHeaderItem;
//# sourceMappingURL=TableHeaderItem.js.map