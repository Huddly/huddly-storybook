import { AlertText } from '.';

export default { component: AlertText };

export const SuccessAlert = {
  args: {
    severity: 'success',
    children: 'This is a success message',
  },
};

export const InfoAlert = {
  args: {
    severity: 'info',
    children: 'This is an info message',
  },
};

export const WarningAlert = {
  args: {
    severity: 'warning',
    children: 'This is a warning message',
  },
};

export const ErrorAlert = {
  args: {
    severity: 'error',
    children: 'This is an error message',
  },
};
