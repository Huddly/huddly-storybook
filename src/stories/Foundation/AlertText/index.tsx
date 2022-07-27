import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { Success, Info, Warning, Failed } from '../../Icons';
import { ErrorSeverity } from '@shared/types';
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
  hideIcon?: boolean;
  id?: string;
  severity: ErrorSeverity;
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
  hideIcon,
  id,
  severity = 'info',
}: AlertTextProps) => {
  return (
    <Wrapper className={className} id={id} role='alert'>
      {!hideIcon && <i aria-hidden='true'>{getIcon(severity)}</i>}
      <span>{children}</span>
    </Wrapper>
  );
};
