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

      border: ${({ hasError }) => (hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    }

    a {
      color: var(--color-lavender);
    }
  }

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    left: ${rem(-99999)}; // This is to hide the checkbox without affecting screen readers

    // Focus ring
    &:focus-visible + label:before {
      outline: ${rem(1)} dotted #212121; // Fallback to non-webkit browsers
      outline: ${rem(5)} auto -webkit-focus-ring-color;
      outline-offset: ${rem(3)};
    }

    // Checked checkbox style
    &:checked + label:before {
      border-color: var(--color-lavender);
      background-color: var(--color-lavender);
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 14 10' version='1.1' viewBox='0 0 14 10' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M5.56904 8.7643L6.27614 9.47141L6.27614 9.4714L5.56904 8.7643ZM5.09763 8.7643L5.80474 8.05719L5.80474 8.05719L5.09763 8.7643ZM6.27614 9.4714L13.7071 2.04044L12.2929 0.626226L4.86193 8.05719L6.27614 9.4714ZM5.80474 8.05719L1.70711 3.95956L0.292893 5.37377L4.39052 9.4714L5.80474 8.05719ZM4.86193 8.05719C5.12228 7.79684 5.54439 7.79684 5.80474 8.05719L4.39052 9.4714C4.91122 9.9921 5.75544 9.9921 6.27614 9.47141L4.86193 8.05719Z'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center;
    }

    &:hover:checked + label:before {
      background-color: var(--color-salviaBlue);
      border-color: var(--color-salviaBlue);
    }

    &:hover:not(:checked) + label:before {
      background-color: var(--color-grey91);
      border-color: var(--color-grey45);
    }

    &:active:checked + label:before {
      background-color: var(--color-royalBlue);
      border-color: var(--color-royalBlue);
    }

    &:active:not(:checked) + label:before {
      background-color: var(--color-grey86);
      border-color: var(--color-grey35);
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
          aria-labelledby={ariaDescribedBy}
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
