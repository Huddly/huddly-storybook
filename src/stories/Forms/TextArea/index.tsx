import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { GlobalInputProps } from '@shared/types';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: ${rem(120)};
    padding: var(--spacing-16);
    border: ${(p) => (p.hasError ? 'var(--border-error)' : 'var(--border-primary)')};
    border-radius: var(--border-radius);
    font-family: var(--font-family-primary);
    resize: vertical;
  }
`;

/**
 * TextArea component
 */
export const TextArea = React.forwardRef(
  (props: GlobalInputProps, ref: React.RefObject<HTMLTextAreaElement>) => {
    const {
      ariaDescribedBy,
      ariaErrorMessage,
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
