import React from 'react';
import styled from 'styled-components';

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

export interface CheckboxProps {
  children: React.ReactNode;
  className?: string;
  hasError?: boolean;
  hasHint?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // eslint-disable-line no-unused-vars
  value?: boolean;
}

/**
 * Checkbox component
 */
export const Checkbox = React.forwardRef(
  (
    {
      children,
      className,
      hasError,
      hasHint,
      id,
      isRequired,
      name,
      onChange,
      value,
    }: CheckboxProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    return (
      <Wrapper className={className} hasError={hasError}>
        <input
          aria-describedby={hasHint && `${id}-hint`}
          aria-errormessage={hasError && `${id}-error`}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          onChange={onChange}
          ref={ref}
          required={isRequired}
          type='checkbox'
          checked={value}
        />

        <label htmlFor={id}>{children}</label>
      </Wrapper>
    );
  }
);

export default Checkbox;
