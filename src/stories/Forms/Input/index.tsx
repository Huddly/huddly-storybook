import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '@shared/types';

interface WrapperProps {
  hasError?: boolean;
  isHidden?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(p) => (p.isHidden ? 'none' : 'block')};

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--spacing-48);
    padding: var(--spacing-16);
    border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
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
      ariaDescribedBy,
      ariaErrorMessage,
      className,
      hasError,
      id,
      isRequired,
      name,
      type = 'text',
      value,
      ...additionalInputProps
    } = props;

    return (
      <Wrapper
        aria-hidden={type === 'hidden'}
        className={className}
        hasError={hasError}
        isHidden={type === 'hidden'}
      >
        <input
          aria-labelledby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          type={type}
          value={value}
          {...additionalInputProps}
        />
      </Wrapper>
    );
  }
);
