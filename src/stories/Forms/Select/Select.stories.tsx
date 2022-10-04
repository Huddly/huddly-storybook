import React, { useState, useEffect } from 'react';
import { Select } from './Select';
import { InputWrapper, Label, Option } from '../../../index';

export default {
  component: Select,
};

export const Primary = {
  args: {
    id: 'select',
    showItems: 5,
    isRequired: true,
  },
};

const Template = ({ severity, severityMessage, id, isRequired, showItems, multiselect }) => {
  return (
    <InputWrapper
      severity={severity}
      severityMessage={severityMessage}
      id={id}
      isRequired={isRequired}
    >
      <Label>Select a color</Label>
      <Select showItems={showItems} multiselect={multiselect}>
        <Option value='red'>Red</Option>
        <Option value='green'>Green</Option>
        <Option value='blue'>Blue</Option>
        <Option value='yellow'>Yellow</Option>
        <Option value='purple'>Purple</Option>
        <Option value='orange'>Orange</Option>
        <Option value='pink'>Pink</Option>
        <Option value='brown'>Brown</Option>
      </Select>
    </InputWrapper>
  );
};

const CountriesFromApiTemplate = ({ id, isRequired, multiselect, severity, severityMessage }) => {
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
      <Select multiselect={multiselect}>
        {countries.map(({ name, alpha2Code, flags }) => (
          <Option key={alpha2Code} value={alpha2Code}>
            <img src={flags.png} alt={`Flag of ${name}`} loading='lazy' />
            <span>{name}</span>
          </Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export const InWrapper = Template.bind({});
InWrapper.args = {
  ...Primary.args,
  multiselect: false,
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

export const Multiselect = Template.bind({});
Multiselect.args = {
  ...Primary.args,
  multiselect: true,
  hint: 'This select component is a multiselect.',
};

export const CountriesFromApi = CountriesFromApiTemplate.bind({});
CountriesFromApi.args = {
  ...Primary.args,
  multiselect: false,
  hint: 'Try filtering by country name.',
};
