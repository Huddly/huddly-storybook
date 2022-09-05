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

const Template = ({ alert, hint, id, isRequired, showItems, multiselect }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Label>Select a color</Label>
      <Select showItems={showItems} multiselect={multiselect}>
        <Option value='red'>Red color</Option>
        <Option value='green'>Green color</Option>
        <Option value='blue'>Blue color</Option>
        <Option value='yellow'>Yellow color</Option>
        <Option value='purple'>Purple color</Option>
        <Option value='orange'>Orange color</Option>
        <Option value='pink'>Pink color</Option>
        <Option value='brown'>Brown color</Option>
      </Select>
    </InputWrapper>
  );
};

const CountriesFromApiTemplate = ({ alert, hint, id, isRequired, multiselect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
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
