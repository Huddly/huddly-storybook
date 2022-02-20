import { AlertText } from '.';

export default { component: AlertText };

export const Success = {
    args: {
        severity: 'success',
        children: 'This is a success message',
    },
};

export const Info = {
    args: {
        severity: 'info',
        children: 'This is an info message',
    },
};

export const Warning = {
    args: {
        severity: 'warning',
        children: 'This is a warning message',
    },
};

export const Error = {
    args: {
        severity: 'error',
        children: 'This is an error message',
    },
};
