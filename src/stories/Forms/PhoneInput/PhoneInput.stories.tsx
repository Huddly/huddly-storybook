import { Formik } from 'formik';
import { PhoneInput } from '.';
import { InputWrapper, Label } from '../../../index';

export default {
  component: PhoneInput,
};

export const Primary = {
  args: {
    id: 'phoneNumber',
    geoLocate: true,
    isRequired: true,
  },
};

const Template = ({ alert, hint, id, isRequired }) => {
  return (
    <>
      <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>
        <Label>Label</Label>
        <PhoneInput />
      </InputWrapper>
    </>
  );
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
            <PhoneInput geoLocate={true} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
          </InputWrapper>
          <button type='submit'>Yeet!</button>
        </form>
      )}
    </Formik>
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

export const InFormik = FormikTemplate.bind({});
InFormik.args = {
  ...Primary.args,
};
