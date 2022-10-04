import React from 'react';
import styled from 'styled-components';

const ButtonGroupElement = styled.div<{ vertical?: boolean; align: string }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  justify-content: ${({ align }) => align};
  align-items: ${({ align }) => align};
  gap: var(--spacing-16);
`;

export interface ButtonGroupProps {
  children: React.ReactNode;
  vertical?: boolean;
  align?: 'left' | 'center' | 'right';
}

/**
 * ButtonGroup component
 */
export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, align, vertical } = props;
  const alignValue = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';

  return (
    <ButtonGroupElement role='group' align={alignValue} vertical={vertical}>
      {children}
    </ButtonGroupElement>
  );
};
