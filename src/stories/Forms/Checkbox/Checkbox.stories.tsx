import { Checkbox } from '.';
import { InputWrapper, Label } from '../../../index';

export default {
  component: Checkbox,
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
    checked: true,
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
      <Checkbox>{children}</Checkbox>
    </InputWrapper>
  );
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

const Multiple = ({ severity, severityMessage, id, isRequired }) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
      <Label>This label automatically gets transformed into a Fieldset legend! 🤯</Label>
      <Checkbox value='one'>One</Checkbox>
      <Checkbox value='two'>Two</Checkbox>
      <Checkbox value='three'>Three</Checkbox>
    </InputWrapper>
  );
};

export const MultipleCheckboxes = Multiple.bind({});
MultipleCheckboxes.args = {
  ...Primary.args,
  severity: 'info',
  severityMessage: 'Same old API for everything',
};
