import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';

const Wrapper = styled.div<{ isHidden: boolean }>`
  display: ${(p) => (p.isHidden ? 'none' : 'block')};
  flex: 1;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: var(--input-height);
  padding-inline: var(--spacing-16);
  border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
  border-radius: var(--input-radius);
  font-size: var(--input-font-size);
  background: var(--color-grey96);

  :hover {
    border-color: var(--color-grey76);
  }

  :focus {
    outline: none;
    border-color: var(--color-lavender);
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
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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
      <Wrapper aria-hidden={type === 'hidden'} className={className} isHidden={type === 'hidden'}>
        <StyledInput
          aria-labelledby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          type={type}
          value={value}
          hasError={hasError}
          {...additionalInputProps}
        />
      </Wrapper>
    );
  }
);
