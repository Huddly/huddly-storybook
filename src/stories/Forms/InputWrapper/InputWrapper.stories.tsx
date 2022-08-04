import { InputWrapper } from '.';

export default { component: InputWrapper };

const Template = ({ alert, children, hint, id, isRequired }) => {
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
      <p>You can have whatever input inside this compontent.</p>
      <p>
        The compontent will pass props down to its children as needed to handle helper texts, error
        states etc...
      </p>
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
