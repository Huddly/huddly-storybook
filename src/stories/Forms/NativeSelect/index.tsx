import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  select {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--input-height);
    padding-inline: var(--input-padding);
    border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    border-radius: var(--input-radius);
    font-size: var(--input-font-size);
    font-family: var(--font-family-primary);
    cursor: pointer;
    // This is to get a custom arrow on the select element
    background: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.5 7L12 1' stroke='black'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right var(--spacing-16) center;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export interface NativeSelectProps extends GlobalInputProps {
  children: React.ReactNode;
}

/**
 * Select component
 */
export const NativeSelect = React.forwardRef(
  (props: NativeSelectProps, ref: React.RefObject<HTMLSelectElement>) => {
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
        <select
          aria-labelledby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          value={value}
          {...additionalInputProps}
        >
          {children}
        </select>
      </Wrapper>
    );
  }
);
