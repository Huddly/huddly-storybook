import { Input } from '.';
import { InputWrapper, Label } from '../../../index';

export default {
  component: Input,
};

export const Primary = {
  args: {
    id: 'example',
  },
};

const Template = ({ alert, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Label>Label</Label>
      <Input />
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
