import React, { useId } from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { AlertText, Fieldset, Checkbox, Radio, Toggle } from '../../../index';
import { ErrorSeverity } from '../../../shared/types';

const Wrapper = styled.div<{ disableWidthConstraint?: boolean; indentLabel?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: ${({ disableWidthConstraint }) => (disableWidthConstraint ? 'none' : rem(400))};
  margin-bottom: var(--spacing-32);

  label:first-child {
    margin-left: ${({ indentLabel }) => (indentLabel ? 'var(--spacing-16)' : '0')};
  }
`;

const CheckboxFieldset = styled(Fieldset)`
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-8);
  margin-bottom: 0;
`;

const AlertTextContianer = styled.div`
  position: relative;
  & > * {
    position: absolute;
    margin-top: var(--spacing-4);
  }
`;

const childrenContainsTogglableInputs = (children: React.ReactNode, minCount = 1): boolean => {
  const TOGGLABLE_INPUTS = [Checkbox, Radio, Toggle];
  if (Array.isArray(children)) {
    const count = children.filter((child) => TOGGLABLE_INPUTS.includes(child?.type)).length;
    return count >= minCount;
  }
  return false;
};

export interface InputWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  disableWidthConstraint?: boolean;
  id: string;
  isRequired?: boolean;
  name?: string;
  severity?: ErrorSeverity;
  severityMessage?: string;
}

/**
 * InputWrapper component
 */
export const InputWrapper = React.forwardRef(
  (props: InputWrapperProps, ref: React.RefObject<HTMLDivElement>) => {
    const {
      children,
      className,
      disableWidthConstraint,
      id,
      isRequired,
      name = id,
      severity = 'neutral',
      severityMessage,
    } = props;
    // Set aria id's. These are used for inputs and the helper texts.
    const ariaDescribedById = severityMessage && severity !== 'error' ? `${id}-hint` : undefined;
    const ariaErrorMessageId = severityMessage && severity === 'error' ? `${id}-error` : undefined;

    // If there are no togglable inputs, indent the label to align with the input.
    const indentLabel = !childrenContainsTogglableInputs(children);
    // If there are more than 2 togglable inputs, wrap them in a fieldset.
    const isFieldset = childrenContainsTogglableInputs(children, 2);

    // These are props or attributes passed down to semantically link the children together.
    const forwardedInputProps = {
      ariaDescribedBy: ariaDescribedById,
      ariaErrorMessage: ariaErrorMessageId,
      hasError: severity === 'error' ? true : undefined,
      id,
      isRequired,
      name,
    };

    const handleForwardingProps = (child) => {
      if (!child) return null;
      if (child.type === React.Fragment) {
        return React.Children.map(child.props.children, handleForwardingProps);
      }
      if (typeof child?.type === 'string') return child;
      // Id has to be unique for each toggleable input, so we generate one if fieldset is used.
      if (isFieldset) forwardedInputProps.id = useId();
      return React.cloneElement(child, forwardedInputProps);
    };

    const childrenWithForwardedProps = React.Children.map(children, handleForwardingProps).filter(
      (child) => child !== null
    );

    return (
      <Wrapper
        className={className}
        ref={ref}
        disableWidthConstraint={disableWidthConstraint}
        indentLabel={indentLabel}
      >
        {isFieldset ? (
          <CheckboxFieldset {...forwardedInputProps}>{childrenWithForwardedProps}</CheckboxFieldset>
        ) : (
          childrenWithForwardedProps
        )}

        {severity && severityMessage && (
          <AlertTextContianer>
            <AlertText id={ariaDescribedById || ariaErrorMessageId} severity={severity}>
              {severityMessage}
            </AlertText>
          </AlertTextContianer>
        )}
      </Wrapper>
    );
  }
);
