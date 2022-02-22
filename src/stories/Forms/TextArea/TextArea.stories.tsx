import TextArea from '.';

export default { component: TextArea };

export const Primary = {
  args: {
    id: 'message',
    label: 'Your message',
    isRequired: true,
  },
};

export const FailedInput = {
  args: {
    id: 'message',
    label: 'Your message',
    isRequired: true,
    alertLabel: 'Message is required.',
  },
};
