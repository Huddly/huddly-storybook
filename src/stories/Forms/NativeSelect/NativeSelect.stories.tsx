import { NativeSelect } from '.';
import { InputWrapper } from '../InputWrapper';
import { Label } from '../Label';

export default {
  component: NativeSelect,
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
      <NativeSelect>
        <option>Click me</option>
        <option>Never gonna give you up</option>
        <option>Never gonna let you down</option>
        <option>Never gonna run around and desert you</option>
        <option>Never gonna make you cry</option>
        <option>Never gonna say goodbye</option>
        <option>Never gonna tell a lie and hurt you</option>
      </NativeSelect>
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
