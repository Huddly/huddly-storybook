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
        Confirm that you have read and accepted our <a href='#'>Privacy Policy</a> and{' '}
        <a href='#'>Terms of Service</a>.
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

const Template = ({ severity, severityMessage, children, id, isRequired }) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
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
  severity: 'info',
  severityMessage: 'This is a hint',
};

export const HasWarning = Template.bind({});
HasWarning.args = {
  ...Primary.args,
  severity: 'warning',
  severityMessage: 'This is a warning message.',
};

export const HasError = Template.bind({});
HasError.args = {
  ...Primary.args,
  severity: 'error',
  severityMessage: 'This is an error message.',
};

export const HasSuccess = Template.bind({});
HasSuccess.args = {
  ...Primary.args,
  severity: 'success',
  severityMessage: 'This is a success message',
};
