import { TextArea } from '.';
import { InputWrapper, Label } from '../../../index';

// Import stories from Input.stories.tsx

export default {
  component: TextArea,
};

export const Primary = {
  args: {
    id: 'example',
  },
};

const Template = ({ severity, severityMessage, id, isRequired }) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
      <Label>Label</Label>
      <TextArea />
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
