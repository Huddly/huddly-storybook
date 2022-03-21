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
    header: 'Room Name',
    align: 'left',
    editFormatter: (value: string) => <Input value={value} />,
    isSortable: true,
  },
  {
    columnKey: 'type',
    header: 'Room type',
    align: 'left',
    valueFormatter: (value: string) => <Text color='lavender'>{value}</Text>,
    editFormatter: (value: string) => <Input value={value} />,
  },
  {
    columnKey: 'devices',
    header: 'Devices',
    align: 'left',
    valueFormatter: (value: string[]) => (
      <UL>
        {value.map((v, i) => (
          <LI>
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
        <option>Meeting room</option>
        <option>Standup room</option>
        <option>Work room</option>
      </Select>
    ),
    isSortable: true,
  },
];

const rows = [
  {
    name: 'Saturn',
    type: 'Meeting room',
    devices: ['L1', 'IQ', 'Canvas'],
    timezone: 'UTC +1',
  },
  {
    name: 'Neptune',
    type: 'Standup room',
    devices: ['L1'],
    timezone: 'UTC +1',
  },
  {
    name: 'Mars',
    type: 'Meeting room',
    devices: ['L1'],
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
