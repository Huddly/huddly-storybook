import { InputWrapper } from '../../../index';
import { Toggle } from '.';

export default { component: Toggle };

const Template = ({ alert, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Toggle hasError={true} />
    </InputWrapper>
  );
};

export const InWrapper = Template.bind({});
InWrapper.args = {
  id: 'example',
  value: true,
};

export const InWrapperWithError = Template.bind({});
InWrapperWithError.args = {
  id: 'example',
  value: true,
  alert: 'Warning',
};
