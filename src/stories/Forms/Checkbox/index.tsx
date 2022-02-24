import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  label {
    display: flex;
    font-size: var(--font-size-14);
    cursor: pointer;

    // Checkbox
    &:before {
      display: block;
      flex-shrink: 0;
      width: var(--spacing-16);
      height: var(--spacing-16);
      margin-right: var(--spacing-8);
      border-radius: 2px;
      content: '';

      border: ${({ hasError }) =>
        hasError ? 'var(--border-error)' : 'var(--border-primary)'};
    }

    a {
      color: var(--color-lavender);
    }
  }

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    left: -99999px; // This is to hide the checkbox without affecting screen readers

    // Focus ring
    &:focus + label:before {
      outline: 1px dotted #212121; // Fallback to non-webkit browsers
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: 3px;
    }

    // Checked checkbox style
    &:checked + label:before {
      border-color: var(--color-lavender);
      background-color: var(--color-lavender);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16px' viewBox='0 0 24 24' width='16px' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E");
      background-position: center;
      background-size: cover;
    }
  }
`;

export interface CheckboxProps extends Omit<GlobalInputProps, 'value'> {
  children: React.ReactNode;
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
          aria-describedby={ariaDescribedBy}
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

        <label htmlFor={id}>
          <span>{children}</span>
        </label>
      </Wrapper>
    );
  }
);
