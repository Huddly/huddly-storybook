import { Checkbox } from '.';

export default { component: Checkbox };

export const Primary = {
  args: {
    id: 'message',
    label: 'Checkbox label',
    isRequired: true,
  },
};

export const WithChild = {
  args: {
    id: 'message',
    isRequired: true,
    children: (
      <>
        Confirm that you have read and accepted our{' '}
        <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>.
      </>
    ),
    alertLabel: 'This field is required.',
  },
};

export const FailedInput = {
  args: {
    id: 'message',
    label: 'Checkbox label',
    isRequired: true,
    alertLabel: 'This field is required.',
  },
};
