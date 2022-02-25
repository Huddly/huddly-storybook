import { Icon } from '.';
import { icons } from './icons';

export default {
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
};

export const Primary = {
  args: {
    icon: 'location',
    size: '24',
    color: 'black',
  },
};

// Object.keys(icons).forEach((icon) => {
//   export const [icon] = {
//     args: {
//       icon,
//       size: '24',
//       color: 'black',
//     },
//   };
// });
