import { Fieldset } from '.';
import { InputWrapper, Label, Input, Flex } from '../../../index';

export default {
  component: Fieldset,
};

export const Primary = {
  args: {
    legend: 'Personal Information',
    children: (
      <>
        <Flex columnGap='16'>
          <InputWrapper id='fname' isRequired severityMessage='Test' severity='error'>
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
      </>
    ),
  },
};
