import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';

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
    font-size: var(--font-size-16);
  }
`;

export interface InputProps extends GlobalInputProps {
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
}

/**
 * Input component
 */
export const Input = React.forwardRef(
  (props: InputProps, ref: React.RefObject<HTMLInputElement>) => {
    const {
      className,
      hasError,
      hasHint,
      id,
      isRequired,
      name,
      type = 'text',
      value,
    } = props;

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
          ref={ref}
          required={isRequired}
          type={type}
          value={value}
          {...props}
        />
      </Wrapper>
    );
  }
);

export default Input;
