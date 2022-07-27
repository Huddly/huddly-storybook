import React from 'react';
import styled from 'styled-components';

const FormElement = styled.form`
  /* Your styles here */
`;

export interface FormProps {
  children: React.ReactNode;
  [x: string]: any;
}

/**
 * Form component
 */
export const Form = (props: FormProps) => {
  const { children, ...additionalFormProps } = props;
  return <FormElement {...additionalFormProps}>{children}</FormElement>;
};
