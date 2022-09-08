import { InputWrapper } from '../../../index';
import { Toggle } from '.';

export default { component: Toggle };

const Template = ({ severity, severityMessage, id, isRequired }) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
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
  severityMessage: 'Warning',
  severity: 'error',
};
