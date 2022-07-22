import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Select } from './Select';
import { InputWrapper, Label, Option } from '../../../index';

export default {
  component: Select,
};

export const Primary = {
  args: {
    id: 'select',
    showItems: 7,
    isRequired: true,
  },
};

const Template = ({ alert, hint, id, isRequired }) => {
  return (
    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
      <Label>Label</Label>
      <Select>
        <Option value='option 1'>Option 1</Option>
        <Option value='option 2'>Option 2</Option>
        <Option value='option 3'>Option 3</Option>
        <Option value='option 4'>Option 4</Option>
        <Option value='option 5'>Option 5</Option>
        <Option value='option 6'>Option 6</Option>
        <Option value='option 7'>Option 7</Option>
        <Option value='option 8'>Option 8</Option>
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
        <Option value='custom1'>String value</Option>
        <Option value='custom2'>A very very very very very very very very long SelectOption 3</Option>
        <Option value='custom3'>
          <span>Inside span</span>
        </Option>
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

export const CountriesFromApi = CountriesFromApiTemplate.bind({});
CountriesFromApi.args = {
  ...Primary.args,
  hint: 'Try filtering by country name.',
};

const FormikTemplate = ({ alert, hint, id, isRequired }) => {
  const key = Primary.args.id;

  return (
    <Formik
      initialValues={{ [key]: '' }}
      onSubmit={console.log}
      validate={(v) => {
        console.log('validating');
        if (v[key] === '') return { [key]: 'This is a required field.' };
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <InputWrapper alert={errors[key] as string} hint={hint} id={id} isRequired={isRequired}>
            <Label>Label</Label>
            <Select onChange={handleChange} onBlur={handleBlur} value={values[key]}>
              <Option value='option 1'>Option 1</Option>
              <Option value='option 2'>Option 2</Option>
              <Option value='option 3'>Option 3</Option>
              <Option value='option 4'>Option 4</Option>
              <Option value='option 5'>Option 5</Option>
              <Option value='option 6'>Option 6</Option>
              <Option value='option 7'>Option 7</Option>
              <Option value='option 8'>Option 8</Option>
            </Select>
          </InputWrapper>
          <button type='submit'>Yeet!</button>
        </form>
      )}
    </Formik>
  );
};

export const InFormik = FormikTemplate.bind({});
InFormik.args = {
  ...Primary.args,
};
