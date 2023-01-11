import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';
import { FakeCheckbox, CheckboxInput, LabelText } from '../Checkbox';

// Inherited from Checkbox, element is a <label />
const FakeRadio = styled(FakeCheckbox)<{ hasError: boolean }>`
  // The fake custom radio
  &:before {
    border-radius: 50%;
  }
`;

// Inherited from Checkbox, element is a <input />
const RadioInput = styled(CheckboxInput)<GlobalInputProps>`
  // Checked radio style
  &:checked + ${FakeRadio}:before {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='white'/%3E%3C/svg%3E%0A");
  }
`;

export interface RadioProps extends Omit<GlobalInputProps, 'value'> {
  children?: React.ReactNode;
  value?: boolean;
}

/**
 * Radio component
 */
export const Radio = React.forwardRef(
  (props: RadioProps, ref: React.RefObject<HTMLInputElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
      children,
      className,
      hasError,
      id,
      isRequired,
      name,
      value,
      ...additionalInputProps
    } = props;

    return (
      <div className={className}>
        <RadioInput
          aria-labelledby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          checked={value}
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          type='radio'
          {...additionalInputProps}
        />
        <FakeRadio htmlFor={id} hasError={hasError}>
          {children && <LabelText>{children}</LabelText>}
        </FakeRadio>
      </div>
    );
  }
);
