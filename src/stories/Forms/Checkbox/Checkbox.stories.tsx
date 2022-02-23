import { Checkbox } from '.';
import { InputWrapper } from '../InputWrapper';

export default {
  component: Checkbox,
};

export const Primary = {
  args: {
    id: 'example',
    children: (
      <>
        Confirm that you have read and accepted our{' '}
        <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>.
      </>
    ),
  },
};

const Template = ({ alert, children, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Checkbox>{children}</Checkbox>
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
