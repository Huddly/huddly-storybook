import React from 'react';
import styled from 'styled-components';

import { AlertText } from '../../Foundation/AlertText';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin-bottom: var(--spacing-32);
`;

const HintWrapper = styled.div`
  margin-top: var(--spacing-4);

  // This is to make sure the hint/alert text doesn't take up space,
  // as we don't want inputs moving around.
  position: relative;
  .hint {
    position: absolute;
  }
`;

const HintText = styled.span`
  display: block;
  font-size: var(--font-size-12);
  color: '#747474';
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
  const ariaDescribedById = hint ? `${id}-hint` : undefined;
  const ariaErrorMessageId = alert ? `${id}-error` : undefined;

  // Define global child/input props
  const globalInputProps = {
    ariaDescribedBy: ariaDescribedById,
    ariaErrorMessage: ariaErrorMessageId,
    hasError: alert ? true : undefined,
    id,
    isRequired,
  };

  // Pass globalInputProps to children, but if it's a fragment, we need to pass props to each child
  const childrenWithGlobalInputProps = React.Children.map(children, (child) => {
    if (child.type === React.Fragment) {
      return React.Children.map(child.props.children, (child) => {
        return React.cloneElement(child, globalInputProps);
      });
    }
    return React.cloneElement(child, globalInputProps);
  });

  return (
    <Wrapper className={className}>
      {childrenWithGlobalInputProps}

      <HintWrapper>
        {
          // Don't show the hint if there's an alert
          hint && !alert && (
            <HintText className='hint' id={ariaErrorMessageId}>
              {hint}
            </HintText>
          )
        }

        {alert && (
          <AlertText className='hint' id={ariaErrorMessageId} severity='error'>
            {alert}
          </AlertText>
        )}
      </HintWrapper>
    </Wrapper>
  );
};
