import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';

const FakeRadio = styled.label<{ hasError: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--color-grey15);
  font-size: var(--font-size-14);
  cursor: pointer;

  // The fake custom checkbox
  &:before {
    display: block;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--spacing-24);
    height: var(--spacing-24);
    border: ${({ hasError }) =>
      hasError ? 'var(--border-error)' : `${rem(2)} solid var(--color-grey55);`};
    border-radius: 50%;
    content: '';
  }
`;

const RadioInput = styled.input.attrs({ type: 'radio' })<GlobalInputProps>`
  opacity: 0;
  position: absolute;
  left: ${rem(-99999)}; // This is to hide the checkbox without affecting screen readers

  // Focus ring
  &:focus-visible + ${FakeRadio}:before {
    box-shadow: 0px 0px 0px ${rem(2)} white, 0px 0px 0px ${rem(4)} var(--color-lavender);
  }

  // Checked checkbox style
  &:checked + ${FakeRadio}:before {
    border-color: var(--color-lavender);
    background-color: var(--color-lavender);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover:checked + ${FakeRadio}:before {
    border-color: var(--color-salviaBlue);
    background-color: var(--color-salviaBlue);
  }

  &:hover:not(:checked) + ${FakeRadio}:before {
    border-color: var(--color-grey45);
    background-color: var(--color-grey91);
  }

  &:active:checked + ${FakeRadio}:before {
    border-color: var(--color-royalBlue);
    background-color: var(--color-royalBlue);
  }

  &:active:not(:checked) + ${FakeRadio}:before {
    border-color: var(--color-grey35);
    background-color: var(--color-grey86);
  }
`;

const LabelText = styled.span`
  margin-left: var(--spacing-8);
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
          type='checkbox'
          {...additionalInputProps}
        />
        <FakeRadio htmlFor={id} hasError={hasError}>
          {children && <LabelText>{children}</LabelText>}
        </FakeRadio>
      </div>
    );
  }
);
