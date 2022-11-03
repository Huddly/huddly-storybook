import { ButtonGroup } from './index';
import { Button } from '../Button';

export default { component: ButtonGroup };

export const Horizontal = {
  args: {
    children: (
      <>
        <Button secondary color='lavender'>
          Cancel
        </Button>
        <Button color='lavender'>Save</Button>
      </>
    ),
    align: 'right',
    vertical: false,
  },
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the buttons',
      control: { type: 'select' },
    },
  },
};

export const Vertical = {
  ...Horizontal,
  args: {
    ...Horizontal.args,
    align: 'center',
    vertical: true,
  },
};
