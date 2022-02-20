import { Label } from '.';

export default { component: Label };

export const Primary = {
    args: {
        htmlFor: 'name',
        children: 'Your name',
        isRequired: true,
        helpText: 'A help link',
        helpLink: '#',
    },
};
