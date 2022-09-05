import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  label {
    display: flex;
    font-size: var(--font-size-14);
    cursor: pointer;
    align-items: center;
    color: var(--color-grey15);

    // Checkbox
    &:before {
      display: block;
      box-sizing: border-box;
      flex-shrink: 0;
      width: var(--spacing-24);
      height: var(--spacing-24);
      margin-right: var(--spacing-8);
      border-radius: ${rem(2)};
      content: '';
      border: ${({ hasError }) => (hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    }

    a {
      color: var(--color-lavender);
    }
  }

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    left: ${rem(-99999)}; // This is to hide the checkbox without affecting screen readers

    // Focus ring
    &:focus-visible + label:before {
      outline: ${rem(1)} dotted #212121; // Fallback to non-webkit browsers
      outline: ${rem(5)} auto -webkit-focus-ring-color;
      outline-offset: ${rem(3)};
    }

    // Checked checkbox style
    &:checked + label:before {
      border-color: var(--color-lavender);
      background-color: var(--color-lavender);
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 1.25L4.5 8L0.75 4.25' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center;
    }

    &:hover:checked + label:before {
      background-color: var(--color-salviaBlue);
      border-color: var(--color-salviaBlue);
    }

    &:hover:not(:checked) + label:before {
      background-color: var(--color-grey91);
      border-color: var(--color-grey45);
    }

    &:active:checked + label:before {
      background-color: var(--color-royalBlue);
      border-color: var(--color-royalBlue);
    }

    &:active:not(:checked) + label:before {
      background-color: var(--color-grey86);
      border-color: var(--color-grey35);
    }
  }
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
      <Wrapper className={className} hasError={hasError}>
        <input
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
        <label htmlFor={id}>{children && <span>{children}</span>}</label>
      </Wrapper>
    );
  }
);
