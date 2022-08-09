import React from 'react';
import styled from 'styled-components';
import { InfoSmall, WarningSmall } from '@huddly/frokost/havre18px';
import { ErrorSeverity } from '@shared/types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: var(--spacing-8);
  font-size: var(--font-size-12);

  i {
    display: inline-flex;
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
      return <InfoSmall />;
    case 'info':
      return <InfoSmall />;
    case 'warning':
      return <WarningSmall />;
    case 'error':
      return <WarningSmall />;
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
