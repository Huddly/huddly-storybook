"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const TableRow_1 = require("./TableRow");
const TableHeaderItem_1 = __importDefault(require("./TableHeaderItem"));
const Spinner_1 = require("../Spinner");
const Checkbox_1 = require("../../Forms/Checkbox");
const StyledTable = styled_components_1.default.table `
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  border-spacing: 0;
  font-size: var(--font-size-16);
  border-bottom: ${(0, pxToRem_1.default)(1)} solid var(--color-grey91);
  border-spacing: 0 ${(0, pxToRem_1.default)(2)};

  tr {
    height: ${(0, pxToRem_1.default)(46)};
  }
`;
const HeaderRow = styled_components_1.default.thead `
  th {
    border-bottom: ${(0, pxToRem_1.default)(1)} solid var(--color-grey91);
  }
`;
const CheckBoxCell = styled_components_1.default.th `
  width: ${(0, pxToRem_1.default)(40)};
  padding-right: var(--spacing-16);
`;
/**
 * Table component
 */
const Table = ({ className, columns, rows, fullWidth, ordering, setOrdering, onSaveNewRow, onSaveRow, removeRow, loading, withChecboxes, selectedRows, onClickCheckbox, }) => ((0, jsx_runtime_1.jsxs)(StyledTable, Object.assign({ fullWidth: fullWidth, className: className }, { children: [(0, jsx_runtime_1.jsx)(HeaderRow, { children: (0, jsx_runtime_1.jsxs)("tr", { children: [withChecboxes && selectedRows && ((0, jsx_runtime_1.jsx)(CheckBoxCell, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { id: 'all', checked: selectedRows.length === rows.length && rows.length > 0, onChange: onClickCheckbox }) })), columns.map((c, i) => ((0, jsx_runtime_1.jsx)(TableHeaderItem_1.default, Object.assign({ index: i }, c, { ordering: ordering, setOrdering: setOrdering }), `${c.columnKey}_header`))), (0, jsx_runtime_1.jsx)("th", {})] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [loading && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}) }) })), !loading &&
                    rows.map((r) => ((0, jsx_runtime_1.jsx)(TableRow_1.TableRow, { onClickCheckbox: onClickCheckbox, selectedRows: selectedRows, hasCheckbox: withChecboxes, columns: columns, row: r, onSave: r.isNewRow ? onSaveNewRow : onSaveRow, removeRow: removeRow }, `row_${r.id}`)))] })] })));
exports.Table = Table;
//# sourceMappingURL=index.js.map