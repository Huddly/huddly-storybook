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

    // Radio
    &:before {
      display: block;
      box-sizing: border-box;
      flex-shrink: 0;
      width: var(--spacing-16);
      height: var(--spacing-16);
      margin-right: var(--spacing-8);
      border-radius: var(--spacing-16);
      content: '';

      border: ${({ hasError }) => (hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    }

    a {
      color: var(--color-lavender);
    }
  }

  input[type='radio'] {
    opacity: 0;
    position: absolute;
    left: ${rem(-99999)}; // This is to hide the radio without affecting screen readers

    // Focus ring
    &:focus + label:before {
      outline: ${rem(1)} dotted #212121; // Fallback to non-webkit browsers
      outline: ${rem(5)} auto -webkit-focus-ring-color;
      outline-offset: ${rem(3)};
    }

    // Checked radio style
    &:checked + label:before {
      border-color: var(--color-lavender);
      background-color: var(--color-lavender);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23fff'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: var(--spacing-8);
    }
  }
`;

export interface RadioProps extends Omit<GlobalInputProps, 'value'> {
  children: React.ReactNode;
  value?: boolean;
}

/**
 * Radio component
 */
export const Radio = React.forwardRef(
  (props: RadioProps, ref: React.RefObject<HTMLInputElement>) => {
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
          type='radio'
          {...additionalInputProps}
        />

        <label htmlFor={id}>
          <span>{children}</span>
        </label>
      </Wrapper>
    );
  }
);
