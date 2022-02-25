import { Fieldset } from '.';
import { InputWrapper, Label, Input, Checkbox, Flex } from '../../../index';

export default {
  component: Fieldset,
};

export const Primary = {
  args: {
    legend: 'Personal Information',
    children: (
      <>
        <Flex columnGap={16}>
          <InputWrapper id='fname' isRequired alert='Test'>
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
        <InputWrapper id='checkbox1' isRequired>
          <Checkbox>Test</Checkbox>
        </InputWrapper>
        <InputWrapper id='checkbox2' isRequired hint='Test'>
          <Checkbox>Test</Checkbox>
        </InputWrapper>
        <InputWrapper id='checkbox3' isRequired alert='Test'>
          <Checkbox>Test</Checkbox>
        </InputWrapper>
      </>
    ),
  },
};
