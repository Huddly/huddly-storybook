import { TableData } from '../../../shared/types';
import styled from 'styled-components';
import { Table } from '.';
import { Input } from '../../Forms/Input';
import { Select, Option } from '../../Forms/Select';
import { Text } from '../Text';
import React, { useState } from 'react';
import { Flex } from '../Flex';

const Wrapper = styled(Flex)`
  background: var(--color-grey98);
  padding: var(--spacing-48);
`;

const UL = styled.ul`
  padding: 0;
  margin: 0;
`;

const LI = styled.li`
  list-style-type: none;
  display: inline;
  margin: 0;
  padding: 0;
`;

export default { component: Table };

const columns = [
  {
    columnKey: 'name',
    header: 'Name',
    isCheckable: true,
    align: 'left',
    editFormatter: (row: TableData, onChange: (row: TableData) => void) => (
      <Input
        id='name'
        onChange={(e) => onChange({ ...row, name: e.target.value })}
        value={row.name ?? ''}
      />
    ),
    isSortable: true,
  },
  {
    columnKey: 'office',
    header: 'Current office',
    align: 'left',
    valueFormatter: (row: TableData) => <Text color='lavender'>{row['office'] ?? ''}</Text>,
    editFormatter: (row: TableData, onChange: (row: TableData) => void) => (
      <Input
        id='office'
        value={row.office ?? ''}
        onChange={(e) => onChange({ ...row, office: e.target.value })}
      />
    ),
  },
  {
    columnKey: 'fruits',
    header: 'Fruits',
    align: 'left',
    valueFormatter: (row: TableData) => {
      const value = row.fruits;
      if (!value || !Array.isArray(value)) {
        return <div />;
      }

      return (
        <UL>
          {value.map((v, i) => (
            <LI key={v}>
              {v}
              {i !== value.length - 1 && ', '}
            </LI>
          ))}
        </UL>
      );
    },
  },
  {
    columnKey: 'timeZone',
    header: 'Time Zone',
    align: 'right',
    editFormatter: (row: TableData, onChange: (row: TableData) => void) => {
      if (!row.timeZone) {
        return <div />;
      }
      return (
        <Select
          id='timeZone'
          value={row.timeZone}
          onChange={(e) => onChange({ ...row, timeZone: e.target.value })}
        >
          <Option value='utc1'>UTC +1</Option>
          <Option value='utc2'>UTC +2</Option>
          <Option value='utc3'>UTC +3</Option>
        </Select>
      );
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
  const [ordering, setOrdering] = useState({ field: 'name', direction: 'ASC' });
  const [rows, setRows] = useState(ROWS);
  const removeRow = (rowId: string) => {
    setRows(rows.filter((r) => r.id !== rowId));
  };
  const [selectedRows, setSelectedRows] = useState([]);
  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.id === 'all') {
      if (e.target.checked) {
        setSelectedRows(rows.map((r) => r.id));
        return;
      } else {
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

  const onClickRow = (rowId: string) => {
    console.log('you clicked row:', rowId);
  };

  return (
    <Wrapper direction='column' rowGap='64'>
      <Text bold size='22'>
        Table with checkboxes
      </Text>
      <Table
        {...props}
        rows={rows}
        setOrdering={setOrdering}
        ordering={ordering}
        columns={columns}
        removeRow={removeRow}
        withChecboxes
        selectedRows={selectedRows}
        onClickCheckbox={onClickCheckbox}
        onClickRow={onClickRow}
      />
      <Text bold size='22'>
        Simple table
      </Text>
      <Table
        {...props}
        rows={rows.map((r) => ({ ...r, isEditable: false, isNewRow: false }))}
        setOrdering={setOrdering}
        ordering={ordering}
        columns={columns}
        removeRow={removeRow}
      />
    </Wrapper>
  );
};

export const StandardTable = Template.bind({});
StandardTable.args = {
  fullWidth: true,
  onSave: (row: TableData) => console.log(row),
  onSaveNewRow: (row: TableData) => console.log(row),
  showNewRow: true,
};
