import React from 'react';
import styled from 'styled-components';
import { GlobalInputProps } from '../../../shared/types';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.div<{ hasError?: boolean }>`
  height: var(--spacing-24);
  width: ${rem(44)};
  position: relative;
  ${(p) =>
    p.hasError &&
    `outline: var(--border-error);
     outline-style: auto;
     outline-offset: ${rem(2)};
  `};
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  // the toggle button uses a checkbox for UU reasons
  // this is then restyled to look like a toggle button
  width: 100%;
  height: 100%;
  border-radius: ${rem(20)};
  background: var(--color-grey55);
  appearance: none;
  outline: none;
  cursor: pointer;

  // the before element is adding the circle to the toggle button
  ::before {
    height: ${rem(20)};
    width: ${rem(20)};
    position: absolute;
    top: ${rem(2)};
    left: ${rem(2)};
    border-radius: 50%;
    background: white;
    transition: 0.2s ease-out;
    content: '';
  }

  :checked {
    background: var(--color-lavender);
  }

  :checked::before {
    left: ${rem(22)};
  }

  :checked:hover {
    background: var(--color-salviaBlue);
  }

  :hover {
    background: var(--color-grey45);
  }

  :checked:disabled {
    background: var(--color-plumbagoBlue);
  }

  :disabled {
    background: var(--color-grey76);
  }

  :focus-visible {
    outline-style: auto;
    outline-color: var(--color-salviaBlue);
    outline-offset: ${rem(3)};
  }
`;

export interface ToggleProps extends GlobalInputProps {
  checked?: boolean;
}

/**
 * Toggle component
 */
export const Toggle = React.forwardRef(
  (props: ToggleProps, ref: React.RefObject<HTMLInputElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
      checked,
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
        <StyledInput
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          aria-labelledby={ariaDescribedBy}
          checked={checked}
          id={id}
          name={name}
          ref={ref}
          required={isRequired}
          type='checkbox'
          value={value}
          {...additionalInputProps}
        />
      </Wrapper>
    );
  }
);
