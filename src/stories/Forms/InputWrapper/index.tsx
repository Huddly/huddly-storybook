import React, { useId } from 'react';
import styled from 'styled-components';
import flattenChildren from 'react-flatten-children';
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

const childrenContainsToggleableInputs = (children: React.ReactNode, minCount = 1): boolean => {
  const TOGGLEABLE_INPUTS = [Checkbox, Radio, Toggle];
  if (Array.isArray(children)) {
    const count = children.filter((child) => TOGGLEABLE_INPUTS.includes(child?.type)).length;
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
  loading?: boolean;
  name?: string;
  severity?: ErrorSeverity;
  severityMessage?: string;
}

/**
 * InputWrapper component
 */
export const InputWrapper = React.forwardRef(
  (props: InputWrapperProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      className,
      disableWidthConstraint,
      id,
      isRequired,
      loading,
      name = id,
      severity = 'neutral',
      severityMessage,
    } = props;
    // Flatten children and remove React Fragments.
    const children = flattenChildren(props.children);
    // If there are no toggleable inputs, indent the label to align with the input.
    const indentLabel = childrenContainsToggleableInputs(children) === false;
    // If there are more than 2 toggleable inputs, wrap them in a fieldset.
    const isFieldset = childrenContainsToggleableInputs(children, 2);

    // Set aria id's. These are used for inputs and the helper texts.
    const ariaDescribedById = severityMessage && severity !== 'error' ? `${id}-hint` : undefined;
    const ariaErrorMessageId = severityMessage && severity === 'error' ? `${id}-error` : undefined;

    // These are props or attributes passed down to semantically link the children together.
    const forwardedInputProps = {
      ariaDescribedBy: ariaDescribedById,
      ariaErrorMessage: ariaErrorMessageId,
      hasError: severity === 'error' ? true : undefined,
      id,
      isRequired,
      loading,
      name,
    };

    const childrenWithForwardedProps = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null;
      if (typeof child?.type === 'string') return child;
      if (isFieldset) forwardedInputProps.id = useId();
      return React.cloneElement(child, forwardedInputProps);
    }).filter((child) => child !== null);

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
