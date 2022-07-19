import React, { useState, useEffect } from 'react';
import { Select } from './Select';
import { InputWrapper, Label, Option } from '../../../index';

export default {
  component: Select,
};

export const Primary = {
  args: {
    id: 'example',
  },
};

const Template = ({ alert, hint, id, isRequired }) => {
  return (
    <>
      <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
        <Label>Label</Label>
        <Select>
          <Option value='option 1'>SelectOption 1</Option>
          <Option value='option 2'>SelectOption 2</Option>
          <Option value='option 3'>A very very very very very very very very long SelectOption 3</Option>
          <Option value='option 4'>SelectOption 4</Option>
          <Option value='option 5'>SelectOption 5</Option>
          <Option value='option 6'>SelectOption 6</Option>
          <Option value='option 7'>SelectOption 7</Option>
          <Option value='option 8'>SelectOption 8</Option>
        </Select>
      </InputWrapper>
    </>
  );
};

export const InWrapper = Template.bind({});
InWrapper.args = {
  ...Primary.args,
};

export const HasHint = Template.bind({});
HasHint.args = {
  ...Primary.args,
  hint: 'This is an error message.',
};

export const HasError = Template.bind({});
HasError.args = {
  ...Primary.args,
  alert: 'Something went wrong.',
};

const CountriesFromApiTemplate = ({ alert, hint, id, isRequired, showItems }) => {
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
      <Select showItems={showItems}>
        <Option value='string'>String value</Option>
      </Select>
    </InputWrapper>
  );
};

export const CountriesFromApi = CountriesFromApiTemplate.bind({});
CountriesFromApi.args = {
  ...Primary.args,
  hint: 'Try filtering by country name.',
  showItems: 7,
};
