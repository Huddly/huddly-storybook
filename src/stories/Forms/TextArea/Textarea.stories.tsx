import { TextArea } from '.';

export default { component: TextArea };

export const Primary = {
    args: {
        id: 'message',
        label: 'Your message',
        isRequired: true,
    },
};

export const Error = {
    args: {
        id: 'message',
        label: 'Your message',
        isRequired: true,
        error: 'Message is required.',
    },
};
