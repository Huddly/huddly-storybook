import { Input } from '.';

export default { component: Input };

export const Text = {
    args: {
        id: 'name',
        type: 'text',
        label: 'Your name',
        isRequired: true,
    },
};

export const Password = {
    args: {
        id: 'password',
        type: 'password',
        label: 'Your password',
        isRequired: true,
        helpText: 'Forgot your password?',
        helpLink: '#',
    },
};

export const Error = {
    args: {
        id: 'password',
        type: 'password',
        label: 'Your password',
        value: 'https://youtu.be/dQw4w9WgXcQ',
        isRequired: true,
        error: 'Password doesn’t match your email.',
        helpText: 'Forgot your password?',
        helpLink: '#',
    },
};
