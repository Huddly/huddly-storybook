import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  hasError?: boolean;
  isHidden?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(p) => (p.isHidden ? 'none' : 'block')};

  input {
    display: block;
    width: 100%;
    height: var(--spacing-48);
    padding: var(--spacing-16);
    border: ${(p) =>
      p.hasError ? 'var(--border-error)' : 'var(--border-primary)'};
    border-radius: var(--border-radius);
  }
`;

export interface InputProps {
  hasHint?: boolean;
  hasError?: boolean;
  className?: string;
  id?: string;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // eslint-disable-line no-unused-vars
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  value?: string;
}

/**
 * Input component
 */
export const Input = React.forwardRef(
  (
    {
      className,
      hasError,
      hasHint,
      id,
      isRequired,
      name,
      onChange,
      type = 'text',
      value,
    }: InputProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    return (
      <Wrapper
        aria-hidden={type === 'hidden'}
        className={className}
        hasError={hasError}
        isHidden={type === 'hidden'}
      >
        <input
          aria-describedby={hasHint && `${id}-hint`}
          aria-errormessage={hasError && `${id}-error`}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          onChange={onChange}
          ref={ref}
          required={isRequired}
          type={type}
          value={value}
        />
      </Wrapper>
    );
  }
);

export default Input;
