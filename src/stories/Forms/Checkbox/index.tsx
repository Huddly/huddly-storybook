import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { GlobalInputProps } from '@shared/types';

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
      box-sizing: border-box;
      flex-shrink: 0;
      width: var(--spacing-16);
      height: var(--spacing-16);
      margin-right: var(--spacing-8);
      border-radius: ${rem(2)};
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
    left: ${rem(
      -99999
    )}; // This is to hide the checkbox without affecting screen readers

    // Focus ring
    &:focus + label:before {
      outline: ${rem(1)} dotted #212121; // Fallback to non-webkit browsers
      outline: ${rem(5)} auto -webkit-focus-ring-color;
      outline-offset: ${rem(3)};
    }

    // Checked checkbox style
    &:checked + label:before {
      border-color: var(--color-lavender);
      background-color: var(--color-lavender);
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 533.973 533.973' version='1.1' viewBox='0 0 533.97 533.97' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='m477.93 52.261c-12.821-12.821-33.605-12.821-46.427 0l-266.96 266.95-62.075-62.069c-12.821-12.821-33.604-12.821-46.426 0l-46.427 46.426c-12.821 12.821-12.821 33.604 0 46.426l131.72 131.72c12.821 12.821 33.611 12.821 46.426 0l336.6-336.6c12.821-12.821 12.821-33.605 0-46.426l-46.425-46.426z'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
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
