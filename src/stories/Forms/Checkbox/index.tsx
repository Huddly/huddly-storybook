import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--spacing-8);

  input[type='checkbox'] {
    flex-shrink: 0;
    width: var(--spacing-16);
    height: var(--spacing-16);
    margin: 0;
    cursor: pointer;
    accent-color: var(--color-lavender);
  }

  label {
    width: calc(100% - var(--spacing-24)); // Substract checkbox size and gap
    font-size: var(--font-size-14);
    cursor: pointer;

    a {
      color: var(--color-lavender);
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
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          type='checkbox'
          checked={value}
          {...additionalInputProps}
        />

        <label htmlFor={id}>{children}</label>
      </Wrapper>
    );
  }
);
