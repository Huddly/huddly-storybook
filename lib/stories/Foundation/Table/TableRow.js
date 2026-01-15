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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Button_1 = require("../../Forms/Button");
const IconButton_1 = require("../IconButton");
const havre_1 = require("src/frokost/havre");
const Checkbox_1 = require("../../Forms/Checkbox");
const CheckboxCell = styled_components_1.default.td ``;
const TableCell = styled_components_1.default.td `
  text-align: ${(p) => p.align};
  text-align: ${(p) => `-webkit-${p.align}`};
  padding-left: ${(p) => (p.isFirst ? 'var(--spacing-16)' : 0)};
  padding-right: ${(p) => (p.isLast ? 'var(--spacing-16)' : 0)};
`;
const TR = styled_components_1.default.tr `
  &:hover ${TableCell} {
    ${(p) => !p.selected && 'background-color: var(--color-grey96)'}
  }

  ${TableCell} {
    ${(p) => p.selected && 'background: var(--color-whisperBlue)'}
  }
`;
const TableRow = ({ columns, row, onSave, removeRow, hasCheckbox, selectedRows, onClickCheckbox, }) => {
    const [isEditing, setIsEditing] = (0, react_1.useState)(row.isNewRow);
    const [rowValue, setRowValue] = (0, react_1.useState)(row);
    (0, react_1.useEffect)(() => {
        setRowValue(row);
    }, [row]);
    const toggleEditing = () => {
        if (isEditing) {
            onSave(rowValue);
        }
        setIsEditing(!isEditing);
    };
    const onCancel = () => {
        // if this is a new row the row should be removed from the table when cancel
        if (row.isNewRow) {
            removeRow(row.id);
        }
        // set the row value back to the initial value to cancel editing
        setRowValue(row);
        setIsEditing(false);
    };
    return ((0, jsx_runtime_1.jsxs)(TR, Object.assign({ selected: selectedRows && selectedRows.includes(row.id) }, { children: [hasCheckbox && selectedRows && ((0, jsx_runtime_1.jsx)(CheckboxCell, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { id: row.id, onChange: onClickCheckbox, checked: selectedRows.includes(row.id) }) })), columns.map(({ align = 'left', columnKey, editFormatter, valueFormatter, isSortable }, i) => {
                var _a;
                let renderValue = valueFormatter ? valueFormatter(rowValue) : (_a = rowValue[columnKey]) !== null && _a !== void 0 ? _a : '';
                if (isEditing && editFormatter) {
                    renderValue = editFormatter(rowValue, setRowValue);
                }
                return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(TableCell, Object.assign({ align: align, isFirst: i === 0 }, { children: renderValue })), isSortable && align === 'right' && (0, jsx_runtime_1.jsx)(TableCell, { align: 'right' })] }, `column_${i}_row_${row.id}}`));
            }), (0, jsx_runtime_1.jsxs)(TableCell, Object.assign({ align: 'right', isLast: true }, { children: [isEditing && ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: onCancel, secondary: true }, { children: "Cancel" }))), row.isEditable && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isEditing && (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: toggleEditing }, { children: isEditing ? 'Save' : 'Edit' })), !isEditing && ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { color: 'grey55', onClick: toggleEditing, icon: havre_1.MenuMeatball, tooltipText: 'Edit' }))] }))] }))] })));
};
exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map