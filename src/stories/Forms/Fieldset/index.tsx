import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';

const Wrapper = styled.fieldset`
  display: block;
  min-width: 0;
  max-width: ${rem(400)};
  margin: 0 0 var(--spacing-32) 0;
  padding: 0.01em 0 0 0;
  border: 0;

  legend {
    display: table;
    margin-bottom: var(--spacing-16);
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size-20);
  }
`;

export interface FieldsetProps {
  children: React.ReactNode;
  className?: string;
  legend?: string;
}

/**
 * Fieldset component
 */
export const Fieldset = ({ children, className, legend }: FieldsetProps) => {
  return (
    <Wrapper className={className}>
      {legend && <legend>{legend}</legend>}
      {children}
    </Wrapper>
  );
};
