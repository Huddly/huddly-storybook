import { Table } from '.';
import { Button } from '../Forms/Button';
import { Text } from '../Foundation/Text';

export default { component: Table };

const columns = [
  {
    columnKey: 'name',
    header: 'Room Name',
    align: 'left',
  },
  {
    columnKey: 'type',
    header: 'Room type',
    align: 'left',
    valueFormatter: (value: string) => <Text color='lavender'>{value}</Text>,
  },
  {
    columnKey: 'devices',
    header: 'Devices',
    align: 'left',
    valueFormatter: (value: string[]) => (
      <ul>
        {value.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    ),
  },
  {
    columnKey: 'timezone',
    header: 'Timezone',
    align: 'left',
  },
  {
    columnKey: 'edit',
    header: 'Edit',
    align: 'center',
    valueFormatter: (value: string) => <Button>{value}</Button>,
  },
];

const rows = [
  {
    name: 'Saturn',
    type: 'Meeting room',
    devices: ['L1', 'IQ', 'Canvas'],
    timezone: 'UTC +1',
    edit: 'Edit',
  },
  {
    name: 'Neptune',
    type: 'Standup room',
    devices: ['L1', 'Studio kit'],
    timezone: 'UTC +1',
    edit: 'Edit',
  },
  {
    name: 'Mars',
    type: 'Meeting room',
    devices: ['L1'],
    timezone: 'UTC +1',
    edit: 'Edit',
  },
];

export const Primary = {
  args: {
    columns,
    rows,
    fullWidth: true,
  },
};
