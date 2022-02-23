import { InputWrapper } from '.';
import { Label, Input } from '../../../index';

export default { component: InputWrapper };

export const Template = ({ alert, children, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      {children}
    </InputWrapper>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'example',
  children: (
    <>
      <Label>Label</Label>
      <Input />
    </>
  ),
};

export const HasHint = Template.bind({});
HasHint.args = {
  ...Primary.args,
  hint: 'This is a hint',
};

export const HasError = Template.bind({});
HasError.args = {
  ...Primary.args,
  alert: 'This is an error message.',
};
