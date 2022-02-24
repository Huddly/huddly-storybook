import React from 'react';
import styled from 'styled-components';

import { AlertText, Checkbox, Radio } from '../../../index';

interface WrapperProps {
  boxyErrorStyle?: boolean;
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: block;
  width: 100%;
  max-width: 400px;
  margin-bottom: var(--spacing-32);

  .hint-wrapper {
    position: relative;
    margin-top: var(--spacing-4);
    .hint {
      &--help {
        color: #747474;
        font-size: var(--font-size-12);
      }
      // This is to make sure the hint/alert text doesn't take up space,
      // as we don't want inputs moving around.
      position: absolute;
    }
  }

  // Apply special styling when boxyErrorStyle is true.
  ${({ boxyErrorStyle }) =>
    boxyErrorStyle &&
    `.hint-wrapper .hint {
      margin-left: var(--spacing-24);
      &--error {
        color: var(--color-alertRed);
        position: static; // Make the error text take up space again
        i {
          display: none; // Hide icon
        }
      }
    }
  `}

  // Apply special styling when boxyErrorStyle is true and the input has an error.
  ${({ boxyErrorStyle, hasError }) =>
    boxyErrorStyle &&
    hasError &&
    `box-sizing: content-box;
    margin: calc(var(--spacing-8) * -1); // Negative margin to account for the padding, this is so the rest of the elements don't move
    padding: var(--spacing-8);
    border-radius: var(--border-radius);
    background-color: var(--color-alertRedBg);`}
`;

export interface InputWrapperProps {
  id: string;
  alert?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
  hint?: string;
  isRequired?: boolean;
}

/**
 * InputWrapper component
 */
export const InputWrapper = ({
  id,
  alert,
  children,
  className,
  hint,
  isRequired,
}: InputWrapperProps) => {
  // Set aria id's. These are used for inputs and the helper texts.
  const ariaDescribedById = hint ? `${id}-hint` : undefined;
  const ariaErrorMessageId = alert ? `${id}-error` : undefined;

  /*
   * Define global child/input props.
   * These are used to pass down to the children.
   */
  const globalInputProps = {
    ariaDescribedBy: ariaDescribedById,
    ariaErrorMessage: ariaErrorMessageId,
    hasError: alert ? true : undefined,
    id,
    isRequired,
  };

  /**
   * Pass globalInputProps to children.
   * If the compontent is a fragment, we need to pass props to each child inside the fragment.
   * However, if the child is not a valid react compontent, don't pass props at all.
   */
  const childrenWithGlobalInputProps = React.Children.map(children, (child) => {
    if (child.type === React.Fragment) {
      return React.Children.map(child.props.children, (child) => {
        if (typeof child?.type === 'string') return child;
        return React.cloneElement(child, globalInputProps);
      });
    }

    if (typeof child?.type === 'string') return child;
    return React.cloneElement(child, globalInputProps);
  });

  /*
   * We apply special error styles for inputs such as checkboxes and radio buttons.
   */
  const hasBoxyErrorStyle = childrenWithGlobalInputProps?.some((child) => {
    const componentsThatApply = [Checkbox, Radio];
    return componentsThatApply.includes(child?.type);
  });

  return (
    <Wrapper
      className={className}
      boxyErrorStyle={hasBoxyErrorStyle}
      hasError={!!alert}
    >
      {childrenWithGlobalInputProps}

      <div className='hint-wrapper'>
        {
          // Don't show the hint if there's an alert
          hint && !alert && (
            <span className='hint hint--help' id={ariaErrorMessageId}>
              {hint}
            </span>
          )
        }
        {alert && (
          <AlertText
            className='hint hint--error'
            id={ariaErrorMessageId}
            severity='error'
          >
            {alert}
          </AlertText>
        )}
      </div>
    </Wrapper>
  );
};
