import React from 'react';
import styled from 'styled-components';
import { Success, Info, Warning, Failed } from '../../Icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: var(--spacing-8);
  font-size: var(--font-size-12);

  i {
    display: inline-flex;
    svg {
      width: var(--spacing-16);
      height: var(--spacing-16);
    }
  }
`;

export interface AlertTextProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

/**
 * TODO:
 * - Add actual icons.
 */
const getIcon = (severity: AlertTextProps['severity']) => {
  switch (severity) {
    case 'success':
      return <Success />;
    case 'info':
      return <Info />;
    case 'warning':
      return <Warning />;
    case 'error':
      return <Failed />;
  }
};

/**
 * AlertText component
 */
export const AlertText = ({
  children,
  className,
  id,
  severity = 'info',
}: AlertTextProps) => {
  return (
    <Wrapper className={className} id={id} role='alert'>
      <i aria-hidden='true'>{getIcon(severity)}</i>
      <span>{children}</span>
    </Wrapper>
  );
};

export default AlertText;
