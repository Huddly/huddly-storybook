"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const _1 = require(".");
const Input_1 = require("../../Forms/Input");
const Select_1 = require("../../Forms/Select");
const Text_1 = require("../Text");
const react_1 = require("react");
const Flex_1 = require("../Flex");
const Wrapper = (0, styled_components_1.default)(Flex_1.Flex) `
  background: var(--color-grey98);
  padding: var(--spacing-48);
`;
const UL = styled_components_1.default.ul `
  padding: 0;
  margin: 0;
`;
const LI = styled_components_1.default.li `
  list-style-type: none;
  display: inline;
  margin: 0;
  padding: 0;
`;
exports.default = { component: _1.Table };
const columns = [
    {
        columnKey: 'name',
        header: 'Name',
        isCheckable: true,
        align: 'left',
        editFormatter: (row, onChange) => {
            var _a;
            return ((0, jsx_runtime_1.jsx)(Input_1.Input, { id: 'name', onChange: (e) => onChange(Object.assign(Object.assign({}, row), { name: e.target.value })), value: (_a = row.name) !== null && _a !== void 0 ? _a : '' }));
        },
        isSortable: true,
    },
    {
        columnKey: 'office',
        header: 'Current office',
        align: 'left',
        valueFormatter: (row) => { var _a; return (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ color: 'lavender' }, { children: (_a = row['office']) !== null && _a !== void 0 ? _a : '' })); },
        editFormatter: (row, onChange) => {
            var _a;
            return ((0, jsx_runtime_1.jsx)(Input_1.Input, { id: 'office', value: (_a = row.office) !== null && _a !== void 0 ? _a : '', onChange: (e) => onChange(Object.assign(Object.assign({}, row), { office: e.target.value })) }));
        },
    },
    {
        columnKey: 'fruits',
        header: 'Fruits',
        align: 'left',
        valueFormatter: (row) => {
            const value = row.fruits;
            if (!value || !Array.isArray(value)) {
                return (0, jsx_runtime_1.jsx)("div", {});
            }
            return ((0, jsx_runtime_1.jsx)(UL, { children: value.map((v, i) => ((0, jsx_runtime_1.jsxs)(LI, { children: [v, i !== value.length - 1 && ', '] }, v))) }));
        },
    },
    {
        columnKey: 'timeZone',
        header: 'Time Zone',
        align: 'right',
        editFormatter: (row, onChange) => {
            if (!row.timeZone) {
                return (0, jsx_runtime_1.jsx)("div", {});
            }
            return ((0, jsx_runtime_1.jsxs)(Select_1.Select, Object.assign({ id: 'timeZone', value: row.timeZone, onChange: (e) => onChange(Object.assign(Object.assign({}, row), { timeZone: e.target.value })) }, { children: [(0, jsx_runtime_1.jsx)(Select_1.Option, Object.assign({ value: 'utc1' }, { children: "UTC +1" })), (0, jsx_runtime_1.jsx)(Select_1.Option, Object.assign({ value: 'utc2' }, { children: "UTC +2" })), (0, jsx_runtime_1.jsx)(Select_1.Option, Object.assign({ value: 'utc3' }, { children: "UTC +3" }))] })));
        },
        isSortable: true,
    },
];
const ROWS = [
    {
        id: 'A123',
        name: '',
        office: '',
        fruits: [],
        timeZone: 'UTC +1',
        isNewRow: true,
        isEditable: true,
    },
    {
        id: 'B123',
        name: 'Bob',
        office: 'Vacation',
        fruits: ['Apple', 'Orange', 'Banana'],
        timeZone: 'UTC +1',
        isEditable: true,
    },
    {
        id: 'C123',
        name: 'Karen',
        office: 'In office',
        fruits: ['Banana'],
        timeZone: 'UTC +1',
        isEditable: true,
    },
    {
        id: 'D123',
        name: 'Lars',
        office: 'At home',
        fruits: ['Orange'],
        timeZone: 'UTC +1',
        isEditable: true,
    },
];
const Template = (props) => {
    const [ordering, setOrdering] = (0, react_1.useState)({ field: 'name', direction: 'ASC' });
    const [rows, setRows] = (0, react_1.useState)(ROWS);
    const removeRow = (rowId) => {
        setRows(rows.filter((r) => r.id !== rowId));
    };
    const [selectedRows, setSelectedRows] = (0, react_1.useState)([]);
    const onClickCheckbox = (e) => {
        if (e.target.id === 'all') {
            if (e.target.checked) {
                setSelectedRows(rows.map((r) => r.id));
                return;
            }
            else {
                setSelectedRows([]);
                return;
            }
        }
        if (!e.target.checked) {
            setSelectedRows(selectedRows.filter((r) => r !== e.target.id));
            return;
        }
        setSelectedRows([...selectedRows, e.target.id]);
    };
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ direction: 'column', rowGap: '64' }, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ bold: true, size: '22' }, { children: "Table with checkboxes" })), (0, jsx_runtime_1.jsx)(_1.Table, Object.assign({}, props, { rows: rows, setOrdering: setOrdering, ordering: ordering, columns: columns, removeRow: removeRow, withChecboxes: true, selectedRows: selectedRows, onClickCheckbox: onClickCheckbox })), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ bold: true, size: '22' }, { children: "Simple table" })), (0, jsx_runtime_1.jsx)(_1.Table, Object.assign({}, props, { rows: rows.map((r) => (Object.assign(Object.assign({}, r), { isEditable: false, isNewRow: false }))), setOrdering: setOrdering, ordering: ordering, columns: columns, removeRow: removeRow }))] })));
};
exports.StandardTable = Template.bind({});
exports.StandardTable.args = {
    fullWidth: true,
    onSave: (row) => console.log(row),
    onSaveNewRow: (row) => console.log(row),
    showNewRow: true,
};
//# sourceMappingURL=Table.stories.js.map