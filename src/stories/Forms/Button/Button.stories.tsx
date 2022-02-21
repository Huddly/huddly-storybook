import { Button } from '.';

export default { component: Button };

export const Primary = {
  args: {
    type: 'button',
    children: 'Click me',
  },
};

export const Secondary = {
  args: {
    type: 'button',
    children: 'Click me',
    secondary: true,
  },
};
