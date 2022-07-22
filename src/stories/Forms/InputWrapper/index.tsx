import React from 'react';
import styled from 'styled-components';

import { AlertText, Checkbox, Radio } from '../../../index';

interface WrapperProps {
  boxyErrorStyle: boolean;
  hasError: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: block;
  width: 100%;
  max-width: 400px;
  margin-bottom: var(--spacing-32);

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

const HintWrapper = styled.div<WrapperProps>`
  position: relative;

  & > * {
    position: absolute;
    margin-top: var(--spacing-4);

    ${({ boxyErrorStyle }) =>
      boxyErrorStyle &&
      `position: static; // The hint/error should take up space in the box when boxyErrorStyle is true
      margin-left: var(--spacing-24); // Align with checkbox/radio label
    `}

    ${({ boxyErrorStyle, hasError }) => boxyErrorStyle && hasError && `color: var(--color-warningRed);`}
  }
`;

const HintText = styled.div`
  color: var(--color-grayText);
  font-size: var(--font-size-12);
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
export const InputWrapper = React.forwardRef((props: InputWrapperProps, ref: React.RefObject<HTMLDivElement>) => {
  const { id, alert, children, className, hint, isRequired } = props;
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
   * If the component is a fragment, we need to pass props to each child inside the fragment.
   * However, if the child is not a valid react component, don't pass props at all.
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

  const HintWrapperProps = {
    boxyErrorStyle: hasBoxyErrorStyle,
    hasError: !!alert,
  };

  return (
    <Wrapper className={className} {...HintWrapperProps} ref={ref}>
      {childrenWithGlobalInputProps}

      {hint && !alert && (
        <HintWrapper {...HintWrapperProps}>
          <HintText id={ariaErrorMessageId} className='hint-text'>
            {hint}
          </HintText>
        </HintWrapper>
      )}

      {alert && (
        <HintWrapper {...HintWrapperProps}>
          <AlertText id={ariaErrorMessageId} className='alert-text' severity='error' hideIcon={hasBoxyErrorStyle}>
            {alert}
          </AlertText>
        </HintWrapper>
      )}
    </Wrapper>
  );
});
