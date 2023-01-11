import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';

export const FakeCheckbox = styled.label<{ hasError: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;

  // The fake custom checkbox
  &:before {
    display: block;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--input-toggle-size);
    height: var(--input-toggle-size);
    border: ${({ hasError }) =>
      hasError ? 'var(--border-error)' : `${rem(2)} solid var(--color-grey55);`};
    border-radius: ${rem(2)};
    content: '';
  }
`;

export const CheckboxInput = styled.input<GlobalInputProps>`
  opacity: 0;
  position: absolute;
  left: ${rem(-99999)}; // This is to hide the checkbox without affecting screen readers

  // Focus ring
  &:focus-visible + ${FakeCheckbox}:before {
    box-shadow: 0px 0px 0px ${rem(2)} white, 0px 0px 0px ${rem(4)} var(--color-lavender);
  }

  // Checked checkbox style
  &:checked + ${FakeCheckbox}:before {
    border-color: var(--color-lavender);
    background-color: var(--color-lavender);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 1.25L4.5 8L0.75 4.25' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
  }

  &:hover:checked + ${FakeCheckbox}:before {
    border-color: var(--color-salviaBlue);
    background-color: var(--color-salviaBlue);
  }

  &:hover:not(:checked) + ${FakeCheckbox}:before {
    border-color: var(--color-grey45);
    background-color: var(--color-grey91);
  }

  &:active:checked + ${FakeCheckbox}:before {
    border-color: var(--color-royalBlue);
    background-color: var(--color-royalBlue);
  }

  &:active:not(:checked) + ${FakeCheckbox}:before {
    border-color: var(--color-grey35);
    background-color: var(--color-grey86);
  }
`;

export const LabelText = styled.span`
  margin-left: var(--spacing-8);
  color: var(--color-grey15);
  font-size: var(--input-font-size);
`;

export interface CheckboxProps extends Omit<GlobalInputProps, 'value'> {
  children?: React.ReactNode;
  value?: boolean;
}

/**
 * Checkbox component
 */
export const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.RefObject<HTMLInputElement>) => {
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
        <CheckboxInput
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
        <FakeCheckbox htmlFor={id} hasError={hasError}>
          {children && <LabelText>{children}</LabelText>}
        </FakeCheckbox>
      </div>
    );
  }
);
