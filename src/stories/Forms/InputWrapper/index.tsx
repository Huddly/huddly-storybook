import React from 'react';
import styled from 'styled-components';
import AlertText from '../../Foundation/AlertText';

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

interface InputWrapperProps {
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
  // We pass pass global props such as id to the children.
  const modifiedChildren = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child as React.ReactElement<any>, {
      hasError: alert ? true : null, // Null because we don't want the attributes showing up in the DOM if the value is false
      hasHint: hint ? true : null,
      id,
      isRequired,
    });
    return clone;
  });

  return (
    <Wrapper className={className}>
      {modifiedChildren}

      <HintWrapper>
        {
          // Don't show the hint if there's an alert.
          hint && !alert && <HintText className='hint'>{hint}</HintText>
        }

        {alert && (
          <AlertText severity='error' id={`${id}-error`} className='hint'>
            {alert}
          </AlertText>
        )}
      </HintWrapper>
    </Wrapper>
  );
};

export default InputWrapper;
