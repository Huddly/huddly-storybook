import React, { useState, useEffect } from 'react';
import { MultiSelect } from './MultiSelect';
import { Option } from './Option';
import { InputWrapper, Label } from '../../../index';
import styled from 'styled-components';

export default {
  component: MultiSelect,
};

export const Primary = {
  args: {
    id: 'select',
    isRequired: true,
    multiselect: false,
    placeholder: '',
  },
};

const Wrapper = styled.div<{ openOver: boolean }>`
  ${(p) => p.openOver && 'margin-top: 300px;'}
`;

const Template = ({ id, isRequired, placeholder, severity, severityMessage, openOver }) => {
  return (
    <Wrapper openOver={openOver}>
      <InputWrapper
        severity={severity}
        severityMessage={severityMessage}
        id={id}
        isRequired={isRequired}
      >
        <Label>Select a color</Label>
        <MultiSelect placeholder={placeholder}>
          <Option value='red'>Red</Option>
          <Option value='green'>Green</Option>
          <Option value='blue'>Blue</Option>
          <Option value='yellow'>Yellow</Option>
          <Option value='purple'>Purple</Option>
          <Option value='orange'>Orange</Option>
          <Option value='pink'>Pink</Option>
          <Option value='brown'>Brown</Option>
        </MultiSelect>
      </InputWrapper>
    </Wrapper>
  );
};

const CountriesFromApiTemplate = ({ id, isRequired, placeholder, severity, severityMessage }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
      <Label>Countries</Label>
      <MultiSelect placeholder={placeholder}>
        {countries.map(({ name, alpha2Code, flags }) => (
          <Option key={alpha2Code} value={alpha2Code}>
            <img src={flags.png} alt={`Flag of ${name}`} loading='lazy' />
            <span>{name}</span>
          </Option>
        ))}
      </MultiSelect>
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

export const CountriesFromApi = CountriesFromApiTemplate.bind({});
CountriesFromApi.args = {
  ...Primary.args,
  severity: 'info',
  severityMessage: 'Try filtering by country name.',
};

export const OpenOver = Template.bind({});
OpenOver.args = {
  ...Primary.args,
  openOver: true,
};
