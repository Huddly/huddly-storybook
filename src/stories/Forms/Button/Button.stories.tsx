import { Button } from '.';

export default { component: Button };

export const Primary = {
  args: {
    type: 'button',
    children: 'Click me',
    color: 'intenseOrange',
  },
};

export const Secondary = {
  args: {
    type: 'button',
    children: 'Click me',
    secondary: true,
  },
};
