import { Radio } from '.';
import { InputWrapper } from '../../../index';

export default {
  component: Radio,
};

export const Primary = {
  args: {
    id: 'example',
    children: (
      <>
        Confirm that you have read and accepted our <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>.
      </>
    ),
  },
};

export const Checked = {
  args: {
    ...Primary.args,
    value: true,
  },
};

const Template = ({ alert, children, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Radio>{children}</Radio>
    </InputWrapper>
  );
};

export const InWrapper = Template.bind({});
InWrapper.args = {
  ...Primary.args,
};

export const HasHint = Template.bind({});
HasHint.args = {
  ...Primary.args,
  hint: 'This is a hint.',
};

export const HasError = Template.bind({});
HasError.args = {
  ...Primary.args,
  alert: 'This is an error message.',
};
