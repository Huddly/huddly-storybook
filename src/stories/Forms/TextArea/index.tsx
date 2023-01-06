import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';

interface WrapperProps {
  hasError?: boolean;
  height: number;
}

const Wrapper = styled.div<WrapperProps>`
  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: ${(p) => rem(p.height)};
    padding: var(--spacing-16);
    border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    border-radius: var(--input-radius);
    font-size: var(--input-font-size);
    font-family: var(--font-family-primary);
    resize: vertical;
  }
`;

export interface TextAreaProps extends GlobalInputProps {
  /**
   * Height of the textarea in pixels.
   * @default 120
   */
  height?: number;
}

/**
 * TextArea component
 */
export const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: React.RefObject<HTMLTextAreaElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
      className,
      hasError,
      height = 120,
      id,
      isRequired,
      name,
      value,
      ...additionalInputProps
    } = props;

    return (
      <Wrapper className={className} hasError={hasError} height={height}>
        <textarea
          aria-labelledby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          ref={ref}
          required={isRequired}
          value={value}
          {...additionalInputProps}
        />
      </Wrapper>
    );
  }
);
