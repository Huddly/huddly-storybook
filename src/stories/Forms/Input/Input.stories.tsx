import InputWrapper from '../InputWrapper';
import Flex from '../../Foundation/Flex';
import Fieldset from '../Fieldset';
import Input from '.';
import Label from '../Label';
import Checkbox from '../Checkbox';

export default { component: Input };

export const Signup = () => {
  return (
    <>
      <Fieldset legend='Personal information'>
        <Flex columnGap={16}>
          <InputWrapper id='fname' isRequired alert='Nono'>
            <Label>First name</Label>
            <Input />
          </InputWrapper>
          <InputWrapper id='lname' isRequired>
            <Label>Last name</Label>
            <Input />
          </InputWrapper>
        </Flex>
        <InputWrapper id='email' isRequired>
          <Label>Email</Label>
          <Input type='email' />
        </InputWrapper>
        <InputWrapper
          id='password'
          isRequired
          hint='6+ characters, must include upper case and number.'
        >
          <Label>Create password</Label>
          <Input type='password' />
        </InputWrapper>
        <InputWrapper id='confirm-password' isRequired>
          <Label>Confirm password</Label>
          <Input type='password' />
        </InputWrapper>
      </Fieldset>

      <Fieldset legend='Company information'>
        <InputWrapper id='company-name' isRequired>
          <Label>Company name</Label>
          <Input />
        </InputWrapper>
        <InputWrapper id='company-address' isRequired>
          <Label>Address</Label>
          <Input />
        </InputWrapper>
        <Flex columnGap={16}>
          <InputWrapper id='company-postal' isRequired>
            <Label>Post code</Label>
            <Input />
          </InputWrapper>
          <InputWrapper id='company-city' isRequired>
            <Label>City</Label>
            <Input />
          </InputWrapper>
          <InputWrapper id='company-country' isRequired>
            <Label>Country/region</Label>
            <Input />
          </InputWrapper>
        </Flex>
      </Fieldset>

      <InputWrapper id='privacy-policy' isRequired>
        <Checkbox>
          Confirm that you have read and accepted our{' '}
          <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>.
        </Checkbox>
      </InputWrapper>
    </>
  );
};

// export const Text = {
//   args: {
//     id: 'name',
//     type: 'text',
//     label: 'Your name',
//     isRequired: true,
//   },
// };

// export const Password = {
//   args: {
//     id: 'password',
//     type: 'password',
//     label: 'Your password',
//     isRequired: true,
//     helpLabel: 'Forgot your password?',
//     helpLink: '#',
//   },
// };

// export const FailedInput = {
//   args: {
//     id: 'password',
//     type: 'password',
//     label: 'Your password',
//     value: 'https://youtu.be/dQw4w9WgXcQ',
//     isRequired: true,
//     alertLabel: 'Password doesn’t match your email.',
//     helpLabel: 'Forgot your password?',
//     helpLink: '#',
//   },
// };
