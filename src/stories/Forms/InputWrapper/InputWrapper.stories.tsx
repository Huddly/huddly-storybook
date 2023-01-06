import { InputWrapper } from '.';

export default { component: InputWrapper };

const Template = ({
  severity,
  severityMessage,
  children,
  id,
  isRequired,
  disableWidthConstraint,
}) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
      disableWidthConstraint={disableWidthConstraint}
    >
      {children}
    </InputWrapper>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'example',
  children: (
    <>
      <p>You can have whatever input inside this compontent.</p>
      <p>
        The compontent will pass props down to its children as needed to handle helper texts, error
        states etc...
      </p>
    </>
  ),
  disableWidthConstraint: false,
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
