import { Stepper } from './index';

export default { component: Stepper };

export const Primary = {
  args: {
    steps: ['Step 1', 'Loooooong step 2', 'Step 3', 'Step 4'],
    activeStep: 1,
  },
};
