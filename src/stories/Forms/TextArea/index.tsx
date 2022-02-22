import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  textarea {
    display: block;
    width: 100%;
    height: var(--spacing-48);
    height: 120px;
    padding: var(--spacing-16);
    border: var(--border);
    border: ${(p) =>
      p.hasError ? 'var(--border-error)' : 'var(--border-primary)'};
    border-radius: var(--border-radius);
    font-family: var(--font-family-primary);
    resize: vertical;
  }
`;

export interface TextAreaProps {
  className?: string;
  hasError?: boolean;
  hasHint?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // eslint-disable-line no-unused-vars
  value?: string;
}

/**
 * TextArea component
 */
export const TextArea = React.forwardRef(
  (
    {
      className,
      hasError,
      hasHint,
      id,
      isRequired,
      name,
      onChange,
      value,
    }: TextAreaProps,
    ref: React.RefObject<HTMLTextAreaElement>
  ) => {
    return (
      <Wrapper className={className} hasError={hasError}>
        <textarea
          aria-describedby={hasHint && `${id}-hint`}
          aria-errormessage={hasError && `${id}-error`}
          aria-invalid={hasError}
          id={id}
          name={name || id}
          onChange={onChange}
          ref={ref}
          required={isRequired}
          value={value}
        />
      </Wrapper>
    );
  }
);

export default TextArea;
