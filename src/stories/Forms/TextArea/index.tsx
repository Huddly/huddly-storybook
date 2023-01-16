import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { GlobalInputProps } from '../../../shared/types';
import { StyledInput } from '../Input';

const Wrapper = styled.div`
  flex: 1;
`;

const StyledTextArea = styled(StyledInput)<{ hasError?: boolean; height: number }>`
  height: ${(p) => rem(p.height)};
  resize: vertical;
  padding-block: var(--spacing-16);
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
  (props: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
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
      <Wrapper className={className}>
        <StyledTextArea
          as='textarea'
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          aria-labelledby={ariaDescribedBy}
          hasError={hasError}
          height={height}
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
