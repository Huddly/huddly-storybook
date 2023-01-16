import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const FakeCheckbox = styled.label<{ hasError: boolean }>`
  display: inline-flex;
  position: relative;
  align-items: flex-start;
  cursor: pointer;

  // The fake custom checkbox
  &:before {
    display: block;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--input-toggle-size);
    height: var(--input-toggle-size);
    border: ${({ hasError }) =>
      hasError ? 'var(--border-error)' : `${rem(2)} solid var(--color-grey55);`};
    border-radius: ${rem(2)};
    content: '';
  }
`;

export const CheckboxInput = styled.input<GlobalInputProps>`
  opacity: 0;
  position: absolute;
  left: ${rem(-99999)}; // This is to hide the checkbox without affecting screen readers

  // Focus ring
  &:focus-visible + ${FakeCheckbox}:before {
    box-shadow: 0px 0px 0px ${rem(2)} white, 0px 0px 0px ${rem(4)} var(--color-lavender);
  }

  // Checked checkbox style
  &:checked + ${FakeCheckbox}:before {
    border-color: var(--color-lavender);
    background-color: var(--color-lavender);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 1.25L4.5 8L0.75 4.25' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
  }

  &:hover:checked + ${FakeCheckbox}:before {
    border-color: var(--color-salviaBlue);
    background-color: var(--color-salviaBlue);
  }

  &:hover:not(:checked) + ${FakeCheckbox}:before {
    border-color: var(--color-grey45);
    background-color: var(--color-grey91);
  }

  &:active:checked + ${FakeCheckbox}:before {
    border-color: var(--color-royalBlue);
    background-color: var(--color-royalBlue);
  }

  &:active:not(:checked) + ${FakeCheckbox}:before {
    border-color: var(--color-grey35);
    background-color: var(--color-grey86);
  }
`;

export const LabelText = styled.span`
  --line-height: 1.5;
  margin-left: var(--spacing-8);
  color: var(--color-grey15);
  font-size: var(--input-font-size);
  line-height: var(--line-height);
  margin-top: calc((var(--input-toggle-size) - var(--input-font-size) * var(--line-height)) / 2);
`;

export const LabelLoading = styled.span`
  --loading-label-width: ${() => Math.floor(Math.random() * 150 + 150)}px;
  width: var(--loading-label-width);
  height: var(--input-font-size);
  margin-left: var(--spacing-8);
  border-radius: var(--input-radius);
  background: linear-gradient(
    90deg,
    var(--color-grey91) 0px,
    var(--color-grey86) 50px,
    var(--color-grey91) 100px
  );
  animation: loading-label-animation 3s ease-in-out infinite;
  @keyframes loading-label-animation {
    from {
      background-position: calc(var(--loading-label-width) * -1) 0;
    }
    to {
      background-position: var(--loading-label-width) 0;
    }
  }
`;

export interface CheckboxProps extends GlobalInputProps {
  checked?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
}

/**
 * Checkbox component
 */
export const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
      checked,
      children,
      className,
      hasError,
      id,
      isRequired,
      loading,
      name,
      value,
      ...additionalInputProps
    } = props;

    return (
      <Wrapper className={className}>
        <CheckboxInput
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
        <FakeCheckbox htmlFor={id} hasError={hasError}>
          {children && !loading && <LabelText>{children}</LabelText>}
          {loading && <LabelLoading aria-label='Loading checkbox label ...' />}
        </FakeCheckbox>
      </Wrapper>
    );
  }
);
