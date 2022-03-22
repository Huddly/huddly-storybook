import styled from 'styled-components';
import { Table } from '.';
import { Input } from '../../Forms/Input';
import { Select } from '../../Forms/Select';
import { Text } from '../Text';

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
    align: 'left',
    editFormatter: (value: string) => <Input value={value} />,
    isSortable: true,
  },
  {
    columnKey: 'office',
    header: 'Current office',
    align: 'left',
    valueFormatter: (value: string) => <Text color='lavender'>{value}</Text>,
    editFormatter: (value: string) => <Input value={value} />,
  },
  {
    columnKey: 'fruits',
    header: 'Fruits',
    align: 'left',
    valueFormatter: (value: string[]) => (
      <UL>
        {value.map((v, i) => (
          <LI key={v}>
            {v}
            {i !== value.length - 1 && ', '}
          </LI>
        ))}
      </UL>
    ),
  },
  {
    columnKey: 'timezone',
    header: 'Timezone',
    align: 'right',
    editFormatter: (value: string) => (
      <Select value={value}>
        <option>UTC +1</option>
        <option>UTC +2</option>
        <option>UTC +3</option>
      </Select>
    ),
    isSortable: true,
  },
];

const rows = [
  {
    name: 'Bob',
    office: 'Vacation',
    fruits: ['Apple', 'Orange', 'Banana'],
    timezone: 'UTC +1',
  },
  {
    name: 'Karen',
    office: 'In office',
    fruits: ['Banana'],
    timezone: 'UTC +1',
  },
  {
    name: 'Lars',
    office: 'At home',
    fruits: ['Orange'],
    timezone: 'UTC +1',
  },
];

export const Primary = {
  args: {
    columns,
    rows,
    fullWidth: true,
  },
};
