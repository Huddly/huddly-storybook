import { Select } from '.';
import { InputWrapper } from '../InputWrapper';
import { Label } from '../Label';

export default {
  component: Select,
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
      <Select>
        <option>Click me</option>
        <option>Never gonna give you up</option>
        <option>Never gonna let you down</option>
        <option>Never gonna run around and desert you</option>
        <option>Never gonna make you cry</option>
        <option>Never gonna say goodbye</option>
        <option>Never gonna tell a lie and hurt you</option>
      </Select>
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
