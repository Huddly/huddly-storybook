import { Input } from '.';

export default { component: Input };

export const Primary = {
  args: {
    type: 'text',
    label: 'Your name',
    isRequired: true,
  },
};
