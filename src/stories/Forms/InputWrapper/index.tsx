import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { AlertText, Checkbox, Radio, Toggle } from '../../../index';
import { ErrorSeverity } from '../../../shared/types';

interface WrapperProps {
  boxyErrorStyle: boolean;
  hasError: boolean;
  labelIsIndented?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: block;
  width: 100%;
  max-width: ${rem(400)};
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

  // apply left margin for certain input types
  // only to direct childs if not it breaks for example checkboxes inside selects
  label:first-child {
    margin-left: ${(p) => (p.labelIsIndented ? 'var(--spacing-16)' : 0)};
  }
`;

const HintWrapper = styled.div<WrapperProps>`
  position: relative;

  & > * {
    position: absolute;
    margin-top: var(--spacing-4);

    ${({ boxyErrorStyle }) =>
      boxyErrorStyle &&
      `position: static; // The hint/error should take up space in the box when boxyErrorStyle is true
      margin-left: var(--spacing-32); // Align with checkbox/radio label
    `}

    ${({ boxyErrorStyle, hasError }) =>
      boxyErrorStyle && hasError && `color: var(--color-warningRed);`}
  }
`;

export interface InputWrapperProps {
  id: string;
  severity?: ErrorSeverity;
  severityMessage?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
  isRequired?: boolean;
}

/**
 * InputWrapper component
 */
export const InputWrapper = React.forwardRef(
  (props: InputWrapperProps, ref: React.RefObject<HTMLDivElement>) => {
    const { id, children, className, isRequired, severity, severityMessage } = props;
    // Set aria id's. These are used for inputs and the helper texts.
    const ariaDescribedById = severity === 'info' ? `${id}-hint` : undefined;
    const ariaErrorMessageId = severity === ('error' || 'warning') ? `${id}-error` : undefined;

    /*
     * Define global child/input props.
     * These are used to pass down to the children.
     */
    const globalInputProps = {
      ariaDescribedBy: ariaDescribedById,
      ariaErrorMessage: ariaErrorMessageId,
      hasError: severity === 'error' ? true : undefined,
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

    /*
     * We apply special left margin to labels of components that looks like "text fields" and not to Checkbox, Radio and Slack
     */
    const inputsWithoutIndentedLabels = [Checkbox, Radio, Toggle];
    const labelIsIndented = childrenWithGlobalInputProps?.some(
      (child) => !inputsWithoutIndentedLabels.includes(child.type)
    );

    const HintWrapperProps = {
      boxyErrorStyle: hasBoxyErrorStyle,
      hasError: severity === 'error',
    };

    return (
      <Wrapper
        className={className}
        {...HintWrapperProps}
        ref={ref}
        labelIsIndented={labelIsIndented}
      >
        {childrenWithGlobalInputProps}

        {severity && severityMessage && (
          <HintWrapper {...HintWrapperProps}>
            <AlertText id={ariaErrorMessageId} severity={severity} hideIcon={hasBoxyErrorStyle}>
              {severityMessage}
            </AlertText>
          </HintWrapper>
        )}
      </Wrapper>
    );
  }
);
