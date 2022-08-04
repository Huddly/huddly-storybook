import { PhoneInput } from '.';
import { InputWrapper, Label } from '../../../index';

export default {
  component: PhoneInput,
};

export const Primary = {
  args: {
    id: 'phoneNumber',
    geoLocate: true,
    isRequired: true,
  },
};

const Template = ({ alert, hint, id, isRequired, geoLocate }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Label>Label</Label>
      <PhoneInput geoLocate={geoLocate} />
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
